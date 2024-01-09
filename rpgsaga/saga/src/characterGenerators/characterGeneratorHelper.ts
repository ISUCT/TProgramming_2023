export class CharacterGeneratorHelper {
  public getRandomNameAndSurname(
    nameList: string[],
    surnameList: string[],
    randomNumberGenerator: (min: number, max: number) => number,
  ): string {
    const name: string = nameList[randomNumberGenerator(0, nameList.length)];
    const surname: string = surnameList[randomNumberGenerator(0, surnameList.length)];

    return `${name} ${surname}`;
  }
}
