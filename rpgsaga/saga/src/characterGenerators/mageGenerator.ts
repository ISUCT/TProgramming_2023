import { CharacterClass } from '../characterClasses';
import { Character } from '../character';
import { randomIntFromInterval } from '../randomMath';
import { Stun } from '../spell_system/spell/stun';

import { CharacterGenerator } from './characterGenerator';

export class MageGenerator extends CharacterGenerator {
  constructor() {
    const nameList: string[] = [
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

    const surnameList: string[] = [
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

    super(80, 90, nameList, surnameList);
  }

  public createCharacter(): Character {
    return new Character(
      this.getRandomNameAndSurname(),
      CharacterClass.mage,
      randomIntFromInterval(this.minHealthPoints, this.maxHealthPoints),
      new Stun(),
    );
  }
}
