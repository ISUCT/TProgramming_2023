import { cloneDeep } from 'lodash';

import { Bina } from './bina';
import { Character } from './character';
import { ArrayItem } from './arrayItem';
import { CharacterFactory } from './characterFactory';
import { Message } from './message';
import { AttackType } from './attackType';
import { StatusEffectManager } from './spell_system/statusEffectManager';
import { GameUtility } from './gameUtility';

export class Game {
  private _players: Character[] = [];
  private _currentPlayers: ArrayItem[] = [];
  private _newPlayerIndex: number;
  private _quantityOfPlayers: number;

  private _utility = new GameUtility();

  constructor(quantityOfPlayers: number) {
    if (quantityOfPlayers === 1) {
      throw Error('Quantity of players should be greater than 1');
    }

    this._quantityOfPlayers = quantityOfPlayers;
    this._newPlayerIndex = 2;
    const characterFactory: CharacterFactory = new CharacterFactory();
    this._players = characterFactory.generatePlayers(this._quantityOfPlayers);
  }

  private swapCurrentPlayers(): void {
    const temp = this._currentPlayers[0];
    this._currentPlayers[0] = this._currentPlayers[1];
    this._currentPlayers[1] = temp;
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
      if (this._utility.chooseAnAttackType(attacker.spell.canExecute()) === AttackType.attack) {
        bina.performAttack();
      } else {
        bina.performSpell();
      }
    }

    this.swapCurrentPlayers();

    const deadBodies = this._utility.findDeadBodies(this._currentPlayers);
    if (deadBodies !== null) {
      this._quantityOfPlayers -= deadBodies.length;
    }

    return deadBodies;
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
      this._newPlayerIndex = this._utility.replaceDeadBodies(
        this._players,
        this._currentPlayers,
        this._newPlayerIndex,
        deadBodyIndexes,
      );

      this._utility.restoreCurrentPlayers(this._currentPlayers, this._players);
    }
  }

  private initialiseCurrentPlayers(): void {
    this._currentPlayers = [
      new ArrayItem(cloneDeep(this._players[0]), 0),
      new ArrayItem(cloneDeep(this._players[1]), 1),
    ];
  }

  private isGameOver(): boolean {
    return this._quantityOfPlayers <= 1 ? true : false;
  }

  private announceWinner(winner: Character): void {
    if (winner !== null) {
      console.log(`The winner is ${winner.name} (${winner.class})!`);
    } else {
      console.log(`It's a draw!`);
    }
  }

  public start(): void {
    this.initialiseCurrentPlayers();

    for (; !this.isGameOver(); ) {
      this.playOneRound();
      console.log('\n');
    }

    const winner: Character = this._utility.findWinner(this._currentPlayers);
    this.announceWinner(winner);
  }
}
