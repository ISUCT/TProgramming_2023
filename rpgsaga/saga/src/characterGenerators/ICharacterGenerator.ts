import { Character } from '../character';

export interface ICharacterGenerator {
  createCharacter(randomNumberGenerator: (min: number, max: number) => number): Character;
}
