import { Character } from '../character';
import { CharacterClass } from '../characterClasses';

export class Mage extends Character {
  constructor(name: string, healthPoints: number) {
    super(name, CharacterClass.mage, healthPoints);
  }
}
