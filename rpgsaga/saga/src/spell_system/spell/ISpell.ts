import { Character } from '../../character';
import { IStatusEffect } from '../statusEffect/IStatusEffect';

export interface ISpell {
  canExecute(): boolean;
  execute(target: Character): boolean;
  hasStatusEffect(): boolean;
  getStatusEffect(): IStatusEffect;
  toString(): string;
}
