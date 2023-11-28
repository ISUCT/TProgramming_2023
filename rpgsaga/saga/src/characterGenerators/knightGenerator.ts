import { Character } from '../character';
import { Knight } from '../characters/knight';
import { randomIntFromInterval } from '../randomMath';

import { CharacterGenerator } from './characterGenerator';

export class KnightGenerator extends CharacterGenerator {
  protected nameList: string[] = [
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
  protected surnameList: string[] = [
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

  public createCharacter(): Character {
    return new Knight(
      this.getRandomNameAndSurname(),
      randomIntFromInterval(Knight.minHealthPoints, Knight.maxHealthPoints),
    );
  }
}
