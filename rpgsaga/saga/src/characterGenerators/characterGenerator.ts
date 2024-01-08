import { Character } from '../character';
import { getRandomArrayIndex } from '../randomMath';

export abstract class CharacterGenerator {
  private readonly _minHealthPoints: number;
  private readonly _maxHealthPoints: number;

  private _nameList: string[];
  private _surnameList: string[];

  get nameList() {
    return this._nameList;
  }

  set nameList(value: string[]) {
    this._nameList = value;
  }

  get surnameList() {
    return this._surnameList;
  }

  set surnameList(value: string[]) {
    this._surnameList = value;
  }

  get minHealthPoints() {
    return this._minHealthPoints;
  }

  get maxHealthPoints() {
    return this._maxHealthPoints;
  }

  constructor(minHealthPoints: number, maxHealthPoints: number, nameList: string[], surnameList: string[]) {
    this._minHealthPoints = minHealthPoints;
    this._maxHealthPoints = maxHealthPoints;
    this._nameList = nameList;
    this._surnameList = surnameList;
  }

  public getRandomNameAndSurname(): string {
    const name: string = this.nameList[getRandomArrayIndex(this.nameList.length)];
    const surname: string = this.surnameList[getRandomArrayIndex(this.surnameList.length)];

    return `${name} ${surname}`;
  }

  public abstract createCharacter(): Character;
}
