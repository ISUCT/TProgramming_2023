import { Character } from '../character';
import { StatusEffect } from '../statusEffect/statusEffect';

export abstract class Spell {
  private _castsRemaining: number;
  private _statusEffect: StatusEffect;
  private _damagePoints: number;

  get castsRemaining() {
    return this._castsRemaining;
  }

  set castsRemaining(value: number) {
    this._castsRemaining = value;
  }

  get statusEffect() {
    return this._statusEffect;
  }

  set statusEffect(value: StatusEffect) {
    this._statusEffect = value;
  }

  get damagePoints() {
    return this._damagePoints;
  }

  set damagePoints(value: number) {
    this._damagePoints = value;
  }

  constructor(castsRemaining: number, statusEffect?: StatusEffect) {
    this._castsRemaining = castsRemaining;
    this._statusEffect = null;

    if (typeof statusEffect !== undefined) {
      this._statusEffect = statusEffect;
    }
  }

  protected isCastable(): boolean {
    if (this._castsRemaining <= 0) {
      return false;
    }

    return true;
  }

  public abstract cast(target: Character): boolean;
}
