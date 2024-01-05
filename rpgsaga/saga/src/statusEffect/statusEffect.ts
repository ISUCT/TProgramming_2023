import { Character } from '../character';

export abstract class StatusEffect {
  private _name: string;
  private _initialUsesRemaining: number;
  private _usesRemaining: number;

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get usesRemaining() {
    return this._usesRemaining;
  }

  set usesRemaining(value: number) {
    this._usesRemaining = value;
  }

  get initialUsesRemaining() {
    return this._initialUsesRemaining;
  }

  constructor(name: string, usesAvailable: number) {
    this._name = name;
    this._initialUsesRemaining = usesAvailable;
    this._usesRemaining = this._initialUsesRemaining;
  }

  public canApply(): boolean {
    if (this._usesRemaining > 0) {
      return true;
    }

    return false;
  }

  public abstract apply(target: Character);

  public abstract remove(target: Character);

  public refresh() {
    this._usesRemaining = this._initialUsesRemaining;
  }
}
