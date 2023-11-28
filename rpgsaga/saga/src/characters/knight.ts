import { Character } from '../character';
import { CharacterClass } from '../characterClasses';

export class Knight extends Character {
  static readonly minHealthPoints: number = 110;
  static readonly maxHealthPoints: number = 120;

  constructor(name: string, healthPoints: number) {
    super(name, CharacterClass.knight, healthPoints);
  }
}
