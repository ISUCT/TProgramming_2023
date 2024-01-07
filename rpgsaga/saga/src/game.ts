import { cloneDeep } from 'lodash';

import { Bina } from './bina';
import { Character } from './character';
import { ArrayItem } from './arrayItem';
import { CharacterFactory } from './characterFactory';
import { Message } from './message';
import { randomIntFromInterval } from './randomMath';
import { AttackType } from './attackType';
import { StatusEffectManager } from './spell_system/statusEffectManager';

export class Game {
  private _players: Character[] = [];
  private _currentPlayers: ArrayItem[] = [];
  private _newPlayerIndex: number;
  private _quantityOfPlayers: number;

  constructor(quantityOfPlayers: number) {
    this._quantityOfPlayers = quantityOfPlayers;
    this._newPlayerIndex = 2;

    const characterFactory: CharacterFactory = new CharacterFactory();
    this._players = characterFactory.generatePlayers(this._quantityOfPlayers);
  }

  private announceDeadBody(deadBody: Character): void {
    console.log(`${deadBody.name} (${deadBody.class}) has died!`);
  }

  private isPlayerDead(player: Character): boolean {
    return player.healthPoints <= 0 ? true : false;
  }

  private findDeadBodies(): number[] {
    const deadBodiesIndexes: number[] = [];

    for (let i = 0; i < this._currentPlayers.length; i++) {
      const currectPlayer = this._currentPlayers[i].player;

      if (this.isPlayerDead(currectPlayer)) {
        this._quantityOfPlayers -= 1;
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
      if (this.isPlayerDead(this._currentPlayers[deadPlayerIndex].player)) {
        this._currentPlayers[deadPlayerIndex] = new ArrayItem(
          cloneDeep(this._players[this._newPlayerIndex]),
          this._newPlayerIndex,
        );
        this._newPlayerIndex += 1;
      }
    }
  }

  private countDeadPlayers(): number {
    let counter = 0;
    for (let i = 0; i < this._currentPlayers.length; i++) {
      if (this.isPlayerDead(this._currentPlayers[i].player)) {
        counter += 1;
      }
    }

    return counter;
  }

  private restoreCurrentPlayers(): void {
    for (let i = 0; i < this._currentPlayers.length; i++) {
      this._currentPlayers[i].player = cloneDeep(this._players[this._currentPlayers[i].index]);
    }
  }

  private swapCurrentPlayers(): void {
    const temp = this._currentPlayers[0];
    this._currentPlayers[0] = this._currentPlayers[1];
    this._currentPlayers[1] = temp;
  }

  private chooseAnAttackType(): AttackType {
    const randomNumber = randomIntFromInterval(1, 10);
    if (randomNumber <= 3) {
      return AttackType.spell;
    }

    return AttackType.attack;
  }

  private playOneTurn(): number[] {
    const bina: Bina = new Bina();
    const statusEffectManager = new StatusEffectManager();

    const attacker: Character = this._currentPlayers[0].player;
    const target: Character = this._currentPlayers[1].player;

    const message: Message = new Message(
      attacker,
      attacker.toString(),
      target,
      target.toString(),
      attacker.getAttackPoints(),
      attacker.spell,
    );

    statusEffectManager.removeEndedStatusEffects(attacker);
    statusEffectManager.applyAllStatusEffects(attacker);

    bina.receiveMessage(message);

    if (!attacker.isStunned) {
      if (this.chooseAnAttackType() === AttackType.attack) {
        bina.performAttack();
      } else {
        bina.performSpell();
      }
    }

    this.swapCurrentPlayers();

    return this.findDeadBodies();
  }

  private announceCurrentRoundPlayers(): void {
    const firstPlayer = this._currentPlayers[0].player;
    const secondPlayer = this._currentPlayers[1].player;
    console.log(`${firstPlayer.name} (${firstPlayer.class}) vs ${secondPlayer.name} (${secondPlayer.class})`);
  }

  private canReplaceDeadPlayer(): boolean {
    return this._newPlayerIndex < this._players.length;
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

  private isGameOver(): boolean {
    return this._quantityOfPlayers <= 1 ? true : false;
  }

  private findWinner(): Character {
    const deadPlayersCount: number = this.countDeadPlayers();
    if (deadPlayersCount === 1) {
      for (let i = 0; i < this._currentPlayers.length; i++) {
        const currentPlayer = this._currentPlayers[i].player;
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

  private initialiseCurrentPlayers(): void {
    this._currentPlayers = [
      new ArrayItem(cloneDeep(this._players[0]), 0),
      new ArrayItem(cloneDeep(this._players[1]), 1),
    ];
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
