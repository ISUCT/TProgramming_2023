import { CharacterClass } from '../characterClasses';
import { Character } from '../character';
import { randomIntFromInterval } from '../randomMath';
import { KnightAttack } from '../spell_system/activeEffects/knightAttack';
import { Spell } from '../spell_system/spell/spell';

import { CharacterGeneratorHelper } from './characterGeneratorHelper';
import { ICharacterGenerator } from './ICharacterGenerator';

export class KnightGenerator implements ICharacterGenerator {
  private readonly _minHealthPoints: number;
  private readonly _maxHealthPoints: number;

  private _nameList: string[];
  private _surnameList: string[];

  constructor() {
    this._nameList = [
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

    this._surnameList = [
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

    this._minHealthPoints = 110;
    this._maxHealthPoints = 120;
  }

  public createCharacter(): Character {
    const helper = new CharacterGeneratorHelper();
    return new Character(
      helper.getRandomNameAndSurname(this._nameList, this._surnameList),
      CharacterClass.knight,
      randomIntFromInterval(this._minHealthPoints, this._maxHealthPoints),
      new Spell('Mighty Slash', new KnightAttack(2, 5), null),
    );
  }
}
