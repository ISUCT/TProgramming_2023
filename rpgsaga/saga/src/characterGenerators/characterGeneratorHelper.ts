import { getRandomArrayIndex } from '../randomMath';

export class CharacterGeneratorHelper {
  public getRandomNameAndSurname(nameList: string[], surnameList: string[]): string {
    const name: string = nameList[getRandomArrayIndex(nameList.length)];
    const surname: string = surnameList[getRandomArrayIndex(surnameList.length)];

    return `${name} ${surname}`;
  }
}
