import { Character } from '../../character';

import { IStatusEffect } from './IStatusEffect';

export class StunEffect implements IStatusEffect {
  private _name: string;
  private _initialUsesRemaining: number;
  private _usesRemaining: number;

  get name() {
    return this._name;
  }

  constructor(name: string, usesAvailable: number) {
    this._name = name;
    this._initialUsesRemaining = usesAvailable;
    this._usesRemaining = this._initialUsesRemaining;
  }

  public apply(target: Character): boolean {
    if (this.canApply()) {
      this._usesRemaining -= 1;

      console.log(`${target.toString()} is now stunned! (${this._usesRemaining} turns remaining)`);

      target.isStunned = true;

      return true;
    }

    return false;
  }

  public remove(target: Character) {
    target.isStunned = false;
  }

  public refresh() {
    this._usesRemaining = this._initialUsesRemaining;
  }

  public canApply(): boolean {
    if (this._usesRemaining > 0) {
      return true;
    }

    return false;
  }

  public describe() {
    return this._name;
  }
}
