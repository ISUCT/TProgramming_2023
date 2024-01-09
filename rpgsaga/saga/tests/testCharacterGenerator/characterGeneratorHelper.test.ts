import { CharacterGeneratorHelper } from '../../src/characterGenerators/characterGeneratorHelper';
import { alwaysReturnZero } from '../helperFunctions';

describe('Test getRandomNameAndSurname', () => {
  it('Should return a defined string variable', () => {
    const helper = new CharacterGeneratorHelper();
    const nameAndSurname: string = helper.getRandomNameAndSurname(
      ['Ariana', 'Grande'],
      ['Sunshine', 'Star'],
      alwaysReturnZero,
    );
    expect(nameAndSurname).toBe('Ariana Sunshine');
  });
});
