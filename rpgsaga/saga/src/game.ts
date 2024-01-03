import { cloneDeep } from 'lodash';

import { Bina } from './bina';
import { Character } from './character';
import { ArrayItem } from './arrayItem';
import { CharacterFactory } from './characterFactory';

export class Game {
  private players: Character[] = [];
  private currentPlayers: ArrayItem[] = [];
  private newPlayerIndex: number;
  private quantityOfPlayers: number;

  constructor(quantityOfPlayers: number) {
    this.quantityOfPlayers = quantityOfPlayers;
    this.newPlayerIndex = 2;

    const characterFactory: CharacterFactory = new CharacterFactory();
    this.players = characterFactory.generatePlayers(this.quantityOfPlayers);
  }

  private announceDeadBody(deadBody: Character): void {
    console.log(`${deadBody.name} (${deadBody.class}) has died!`);
  }

  private isPlayerDead(player: Character): boolean {
    return player.healthPoints <= 0 ? true : false;
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

  private swapCurrentPlayers(): void {
    const temp = this.currentPlayers[0];
    this.currentPlayers[0] = this.currentPlayers[1];
    this.currentPlayers[1] = temp;
  }

  private playOneTurn(): number[] {
    const bina: Bina = new Bina();

    bina.attack(this.currentPlayers[0].player, this.currentPlayers[1].player);

    this.swapCurrentPlayers();

    return this.findDeadBodies();
  }

  private announceCurrentRoundPlayers(): void {
    const firstPlayer = this.currentPlayers[0].player;
    const secondPlayer = this.currentPlayers[1].player;
    console.log(`${firstPlayer.name} (${firstPlayer.class}) vs ${secondPlayer.name} (${secondPlayer.class})`);
  }

  private canReplaceDeadPlayer(): boolean {
    return this.newPlayerIndex < this.players.length;
  }

  private playOneRound(): void {
    this.announceCurrentRoundPlayers();

    let deadBodyIndexes: number[] = null;

    for (; deadBodyIndexes === null; ) {
      deadBodyIndexes = this.playOneTurn();
    }

    if (this.canReplaceDeadPlayer()) {
      this.replaceDeadBodies(deadBodyIndexes);
      this.restoreCurrentPlayers();
    }
  }

  private isGameOver() {
    return this.quantityOfPlayers <= 1 ? true : false;
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

  private initialiseCurrentPlayers() {
    this.currentPlayers = [new ArrayItem(cloneDeep(this.players[0]), 0), new ArrayItem(cloneDeep(this.players[1]), 1)];
  }

  public start(): void {
    this.initialiseCurrentPlayers();

    for (; !this.isGameOver(); ) {
      this.playOneRound();
      console.log('\n');
    }

    const winner: Character = this.findWinner();
    this.announceWinner(winner);
  }
}
