import { Character } from '../../../src/character';
import { CharacterClass } from '../../../src/characterClasses';
import { FireArrow } from '../../../src/spell_system/activeEffects/fireArrow';
import { Spell } from '../../../src/spell_system/spell/spell';
import { StunEffect } from '../../../src/spell_system/statusEffect/stunEffect';

describe('Testing canApply method', () => {
  it('Should result in true if castsRemaining is bigger than 0', () => {
    const stunEffect = new StunEffect('Stun', 3);
    expect(stunEffect.canApply()).toBe(true);
  });
  it('Should result in false if castsRemaining is equal to 0', () => {
    const stunEffect = new StunEffect('Stun', 0);
    expect(stunEffect.canApply()).toBe(false);
  });
  it('Should result in true if castsRemaining is less than 0', () => {
    const stunEffect = new StunEffect('Stun', -1);
    expect(stunEffect.canApply()).toBe(false);
  });
});

describe('Testing apply method', () => {
  it('Target isStunned flag should result to true', () => {
    const dummyTarget = new Character(
      'Cassy',
      CharacterClass.archer,
      100,
      new Spell('Fire Arrow', new FireArrow(2, 7)),
    );

    const stunEffect = new StunEffect('Stun', 2);

    stunEffect.apply(dummyTarget);

    expect(dummyTarget.isStunned).toBe(true);
  });
  it('Target isStunned flag should result to true no more times than usesRemaining', () => {
    const dummyTarget = new Character(
      'Cassy',
      CharacterClass.archer,
      100,
      new Spell('Fire Arrow', new FireArrow(2, 7)),
    );

    const stunEffect = new StunEffect('Stun', 1);

    stunEffect.apply(dummyTarget);

    dummyTarget.isStunned = false;

    stunEffect.apply(dummyTarget);

    expect(dummyTarget.isStunned).toBe(false);
  });
});

describe('Testing refresh method', () => {
  it('Should refresh correctly', () => {
    const dummyTarget = new Character(
      'Cassy',
      CharacterClass.archer,
      100,
      new Spell('Fire Arrow', new FireArrow(2, 7)),
    );

    const stunEffect = new StunEffect('Stun', 1);

    stunEffect.apply(dummyTarget);

    dummyTarget.isStunned = false;

    stunEffect.refresh();

    stunEffect.apply(dummyTarget);

    expect(dummyTarget.isStunned).toBe(true);
  });
});
