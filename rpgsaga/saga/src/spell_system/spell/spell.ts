import { Character } from '../../character';
import { IStatusEffect } from '../statusEffect/IStatusEffect';
import { IActiveEffect } from '../activeEffects/IActiveEffect';

import { ISpell } from './ISpell';

export class Spell implements ISpell {
  private _name: string;
  private _activeEffect: IActiveEffect;
  private _statusEffect: IStatusEffect;

  get name() {
    return this._name;
  }

  get statusEffect() {
    return this._statusEffect;
  }

  get activeEffect() {
    return this._activeEffect;
  }

  constructor(name: string, activeEffect: IActiveEffect, statusEffect?: IStatusEffect) {
    this._name = name;
    this._activeEffect = activeEffect;
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

  public getStatusEffect(): IStatusEffect {
    if (this.hasStatusEffect()) {
      return this._statusEffect;
    }

    return null;
  }
}
