import { cloneDeep } from 'lodash';

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

  constructor(quantityOfPlayers: number) {
    this.quantityOfPlayers = quantityOfPlayers;
    this.newPlayerIndex = 2;

    const factory: CharacterFactory = new CharacterFactory();
    for (let i = 0; i < this.quantityOfPlayers; i++) {
      const character = factory.getCharacter(getRandomEnumValue(CharacterClass));
      this.players.push(character);
    }

    this.currentPlayers = [new ArrayItem(cloneDeep(this.players[0]), 0), new ArrayItem(cloneDeep(this.players[1]), 1)];
  }

  private isPlayerDead(player: Character): boolean {
    return player.healthPoints <= 0 ? true : false;
  }

  private isGameOver() {
    return this.quantityOfPlayers <= 1 ? true : false;
  }

  private swapCurrentPlayers(): void {
    const temp = this.currentPlayers[0];
    this.currentPlayers[0] = this.currentPlayers[1];
    this.currentPlayers[1] = temp;
  }

  private announceDeadBody(deadBody: Character): void {
    console.log(`${deadBody.name} (${deadBody.class}) has died!`);
  }

  private findDeadBodies(): number[] {
    const deadBodiesIndexes: number[] = [];

    for (let i = 0; i < this.currentPlayers.length; i++) {
      const currectPlayer = this.currentPlayers[i].player;

      if (this.isPlayerDead(currectPlayer)) {
        this.quantityOfPlayers -= 1;
        deadBodiesIndexes.push(i);

        this.announceDeadBody(currectPlayer);
      }
    }

    if (deadBodiesIndexes.length > 0) {
      return deadBodiesIndexes;
    } else {
      return null;
    }
  }

  private canReplaceDeadPlayer(): boolean {
    return this.newPlayerIndex < this.players.length;
  }

  private replaceDeadBodies(deadPlayerIndexes: number[]): void {
    for (let i = 0; i < deadPlayerIndexes.length; i++) {
      const deadPlayerIndex: number = deadPlayerIndexes[i];
      if (this.isPlayerDead(this.currentPlayers[deadPlayerIndex].player)) {
        this.currentPlayers[deadPlayerIndex] = new ArrayItem(
          cloneDeep(this.players[this.newPlayerIndex]),
          this.newPlayerIndex,
        );
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

  private restoreCurrentPlayers(): void {
    for (let i = 0; i < this.currentPlayers.length; i++) {
      this.currentPlayers[i].player = cloneDeep(this.players[this.currentPlayers[i].index]);
    }
  }

  private findWinner(): Character {
    const deadPlayersCount: number = this.countDeadPlayers();
    if (deadPlayersCount === 1) {
      for (let i = 0; i < this.currentPlayers.length; i++) {
        const currentPlayer = this.currentPlayers[i].player;
        if (!this.isPlayerDead(currentPlayer)) {
          return currentPlayer;
        }
      }
    }

    return null;
  }

  private announceWinner(winner: Character): void {
    if (winner !== null) {
      console.log(`The winner is ${winner.name} (${winner.class})!`);
    } else {
      console.log(`It's a draw!`);
    }
  }

  private announceCurrentRoundPlayers(): void {
    const firstPlayer = this.currentPlayers[0].player;
    const secondPlayer = this.currentPlayers[1].player;
    console.log(`${firstPlayer.name} (${firstPlayer.class}) vs ${secondPlayer.name} (${secondPlayer.class})`);
  }

  private playOneTurn(): number[] {
    this.bina.attack(this.currentPlayers[0], this.currentPlayers[1]);

    this.swapCurrentPlayers();

    return this.findDeadBodies();
  }

  private playOneRound(): void {
    let deadBodyIndexes: number[] = null;

    for (; deadBodyIndexes === null; ) {
      deadBodyIndexes = this.playOneTurn();
    }

    if (this.canReplaceDeadPlayer()) {
      this.replaceDeadBodies(deadBodyIndexes);
      this.restoreCurrentPlayers();
    }
  }

  public start(): void {
    for (; !this.isGameOver(); ) {
      this.announceCurrentRoundPlayers();
      this.playOneRound();
      console.log('\n');
    }

    const winner: Character = this.findWinner();
    this.announceWinner(winner);
  }
}
