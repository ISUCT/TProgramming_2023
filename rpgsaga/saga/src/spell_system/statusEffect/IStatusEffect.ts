import { Character } from '../../character';

export interface IStatusEffect {
  apply(target: Character): boolean;
  remove(target: Character);
  refresh();
  canApply(): boolean;
  describe(): string;
}
