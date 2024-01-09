import { getRandomEnumValue, randomIntFromInterval } from '../src/randomMath';

describe('Testing randomIntFromInterval function', () => {
  it('Should not get out of bounds while generating random numbers', () => {
    for (let i = 1; i <= 20; i++) {
      expect(randomIntFromInterval(5, 5)).toBe(5);
    }
  });
});

describe('Testing getRandomEnumValue function', () => {
  it('Should return a valid enum value in numeric enum', () => {
    enum TestEnum {
      first = 0,
      second = 1,
    }

    expect(Object.values(TestEnum)).toContain(getRandomEnumValue(TestEnum));
  });
  it('Should return a valid enum value in string enum', () => {
    enum TestEnum {
      first = '0',
      second = '1',
    }

    expect(Object.values(TestEnum)).toContain(getRandomEnumValue(TestEnum));
  });
});
