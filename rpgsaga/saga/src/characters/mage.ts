import { Character } from '../character';
import { CharacterClass } from '../characterClasses';
import { Stun } from '../spells/stun';

export class Mage extends Character {
  constructor(name: string, healthPoints: number) {
    super(name, CharacterClass.mage, healthPoints, new Stun());
  }
}
