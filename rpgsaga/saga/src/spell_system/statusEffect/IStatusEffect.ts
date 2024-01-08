import { Character } from '../../character';

export interface IStatusEffect {
  apply(target: Character);
  remove(target: Character);
  refresh();
  canApply(): boolean;
  toString(): string;
}