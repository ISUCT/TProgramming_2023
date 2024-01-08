import { Character } from '../character';

export interface ICharacterGenerator {
  createCharacter(): Character;
}
