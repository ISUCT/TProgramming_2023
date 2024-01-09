import { Character } from '../../character';

import { IStatusEffect } from './IStatusEffect';

export class FireArrowEffect implements IStatusEffect {
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

      console.log(
        `${target.toString()} has received 2 damage from the Fire Arrow Effect! (${
          this._usesRemaining
        } turns remaining)`,
      );

      target.receiveDamage(2);

      return true;
    }

    return false;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public remove(target: Character) {
    return;
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

  public toString() {
    return this._name;
  }
}
