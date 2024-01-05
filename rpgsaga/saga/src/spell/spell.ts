import { Character } from '../character';
import { Message } from '../message';
import { StatusEffect } from '../statusEffect/statusEffect';

export abstract class Spell {
  private _castsRemaining: number;
  private _statusEffect: StatusEffect;
  private _damagePoints: number;
  private _name: string;

  get castsRemaining() {
    return this._castsRemaining;
  }

  set castsRemaining(value: number) {
    this._castsRemaining = value;
  }

  get statusEffect() {
    return this._statusEffect;
  }

  get damagePoints() {
    return this._damagePoints;
  }

  get name() {
    return this._name;
  }

  constructor(name: string, castsRemaining: number, damagePoints: number, statusEffect?: StatusEffect) {
    this._name = name;
    this._castsRemaining = castsRemaining;
    this._damagePoints = damagePoints;
    this._statusEffect = null;

    if (typeof statusEffect !== undefined) {
      this._statusEffect = statusEffect;
    }
  }

  public isCastable(): boolean {
    if (this._castsRemaining > 0) {
      return true;
    }

    return false;
  }

  public abstract cast(message: Message): boolean;

  public toString(): string {
    return `${this._name} (${this._castsRemaining} casts remaining)`;
  }
}
