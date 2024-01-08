import { CharacterClass } from '../characterClasses';
import { Character } from '../character';
import { randomIntFromInterval } from '../randomMath';
import { FireArrow } from '../spell_system/spell/fireArrow';

import { CharacterGenerator } from './characterGenerator';

export class ArcherGenerator extends CharacterGenerator {
  constructor() {
    const nameList: string[] = [
      'Lareth',
      'Theron',
      'Theron',
      'Lyria',
      'Galen',
      'Elysia',
      'Caelan',
      'Talia',
      'Sylas',
      'Merida',
      'Thalindra',
      'Naelan',
    ];

    const surnameList: string[] = [
      'Windstrider',
      'Hawkeye',
      'Swiftshot',
      'Longbow',
      'Arrowheart',
      'Fletchertongue',
      'Shadowquiver',
      'Ironwood',
      'Nightshade',
      'Stormrider',
      'Moonshadow',
      'Firesight',
    ];

    super(90, 110, nameList, surnameList);
  }

  public createCharacter(): Character {
    return new Character(
      this.getRandomNameAndSurname(),
      CharacterClass.archer,
      randomIntFromInterval(this.minHealthPoints, this.maxHealthPoints),
      new FireArrow(),
    );
  }
}
