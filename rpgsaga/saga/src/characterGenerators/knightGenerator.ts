import { CharacterClass } from '../characterClasses';
import { Character } from '../character';
import { randomIntFromInterval } from '../randomMath';
import { KnightAttack } from '../spell_system/spell/knightAttack';

import { CharacterGenerator } from './characterGenerator';

export class KnightGenerator extends CharacterGenerator {
  constructor() {
    const nameList: string[] = [
      'Seraphina',
      'Elara',
      'Thorian',
      'Elysia',
      'Isolde',
      'Rowena',
      'Reynald',
      'Galahad',
      'Serilda',
      'Evelina',
      'Elysia',
      'Lysander',
    ];

    const surnameList: string[] = [
      'Stormblade',
      'the Brave',
      'Swiftstrike',
      'Darkhammer',
      'Moonshadow',
      'Firebrand',
      'Frostheart',
      'Sunblade',
      'Ravenshadow',
      'Silverthorn',
      'Lightbringer',
      'Thunderclap',
    ];

    super(110, 120, nameList, surnameList);
  }

  public createCharacter(): Character {
    return new Character(
      this.getRandomNameAndSurname(),
      CharacterClass.knight,
      randomIntFromInterval(this.minHealthPoints, this.maxHealthPoints),
      new KnightAttack(),
    );
  }
}
