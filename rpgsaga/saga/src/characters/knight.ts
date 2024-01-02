import { Character } from './character';
import { CharacterClass } from '../characterClasses';

export class Knight extends Character {
  constructor(name: string, healthPoints: number) {
    super(name, CharacterClass.knight, healthPoints);
  }
}
