import { CharacterClass } from '../characterClasses';
import { Character } from '../character';
import { randomIntFromInterval } from '../randomMath';
import { FireArrow } from '../spell/fireArrow';

import { CharacterGenerator } from './characterGenerator';

export class ArcherGenerator extends CharacterGenerator {
  readonly minHealthPoints: number = 90;
  readonly maxHealthPoints: number = 110;

  protected nameList: string[] = [
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
  protected surnameList: string[] = [
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

  public createCharacter(): Character {
    return new Character(
      this.getRandomNameAndSurname(),
      CharacterClass.archer,
      randomIntFromInterval(this.minHealthPoints, this.maxHealthPoints),
      new FireArrow(),
    );
  }
}
