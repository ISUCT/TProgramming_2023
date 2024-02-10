import { Character } from '../src/character';
import { CharacterClass } from '../src/characterClasses';
import { CharacterFactory } from '../src/characterFactory';
import { randomIntFromInterval } from '../src/randomMath';

import { alwaysReturnZero } from './helperFunctions';

describe('Testing getCharacter method', () => {
  it('Should return a character with class "archer"', () => {
    const factory: CharacterFactory = new CharacterFactory();
    const character: Character = factory.getCharacter(CharacterClass.archer, alwaysReturnZero);

    expect(character.name).toBeDefined();
    expect(character).toBeInstanceOf(Character);
    expect(character.class).toBe(CharacterClass.archer);
    expect(character.healthPoints).toBe(0);
  });
  it('Should return a character with class "mage"', () => {
    const factory: CharacterFactory = new CharacterFactory();
    const character: Character = factory.getCharacter(CharacterClass.mage, alwaysReturnZero);

    expect(character.name).toBeDefined();
    expect(character).toBeInstanceOf(Character);
    expect(character.class).toBe(CharacterClass.mage);
    expect(character.healthPoints).toBe(0);
  });
  it('Should return a character with class "knight"', () => {
    const factory: CharacterFactory = new CharacterFactory();
    const character: Character = factory.getCharacter(CharacterClass.knight, alwaysReturnZero);

    expect(character.name).toBeDefined();
    expect(character).toBeInstanceOf(Character);
    expect(character.class).toBe(CharacterClass.knight);
    expect(character.healthPoints).toBe(0);
  });
});

describe('Testing generatePlayers method', () => {
  it('Should return array of players with needed length', () => {
    const factory: CharacterFactory = new CharacterFactory();

    const quantityOfPlayers = 5;
    const players: Character[] = factory.generatePlayers(quantityOfPlayers, randomIntFromInterval);

    expect(players.length).toBe(quantityOfPlayers);
  });
});
