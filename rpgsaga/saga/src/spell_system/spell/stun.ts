import { Character } from '../../character';

import { IActiveEffect } from './IActiveEffect';
import { CastHelper } from './castHelper';

export class Stun implements IActiveEffect {
  private _castsRemaining: number;
  private _damagePoints: number;

  constructor(castsRemaining: number, damagePoints: number) {
    this._castsRemaining = castsRemaining;
    this._damagePoints = damagePoints;
  }

  public cast(target: Character): boolean {
    const castHelper = new CastHelper();
    if (castHelper.isCastable(this._castsRemaining)) {
      target.receiveDamage(this._damagePoints);
      this._castsRemaining -= 1;
      return true;
    }

    return false;
  }

  public toString(): string {
    return `${this._castsRemaining} casts remaining`;
  }

  canCast(): boolean {
    if (this._castsRemaining > 0) {
      return true;
    }

    return false;
  }
}
