import { Character } from '../character';

export class StunEffect {
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
    this._usesRemaining = 1;
  }

  public apply(): void {
    this.usesRemaining -= 1;
  }

  public remove(): void {
    return;
  }
}
