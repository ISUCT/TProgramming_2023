import { getUserInput, hasOnlyDigits, receiveQuantityOfPlayers } from '../src/userInput';

describe('Testing hasOnlyDigits function', () => {
  it('Non-negative number should result in true', () => {
    expect(hasOnlyDigits('20')).toBe(true);
  });
  it('Negative number should result in true', () => {
    expect(hasOnlyDigits('-20')).toBe(true);
  });
  it('Float number should result in false', () => {
    expect(hasOnlyDigits('20.5')).toBe(false);
  });
  it('Hexademical number should result in false', () => {
    expect(hasOnlyDigits('0x20')).toBe(false);
  });
  it('Random string should result in false', () => {
    expect(hasOnlyDigits('1as2dfg3')).toBe(false);
  });
});

describe('Testing getUserInput function', () => {
  it('Should return an inputted string', () => {
    expect(getUserInput('123')).toBe('123');
  });
});

describe('Testing receiveQuantityOfPlayers function', () => {
  it('Should return the correct amount of players', () => {
    expect(receiveQuantityOfPlayers(getUserInput('123'))).toBe(123);
  });
  it('Should throw an exception when incorrect input is received', () => {
    expect(() => {
      receiveQuantityOfPlayers('0x20');
    }).toThrow('Incorrect input, try again!');
  });
});
