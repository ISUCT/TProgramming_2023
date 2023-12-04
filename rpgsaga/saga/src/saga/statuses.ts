export interface IStatus {
  name: string;
  turnCounter: number;
  dmgPerTurn: number;
  skipTurn: boolean;
}

export class Status {
  public name: string;
  public turnCounter: number; // use negative number to make status never cast off
  public dmgPerTurn: number;
  public skipTurn: boolean;
}
