import { ActionType } from './affinities';

export interface IStatus {
  name: string;
  dmgType: ActionType;
  dmgPerTurn?: number;
  turnCounter?: number;
  skipTurn?: boolean;
}

export class Status {
  public name: string;
  public turnCounter: number; // use negative number to make status never cast off
  public dmgPerTurn: number;
  public skipTurn: boolean;

  constructor(name: string, dmgType: ActionType, dmgPerTurn = 0, turnCounter = 0, skipTurn = false) {
    this.name = name;
    this.turnCounter = turnCounter;
    this.dmgPerTurn = dmgPerTurn;
    this.skipTurn = skipTurn;
  }
}
