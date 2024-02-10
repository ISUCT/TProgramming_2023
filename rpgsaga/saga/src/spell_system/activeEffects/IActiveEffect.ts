import { Character } from '../../character';

export interface IActiveEffect {
  cast(target: Character): boolean;
  canCast(): boolean;
  describe(): string;
}
