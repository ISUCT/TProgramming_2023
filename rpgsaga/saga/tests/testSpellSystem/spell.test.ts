import { Character } from '../../src/character';
import { CharacterClass } from '../../src/characterClasses';
import { FireArrow } from '../../src/spell_system/activeEffects/fireArrow';
import { Spell } from '../../src/spell_system/spell/spell';
import { FireArrowEffect } from '../../src/spell_system/statusEffect/fireArrowEffect';

describe('Testing Spell class constructor', () => {
  it('Should result in correct values', () => {
    const spell = new Spell('Fire arrow', new FireArrow(2, 7), new FireArrowEffect('Burning', 3));

    expect(spell.name).toBe('Fire arrow');
    expect(spell.activeEffect).toBeInstanceOf(FireArrow);
    expect(spell.statusEffect).toBeInstanceOf(FireArrowEffect);
  });
  it("Status effect in constructor should result to null if it's not passed as a parameter", () => {
    const spell = new Spell('Fire arrow', new FireArrow(2, 7));

    expect(spell.name).toBe('Fire arrow');
    expect(spell.activeEffect).toBeInstanceOf(FireArrow);
    expect(spell.statusEffect).toBeFalsy();
  });
});

describe('Testing canExecute method', () => {
  it('Should result in true if spell can be casted', () => {
    const spell = new Spell('Fire arrow', new FireArrow(2, 7), new FireArrowEffect('Burning', 3));
    expect(spell.canExecute()).toBe(true);
  });
  it('Should result in false if spell cannot be casted', () => {
    const spell = new Spell('Fire arrow', new FireArrow(0, 7), new FireArrowEffect('Burning', 3));
    expect(spell.canExecute()).toBe(false);
  });
});

describe('Testing execute method', () => {
  it('Should result in true if spell casted successfully', () => {
    const spell = new Spell('Fire arrow', new FireArrow(1, 7), new FireArrowEffect('Burning', 3));
    const dummyTarget = new Character('Lilian', CharacterClass.mage, 100, spell);
    expect(spell.execute(dummyTarget)).toBe(true);
  });
  it('Should result in false if spell has not been casted', () => {
    const spell = new Spell('Fire arrow', new FireArrow(0, 7), new FireArrowEffect('Burning', 3));
    const dummyTarget = new Character('Lilian', CharacterClass.mage, 100, spell);
    expect(spell.execute(dummyTarget)).toBe(false);
  });
});
