import { Character } from '../character';
import { CharacterClass } from '../characterClasses';
import { FireArrow } from '../spells/fireArrow';

export class Archer extends Character {
  constructor(name: string, healthPoints: number) {
    super(name, CharacterClass.archer, healthPoints, new FireArrow());
  }
}
