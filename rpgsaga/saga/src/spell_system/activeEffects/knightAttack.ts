import { Character } from '../../character';

import { IActiveEffect } from './IActiveEffect';

export class KnightAttack implements IActiveEffect {
  private _castsRemaining: number;
  private _damagePoints: number;

  constructor(castsRemaining: number, damagePoints: number) {
    this._castsRemaining = castsRemaining;
    this._damagePoints = damagePoints;
  }

  public cast(target: Character): boolean {
    if (this.canCast()) {
      target.receiveDamage(this._damagePoints * 2.0);
      this._castsRemaining -= 1;
      return true;
    }

    return false;
  }

  public toString(): string {
    return `${this._castsRemaining} casts remaining`;
  }

  public canCast(): boolean {
    if (this._castsRemaining > 0) {
      return true;
    }

    return false;
  }
}
