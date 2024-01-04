import Fox from '../src/fox';

describe('Testing fox constructor', () => {
  it('A fox is born', () => {
    const test = new Fox('Lisa', 'Black', 2015);
    expect(test.name).toEqual('Lisa');
    expect(test.color).toEqual('Black');
    expect(test.year).toEqual(2015);
  });

  it('Fox year lower than bound', () => {
    const testFunction = () => new Fox('Lisa', 'Black', 1999);

    expect(testFunction).toThrowError('Invalid year. Year must be between 2000 (inclusive) and 2023 (exclusive).');
  });

  it('Fox year higher than bound', () => {
    const testFunction = () => new Fox('Lisa', 'Black', 2023);

    expect(testFunction).toThrowError('Invalid year. Year must be between 2000 (inclusive) and 2023 (exclusive).');
  });

  it('Fox without info', () => {
    const test = new Fox();
    expect(test.year).toBeUndefined();
    expect(test.name).toEqual('unknown');
    expect(test.color).toEqual('unknown');
  });
});
