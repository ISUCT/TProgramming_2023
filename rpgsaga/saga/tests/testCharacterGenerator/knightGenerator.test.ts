import { Character } from '../../src/character';
import { CharacterClass } from '../../src/characterClasses';
import { ICharacterGenerator } from '../../src/characterGenerators/ICharacterGenerator';
import { KnightGenerator } from '../../src/characterGenerators/knightGenerator';
import { Spell } from '../../src/spell_system/spell/spell';
import { alwaysReturnZero } from '../helperFunctions';

describe('Testing createCharacter method', () => {
  it('Should return Knight character instance', () => {
    const knightGenerator: ICharacterGenerator = new KnightGenerator();
    const knight: Character = knightGenerator.createCharacter(alwaysReturnZero);

    expect(knight.name).toBeDefined();
    expect(knight.class).toBe(CharacterClass.knight);
    expect(knight.healthPoints).toBe(0);
    expect(knight.spell).toBeInstanceOf(Spell);
    expect(knight.spell.getStatusEffect()).toBe(null);
  });
});
