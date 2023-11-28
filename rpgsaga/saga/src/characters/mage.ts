import { Character } from '../character';
import { CharacterClass } from '../characterClasses';

export class Mage extends Character {
  static readonly minHealthPoints: number = 80;
  static readonly maxHealthPoints: number = 90;

  constructor(name: string, healthPoints: number) {
    super(name, CharacterClass.mage, healthPoints);
  }
}
