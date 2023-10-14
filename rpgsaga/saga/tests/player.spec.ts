import {Character, CharacterClass} from "../src/player"

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
    public healthPoints: number;
    public strength: number = 5;

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
    it('Character attack method should work', () => {
        var mage: Character = new MockCharacter("LifeWeaver", CharacterClass.mage, 100);
        var archer: Character = new MockCharacter("Hanzo", CharacterClass.archer, 100);

        var message = mage.attack(archer, false);
        expect(archer.healthPoints).toEqual(95);
        expect(message).toEqual("LifeWeaver (mage) нанёс 5 урона Hanzo (archer)!");
    });
    it('Character attack method should miss', () => {
        var mage: Character = new MockCharacter("LifeWeaver", CharacterClass.mage, 100);
        var archer: Character = new MockCharacter("Hanzo", CharacterClass.archer, 100);

        var message = mage.attack(archer, true);
        expect(archer.healthPoints).toEqual(100);
        expect(message).toEqual("LifeWeaver (mage) пытался атаковать Hanzo (archer), но промахнулся!");
    });
});