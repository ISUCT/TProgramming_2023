import { Character } from '../../../src/character';
import { CharacterClass } from '../../../src/characterClasses';
import { FireArrow } from '../../../src/spell_system/activeEffects/fireArrow';
import { KnightAttack } from '../../../src/spell_system/activeEffects/knightAttack';
import { Spell } from '../../../src/spell_system/spell/spell';

describe('Testing cast method', () => {
  it('Target should receive damage', () => {
    const dummyTarget = new Character(
      'Cassy',
      CharacterClass.archer,
      100,
      new Spell('Fire Arrow', new FireArrow(2, 7)),
    );
    const dummyAttacker = new Character(
      'Dante',
      CharacterClass.knight,
      100,
      new Spell('Mighty Slash', new KnightAttack(2, 5)),
    );

    dummyAttacker.spell.execute(dummyTarget);

    expect(dummyTarget.healthPoints).toBe(90);
  });
  it('Active effects should not be used more than castsRemaining', () => {
    const dummyTarget = new Character(
      'Cassy',
      CharacterClass.archer,
      100,
      new Spell('Fire Arrow', new FireArrow(2, 7)),
    );
    const dummyAttacker = new Character(
      'Dante',
      CharacterClass.knight,
      100,
      new Spell('Mighty Slash', new KnightAttack(2, 5)),
    );

    dummyAttacker.spell.execute(dummyTarget);
    dummyAttacker.spell.execute(dummyTarget);
    dummyAttacker.spell.execute(dummyTarget);

    expect(dummyTarget.healthPoints).toBe(80);
  });
});

describe('Testing canCast method', () => {
  it('Should result in true if castsRemaining bigger than 0', () => {
    const spell = new KnightAttack(2, 7);
    expect(spell.canCast()).toBe(true);
  });

  it('Should result in false if castsRemaining equals to 0', () => {
    const spell = new KnightAttack(0, 7);
    expect(spell.canCast()).toBe(false);
  });
  it('Should result in false if castsRemaining is less than 0', () => {
    const activeEffect = new KnightAttack(-1, 7);
    expect(activeEffect.canCast()).toBe(false);
  });
});

describe('Testing toString method', () => {
  it('Should return correct text representation of spell', () => {
    const usesRemaining = 2;
    const activeEffect = new KnightAttack(usesRemaining, 7);

    expect(activeEffect.toString()).toBe(`${usesRemaining} casts remaining`);
  });
});
