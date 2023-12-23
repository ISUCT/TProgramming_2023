import { Character } from '../character';

import { StatusEffect } from './statusEffect';

export class FireEffect implements StatusEffect {
  private _target: Character;
  private _usesRemaining: number;

  get target() {
    return this._target;
  }

  set target(value: Character) {
    this._target = value;
  }

  get usesRemaining() {
    return this._usesRemaining;
  }

  set usesRemaining(value: number) {
    this._usesRemaining = value;
  }

  constructor() {
    this._usesRemaining = 3;
  }

  public apply(): void {
    this.target.healthPoints -= 5;
  }
}
