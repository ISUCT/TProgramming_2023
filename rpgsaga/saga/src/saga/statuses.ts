import { ActionType } from './affinities';

export interface IStatus {
  name: string;
  dmgType: ActionType;
  dmgPerTurn: number;
  turnCounter: number;
  skipTurn: boolean;
}

export class Status {
  public name: string;
  public dmgType: ActionType;
  public turnCounter: number; // use negative number to make status never cast off
  public dmgPerTurn: number;
  public skipTurn: boolean;

  constructor(name: string, dmgType = ActionType.Support, dmgPerTurn = 0, turnCounter = 0, skipTurn = false) {
    this.name = name;
    this.dmgType = dmgType;
    this.turnCounter = turnCounter;
    this.dmgPerTurn = dmgPerTurn;
    this.skipTurn = skipTurn;
  }
}
