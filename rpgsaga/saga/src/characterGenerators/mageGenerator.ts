import { Character } from '../character';
import { Mage } from '../characters/mage';
import { randomIntFromInterval } from '../randomMath';

import { CharacterGenerator } from './characterGenerator';

export class MageGenerator extends CharacterGenerator {
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
    return new Mage(this.getRandomNameAndSurname(), randomIntFromInterval(Mage.minHealthPoints, Mage.maxHealthPoints));
  }
}