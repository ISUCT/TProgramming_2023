import { Character } from '../src/character';
import { CharacterClass } from '../src/characterClasses';
import { CharacterFactory } from '../src/characterFactory';

describe('Testing getCharacter method', () => {
  it('Should return a character with class "archer"', () => {
    const factory: CharacterFactory = new CharacterFactory();
    const character: Character = factory.getCharacter(CharacterClass.archer);

    expect(character).toBeInstanceOf(Character);
    expect(character.class).toBe(CharacterClass.archer);
  });
  it('Should return a character with class "mage"', () => {
    const factory: CharacterFactory = new CharacterFactory();
    const character: Character = factory.getCharacter(CharacterClass.mage);

    expect(character).toBeInstanceOf(Character);
    expect(character.class).toBe(CharacterClass.mage);
  });
  it('Should return a character with class "knight"', () => {
    const factory: CharacterFactory = new CharacterFactory();
    const character: Character = factory.getCharacter(CharacterClass.knight);

    expect(character).toBeInstanceOf(Character);
    expect(character.class).toBe(CharacterClass.knight);
  });
});

describe('Testing generatePlayers method', () => {
  it('Should return array of players with needed length', () => {
    const factory: CharacterFactory = new CharacterFactory();

    const quantityOfPlayers = 5;
    const players: Character[] = factory.generatePlayers(quantityOfPlayers);

    expect(players.length).toBe(quantityOfPlayers);
  });
});
