import { Character } from '../character';
import { CharacterClass } from '../characterClasses';
import { DamageBoost } from '../spells/damageBoost';

export class Knight extends Character {
  constructor(name: string, healthPoints: number) {
    super(name, CharacterClass.knight, healthPoints, new DamageBoost());
  }
}
