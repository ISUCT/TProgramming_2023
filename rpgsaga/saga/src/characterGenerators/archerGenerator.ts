import { Character } from '../characters/character';
import { Archer } from '../characters/archer';
import { randomIntFromInterval } from '../randomMath';

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
    return new Archer(
      this.getRandomNameAndSurname(),
      randomIntFromInterval(this.minHealthPoints, this.maxHealthPoints),
    );
  }
}
