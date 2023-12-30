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

  constructor() {
    this._usesRemaining = 3;
  }

  private canApply(): boolean {
    return this._usesRemaining > 0;
  }

  public apply(): void {
    if (this.canApply()) {
      this.target.healthPoints -= 5;
      this._usesRemaining -= 1;
    }
  }

  public remove(): void {
    return;
  }
}
