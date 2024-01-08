import { CharacterClass } from '../characterClasses';
import { Character } from '../character';
import { randomIntFromInterval } from '../randomMath';
import { FireArrow } from '../spell_system/activeEffects/fireArrow';
import { Spell } from '../spell_system/spell/spell';
import { FireArrowEffect } from '../spell_system/statusEffect/fireArrowEffect';

import { CharacterGeneratorHelper } from './characterGeneratorHelper';
import { ICharacterGenerator } from './ICharacterGenerator';

export class ArcherGenerator implements ICharacterGenerator {
  private readonly _minHealthPoints: number;
  private readonly _maxHealthPoints: number;

  private _nameList: string[];
  private _surnameList: string[];

  constructor() {
    this._nameList = [
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

    this._surnameList = [
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

    this._minHealthPoints = 90;
    this._maxHealthPoints = 110;
  }

  public createCharacter(): Character {
    const helper = new CharacterGeneratorHelper();
    return new Character(
      helper.getRandomNameAndSurname(this._nameList, this._surnameList),
      CharacterClass.archer,
      randomIntFromInterval(this._minHealthPoints, this._maxHealthPoints),
      new Spell('Fire Arrow', new FireArrow(2, 7), new FireArrowEffect('Burning', 3)),
    );
  }
}
