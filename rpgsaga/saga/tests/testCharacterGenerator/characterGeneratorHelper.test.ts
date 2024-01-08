import { CharacterGeneratorHelper } from '../../src/characterGenerators/characterGeneratorHelper';

describe('Test getRandomNameAndSurname', () => {
  it('Should return a defined string variable', () => {
    const helper = new CharacterGeneratorHelper();
    const nameAndSurname: string = helper.getRandomNameAndSurname(['Ariana', 'Grande'], ['Sunshine', 'Star']);
    expect(nameAndSurname).toBeDefined();
  });
});
