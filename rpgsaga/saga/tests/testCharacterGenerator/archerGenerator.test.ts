import { Character } from '../../src/character';
import { CharacterClass } from '../../src/characterClasses';
import { ICharacterGenerator } from '../../src/characterGenerators/ICharacterGenerator';
import { ArcherGenerator } from '../../src/characterGenerators/archerGenerator';
import { Spell } from '../../src/spell_system/spell/spell';
import { FireArrowEffect } from '../../src/spell_system/statusEffect/fireArrowEffect';

describe('Testing createCharacter method', () => {
  it('Should return Archer character instance', () => {
    const archerGenerator: ICharacterGenerator = new ArcherGenerator();
    const archer: Character = archerGenerator.createCharacter();

    expect(archer.name).toBeDefined();
    expect(archer.class).toBe(CharacterClass.archer);
    expect(archer.spell).toBeInstanceOf(Spell);
    expect(archer.spell.sendStatusEffect()).toBeInstanceOf(FireArrowEffect);
  });
});
