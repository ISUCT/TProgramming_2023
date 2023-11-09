import * as readline from 'readline';

import { Character } from './character';
import { Logger } from './logger';
import { MathHelper } from './mathHelper';
import { Classes } from './constants';
import { Knight } from './classes/knight';
import { Assasin } from './classes/assasin';
import { Archer } from './classes/archer';

class Game {
  private numPlayers = 0;
  private players: Character[] = [];

  startGame() {
    Logger.startGameMessage();

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question('', charactersCount => {
      if (Number(charactersCount)) {
        if (!MathHelper.isOdd(Number(charactersCount))) {
          this.setNumberPlayers(Number(charactersCount));
          this.generatePlayers();
          this.startNewRound(1, this.players);
        } else {
          Logger.numberIsOddErrorMessage();
        }
      } else {
        Logger.isNotANumberMessage();
      }

      rl.close();
    });
  }

  setNumberPlayers(numPlayers: number) {
    this.numPlayers = numPlayers;
  }

  generatePlayers() {
    for (let i = 0; i < this.numPlayers; i++) {
      let character: Character;
      switch (MathHelper.getRandomEnumValue(Classes)) {
        case Classes.KNIGHT:
          character = new Knight();
          break;
        case Classes.ASSASIN:
          character = new Assasin();
          break;
        case Classes.ARCHER:
          character = new Archer();
          break;
      }
      this.players.push(character);
    }
  }

  startNewRound(currentRound: number, characters: Character[]) {
    const winners: Character[] = [];
    const loosers: Character[] = [];

    const winnersArrayLength = characters.length / 2;
    if (!MathHelper.isWholeNumber(winnersArrayLength)) {
      winners.push(characters[0]);
      characters.splice(0, 1);
    }

    let firstCharacterIndex = 0;
    let secondCharacterIndex = 1;

    for (let i = 0; i < characters.length / 2; i++) {
      const fightResult: [Character, Character] = this.startFight(
        firstCharacterIndex,
        secondCharacterIndex,
        characters,
      );
      Logger.endFightMessage(fightResult[0], fightResult[1]);

      winners.push(fightResult[0]);
      loosers.push(fightResult[1]);

      firstCharacterIndex += 2;
      secondCharacterIndex += 2;
    }

    Logger.roundResultMessage(winners, loosers, currentRound);

    if (winners.length > 1) {
      this.startNewRound(currentRound + 1, winners);
    } else {
      Logger.endGame(winners[0]);
    }
  }

  startFight(
    firstCharacterNumber: number,
    secondCharacterNumber: number,
    characters: Character[],
  ): [Character, Character] {
    const firstCharacter: Character = characters[firstCharacterNumber];
    const secondCharacter: Character = characters[secondCharacterNumber];

    Logger.battleAnnouncement(firstCharacter, secondCharacter);

    let firstCharacterInitiative = 0;
    let secondCharacterInitiative = 0;

    while (firstCharacterInitiative === secondCharacterInitiative) {
      firstCharacterInitiative = firstCharacter.checkInitiative();
      secondCharacterInitiative = secondCharacter.checkInitiative();
    }

    if (firstCharacterInitiative > secondCharacterInitiative) {
      Logger.initiativeMessage(firstCharacterInitiative, secondCharacterInitiative, firstCharacter, secondCharacter);
      return this.proccessFight([firstCharacter, secondCharacter]);
    } else {
      Logger.initiativeMessage(secondCharacterInitiative, firstCharacterInitiative, secondCharacter, firstCharacter);
      return this.proccessFight([secondCharacter, firstCharacter]);
    }
  }

  proccessFight(characters: Character[]): [Character, Character] {
    let looser: Character = null;
    let winner: Character = null;
    while (looser === null) {
      for (let index = 0; index < characters.length; index++) {
        const attackingCharacter = characters[index];

        let defendingCharacterIndex = index + 1;
        if (defendingCharacterIndex >= characters.length) {
          defendingCharacterIndex = 0;
        }

        const defendingCharacter = characters[defendingCharacterIndex];

        attackingCharacter.characterTurn(defendingCharacter);

        if (defendingCharacter.healthValue <= 0) {
          looser = characters[defendingCharacterIndex];
          winner = attackingCharacter;
          winner.hillHP();
          winner.endBurn();
          break;
        }
      }
    }
    return [winner, looser];
  }
}

const game = new Game();
game.startGame();
