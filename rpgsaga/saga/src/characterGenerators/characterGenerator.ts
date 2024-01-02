import { Character } from '../characters/character';
import { getRandomArrayIndex } from '../randomMath';

export abstract class CharacterGenerator {
  readonly minHealthPoints: number;
  readonly maxHealthPoints: number;

  protected nameList: string[];
  protected surnameList: string[];

  protected getRandomNameAndSurname(): string {
    const name: string = this.nameList[getRandomArrayIndex(this.nameList.length)];
    const surname: string = this.surnameList[getRandomArrayIndex(this.surnameList.length)];

    return `${name} ${surname}`;
  }

  public abstract createCharacter(): Character;
}
