export abstract class StatusEffect {
  private _usesRemaining: number;

  get usesRemaining() {
    return this._usesRemaining;
  }

  set usesRemaining(value: number) {
    this._usesRemaining = value;
  }

  public apply() {
    this._usesRemaining -= 1;
  }
}
