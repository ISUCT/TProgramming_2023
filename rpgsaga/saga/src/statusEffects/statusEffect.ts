import { Character } from '../character';

export interface StatusEffect {
  usesRemaining: number;
  target: Character;

  apply(): void;
  remove(): void;
}
