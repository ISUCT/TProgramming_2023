import { ActionType } from './affinities';

export interface IAction {
  name: string;
  type: ActionType;
  damage?: number;
  burn?: boolean;
  freeze?: boolean;
}

abstract class Action {
  name: string;
  type: ActionType;

  constructor(name: string, type: ActionType) {
    this.name = name;
    this.type = type;
  }
}

export class Attack extends Action {
  damage: number;

  constructor(dmg: number) {
    super('default attack', ActionType.Normal);
    this.damage = dmg;
  }
}

export class AbilityAttack extends Action {
  damage: number;
  burnEffect: boolean;
  freezeEffect: boolean;

  constructor(name: string, type: ActionType, dmg: number, burn: boolean, freeze: boolean) {
    super(name, type);
    this.damage = dmg;
    this.burnEffect = burn;
    this.freezeEffect = freeze;
  }
}

export class Ability extends Action {
  burnEffect: boolean;
  freezeEffect: boolean;

  constructor(name: string, type: ActionType, dmg: number, burn: boolean, freeze: boolean) {
    super(name, type);
    this.burnEffect = burn;
    this.freezeEffect = freeze;
  }
}

export class State extends Action {
  constructor(name: string) {
    super(name, ActionType.Support);
  }
}
