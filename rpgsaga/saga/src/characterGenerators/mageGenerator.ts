import { CharacterClass } from '../characterClasses';
import { Character } from '../character';
import { randomIntFromInterval } from '../randomMath';
import { Stun } from '../spell_system/activeEffects/stun';
import { Spell } from '../spell_system/spell/spell';
import { StunEffect } from '../spell_system/statusEffect/stunEffect';

import { CharacterGeneratorHelper } from './characterGeneratorHelper';
import { ICharacterGenerator } from './ICharacterGenerator';

export class MageGenerator implements ICharacterGenerator {
  private readonly _minHealthPoints: number;
  private readonly _maxHealthPoints: number;

  private _nameList: string[];
  private _surnameList: string[];

  constructor() {
    this._nameList = [
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

    this._surnameList = [
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

    this._minHealthPoints = 80;
    this._maxHealthPoints = 90;
  }

  public createCharacter(): Character {
    const helper = new CharacterGeneratorHelper();
    return new Character(
      helper.getRandomNameAndSurname(this._nameList, this._surnameList),
      CharacterClass.mage,
      randomIntFromInterval(this._minHealthPoints, this._maxHealthPoints),
      new Spell('Freeze', new Stun(2, 0), new StunEffect('Stun', 1)),
    );
  }
}
