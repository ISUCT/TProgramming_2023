import { Character } from '../character';
import { CharacterClass } from '../characterClasses';

export class Archer extends Character {
  static readonly minHealthPoints: number = 90;
  static readonly maxHealthPoints: number = 110;

  constructor(name: string, healthPoints: number) {
    super(name, CharacterClass.archer, healthPoints);
  }
}
