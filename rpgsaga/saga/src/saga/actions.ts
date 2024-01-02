import { ActionType } from './affinities';
import { Changer } from './changer';
import { IStatus } from './statuses';

export interface IAction {
  name: string;
  type: ActionType;
  damage?: number;
  status?: IStatus;
  changer?: Changer;
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

export class Skill extends Action {
  damage: number;
  status: IStatus | undefined;

  constructor(name: string, type: ActionType, dmg: number, status?: IStatus) {
    super(name, type);
    this.damage = dmg;
    this.status = status;
  }
}

export class State extends Action {
  constructor(name: string) {
    super(name, ActionType.Support);
  }
}
