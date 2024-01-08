import { Character } from '../src/character';
import { CharacterClass } from '../src/characterClasses';
import { ICharacterGenerator } from '../src/characterGenerators/ICharacterGenerator';
import { MageGenerator } from '../src/characterGenerators/mageGenerator';
import { Stun } from '../src/spell_system/spell/stun';

describe('Testing createCharacter method', () => {
  it('Should return Mage character instance', () => {
    const mageGenerator: ICharacterGenerator = new MageGenerator();
    const mage: Character = mageGenerator.createCharacter();

    expect(mage.name).toBeDefined();
    expect(mage.class).toBe(CharacterClass.mage);
    expect(mage.spell).toBeInstanceOf(Stun);
  });
});
