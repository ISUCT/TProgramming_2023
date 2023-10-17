import {Character} from "../src/character"
import { CharacterClass } from "../src/characterClasses";

describe("Testing character class enum", () => {
    it('Testing archer item', () => {
        expect(CharacterClass.archer).toEqual("archer");
    });
    it('Testing knight item', () => {
        expect(CharacterClass.knight).toEqual("knight");
    });
    it('Testing mage item', () => {
        expect(CharacterClass.mage).toEqual("mage");
    });
});

class MockCharacter extends Character
{
    constructor(name: string, characterClass: CharacterClass, healthPoints: number)
    { 
        super(name, characterClass, healthPoints);
    }
}

describe("Testing character class", () => {
    it('Character should be created', () => {
        var character: Character = new MockCharacter("Arthur", CharacterClass.archer, 100);

        expect(character.name).toEqual("Arthur");
        expect(character.class).toEqual(CharacterClass.archer);
        expect(character.healthPoints).toEqual(100);
        expect(character.strength).toEqual(5);
    });
});