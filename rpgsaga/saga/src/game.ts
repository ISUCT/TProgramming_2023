import { Bina } from './bina';
import { Character } from './character';
import { CharacterClass } from './characterClasses';
import { CharacterFactory } from './characterFactory';
import { getRandomEnumValue } from './randomMath';
import { ArrayItem } from './arrayItem';

export class Game {
  private players: Character[] = [];
  private currentPlayers: ArrayItem[] = [];
  private newPlayerIndex: number;
  private quantityOfPlayers: number;

  private bina: Bina = new Bina();

  private winner: Character = null;

  constructor(quantityOfPlayers: number) {
    this.quantityOfPlayers = quantityOfPlayers;
    this.newPlayerIndex = 2;

    const factory: CharacterFactory = new CharacterFactory();
    for (let i = 0; i < this.quantityOfPlayers; i++) {
      const character = factory.getCharacter(getRandomEnumValue(CharacterClass));
      this.players.push(character);
    }

    this.currentPlayers = [new ArrayItem(this.players[0], 0), new ArrayItem(this.players[1], 1)];
  }

  private isPlayerDead(player: Character) {
    return player.healthPoints <= 0 ? true : false;
  }

  private isGameOver() {
    return this.quantityOfPlayers <= 1 ? true : false;
  }

  private swapCurrentPlayers() {
    const temp = this.currentPlayers[0];
    this.currentPlayers[0] = this.currentPlayers[1];
    this.currentPlayers[1] = temp;
  }

  private findDeadBodies(): number[] {
    const deadBodiesIndexes: number[] = [];

    for (let i = 0; i < this.currentPlayers.length; i++) {
      if (this.isPlayerDead(this.currentPlayers[i].player)) {
        this.quantityOfPlayers -= 1;
        deadBodiesIndexes.push(i);
      }
    }

    if (deadBodiesIndexes.length > 0) {
      return deadBodiesIndexes;
    } else {
      return null;
    }
  }

  private replaceDeadBodies(deadPlayerIndexes: number[]) {
    for (let i = 0; i < this.currentPlayers.length; i++) {
      const deadPlayerIndex: number = deadPlayerIndexes[i];
      if (this.isPlayerDead(this.currentPlayers[deadPlayerIndex].player)) {
        this.currentPlayers[deadPlayerIndex] = new ArrayItem(this.players[this.newPlayerIndex], this.newPlayerIndex);
        this.newPlayerIndex += 1;
      }
    }
  }

  private countDeadPlayers(): number {
    let counter = 0;
    for (let i = 0; i < this.currentPlayers.length; i++) {
      if (this.isPlayerDead(this.currentPlayers[i].player)) {
        counter += 1;
      }
    }

    return counter;
  }

  private findWinner(): Character {
    const deadPlayersCount: number = this.countDeadPlayers();
    if (deadPlayersCount === 1) {
      for (let i = 0; i < this.currentPlayers.length; i++) {
        const currentPlayer = this.currentPlayers[i];
        if (!this.isPlayerDead(currentPlayer.player)) {
          return currentPlayer.player;
        }
      }
    }

    return null;
  }

  private announceWinner() {
    if (this.winner !== null) {
      console.log(`The winner is ${this.winner.name} (${this.winner.class})!`);
    } else {
      console.log(`It's a draw!`);
    }
  }

  private canPlayOneMoreRound() {
    return this.quantityOfPlayers > 2 ? true : false;
  }

  private playOneRound() {
    this.bina.attack(this.currentPlayers[0], this.currentPlayers[1]);

    this.swapCurrentPlayers();

    const deadBodyIndexes = this.findDeadBodies();
    if (deadBodyIndexes !== null) {
      this.replaceDeadBodies(deadBodyIndexes);
    }

    this.winner = this.findWinner();
  }

  public start() {
    for (; !this.isGameOver(); ) {
      if (this.canPlayOneMoreRound()) {
        this.playOneRound();
      }
    }

    this.announceWinner();
  }
}
