import { Character } from '../../src/character';
import { CharacterClass } from '../../src/characterClasses';
import { ICharacterGenerator } from '../../src/characterGenerators/ICharacterGenerator';
import { MageGenerator } from '../../src/characterGenerators/mageGenerator';
import { Spell } from '../../src/spell_system/spell/spell';
import { StunEffect } from '../../src/spell_system/statusEffect/stunEffect';
import { alwaysReturnZero } from '../helperFunctions';

describe('Testing createCharacter method', () => {
  it('Should return Mage character instance', () => {
    const mageGenerator: ICharacterGenerator = new MageGenerator();
    const mage: Character = mageGenerator.createCharacter(alwaysReturnZero);

    expect(mage.name).toBeDefined();
    expect(mage.class).toBe(CharacterClass.mage);
    expect(mage.healthPoints).toBe(0);
    expect(mage.spell).toBeInstanceOf(Spell);
    expect(mage.spell.getStatusEffect()).toBeInstanceOf(StunEffect);
  });
});
