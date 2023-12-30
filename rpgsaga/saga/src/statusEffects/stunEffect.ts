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

  constructor() {
    this._usesRemaining = 1;
  }

  private canApply(): boolean {
    return this._usesRemaining > 0;
  }

  public apply(): void {
    if (this.canApply()) {
      this._usesRemaining -= 1;
    }
  }

  public remove(): void {
    return;
  }
}
