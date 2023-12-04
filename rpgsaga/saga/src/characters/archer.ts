import { Character } from '../character';
import { CharacterClass } from '../characterClasses';

export class Archer extends Character {
  constructor(name: string, healthPoints: number) {
    super(name, CharacterClass.archer, healthPoints);
  }
}
