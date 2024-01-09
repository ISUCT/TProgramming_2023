import { Character } from '../../../src/character';
import { CharacterClass } from '../../../src/characterClasses';
import { FireArrow } from '../../../src/spell_system/activeEffects/fireArrow';
import { Stun } from '../../../src/spell_system/activeEffects/stun';
import { Spell } from '../../../src/spell_system/spell/spell';

describe('Testing cast method', () => {
  it('Target should receive damage', () => {
    const dummyTarget = new Character(
      'Cassy',
      CharacterClass.archer,
      100,
      new Spell('Fire Arrow', new FireArrow(2, 7)),
    );
    const dummyAttacker = new Character('V', CharacterClass.mage, 100, new Spell('Stun', new Stun(2, 0)));

    dummyAttacker.spell.execute(dummyTarget);

    expect(dummyTarget.healthPoints).toBe(100);
  });
  it('Active effects should not be used more than castsRemaining', () => {
    const dummyTarget = new Character(
      'Cassy',
      CharacterClass.archer,
      100,
      new Spell('Fire Arrow', new FireArrow(2, 7)),
    );
    const dummyAttacker = new Character('V', CharacterClass.mage, 100, new Spell('Stun', new Stun(2, 0)));

    dummyAttacker.spell.execute(dummyTarget);
    dummyAttacker.spell.execute(dummyTarget);
    dummyAttacker.spell.execute(dummyTarget);

    expect(dummyTarget.healthPoints).toBe(100);
  });
});

describe('Testing canCast method', () => {
  it('Should result in true if castsRemaining bigger than 0', () => {
    const spell = new Stun(2, 7);
    expect(spell.canCast()).toBe(true);
  });

  it('Should result in false if castsRemaining equals to 0', () => {
    const spell = new Stun(0, 7);
    expect(spell.canCast()).toBe(false);
  });
  it('Should result in false if castsRemaining is less than 0', () => {
    const activeEffect = new Stun(-1, 7);
    expect(activeEffect.canCast()).toBe(false);
  });
});

describe('Testing toString method', () => {
  it('Should return correct text representation of spell', () => {
    const usesRemaining = 2;
    const activeEffect = new Stun(usesRemaining, 7);

    expect(activeEffect.toString()).toBe(`${usesRemaining} casts remaining`);
  });
});
