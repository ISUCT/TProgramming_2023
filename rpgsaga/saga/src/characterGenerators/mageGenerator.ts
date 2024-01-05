import { CharacterClass } from '../characterClasses';
import { Character } from '../character';
import { randomIntFromInterval } from '../randomMath';
import { Stun } from '../spell/stun';

import { CharacterGenerator } from './characterGenerator';

export class MageGenerator extends CharacterGenerator {
  readonly minHealthPoints: number = 80;
  readonly maxHealthPoints: number = 90;

  protected nameList: string[] = [
    'Thalindra',
    'Malachar',
    'Isolde',
    'Elowen',
    'Sylas',
    'Lirael',
    'Alaric',
    'Seraphina',
    'Cedric',
    'Vivienne',
    'Galadriel',
    'Orion',
  ];
  protected surnameList: string[] = [
    'Spellweaver',
    'Arcaneborn',
    'Starfall',
    'Frostfire',
    'Shadowcaster',
    'Stormcaller',
    'Emberflame',
    'Moonshaper',
    'Runebinder',
    'Frostwhisper',
    'Voidseer',
    'Flameforge',
  ];

  public createCharacter(): Character {
    return new Character(
      this.getRandomNameAndSurname(),
      CharacterClass.mage,
      randomIntFromInterval(this.minHealthPoints, this.maxHealthPoints),
      new Stun(),
    );
  }
}
