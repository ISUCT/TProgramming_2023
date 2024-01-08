import { Character } from '../../character';
import { IStatusEffect } from '../statusEffect/IStatusEffect';

import { IActiveEffect } from './IActiveEffect';
import { ISpell } from './ISpell';

export class Spell implements ISpell {
  private _name: string;
  private _activeEffect: IActiveEffect;
  private _statusEffect: IStatusEffect;

  get name() {
    return this._name;
  }

  get cast() {
    return this._activeEffect;
  }

  get statusEffect() {
    return this._statusEffect;
  }

  constructor(name: string, cast: IActiveEffect, statusEffect?: IStatusEffect) {
    this._name = name;
    this._activeEffect = cast;
    this._statusEffect = null;

    if (typeof statusEffect !== undefined) {
      this._statusEffect = statusEffect;
    }
  }

  public canExecute(): boolean {
    if (this._activeEffect.canCast()) {
      return true;
    }

    return false;
  }

  public execute(target: Character): boolean {
    const isCastedSuccessfully = this._activeEffect.cast(target);
    return isCastedSuccessfully;
  }

  public toString(): string {
    return `${this._name} (${this._activeEffect.toString()})`;
  }

  public hasStatusEffect(): boolean {
    if (this._statusEffect !== null) {
      return true;
    }

    return false;
  }

  public sendStatusEffect(): IStatusEffect {
    if (this.hasStatusEffect()) {
      return this._statusEffect;
    }

    return null;
  }
}
