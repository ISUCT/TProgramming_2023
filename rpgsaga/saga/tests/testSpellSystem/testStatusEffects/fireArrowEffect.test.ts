import { Character } from '../../../src/character';
import { CharacterClass } from '../../../src/characterClasses';
import { FireArrow } from '../../../src/spell_system/activeEffects/fireArrow';
import { Spell } from '../../../src/spell_system/spell/spell';
import { FireArrowEffect } from '../../../src/spell_system/statusEffect/fireArrowEffect';

describe('Testing canApply method', () => {
  it('Should result in true if castsRemaining is bigger than 0', () => {
    const fireArrowEffect = new FireArrowEffect('Burning', 3);
    expect(fireArrowEffect.canApply()).toBe(true);
  });
  it('Should result in false if castsRemaining is equal to 0', () => {
    const fireArrowEffect = new FireArrowEffect('Burning', 0);
    expect(fireArrowEffect.canApply()).toBe(false);
  });
  it('Should result in true if castsRemaining is less than 0', () => {
    const fireArrowEffect = new FireArrowEffect('Burning', -1);
    expect(fireArrowEffect.canApply()).toBe(false);
  });
});

describe('Testing apply method', () => {
  it('Target should receive damage', () => {
    const dummyTarget = new Character(
      'Cassy',
      CharacterClass.archer,
      100,
      new Spell('Fire Arrow', new FireArrow(2, 7)),
    );

    const fireArrowEffect = new FireArrowEffect('Burning', 2);

    fireArrowEffect.apply(dummyTarget);

    expect(dummyTarget.healthPoints).toBe(98);
  });
  it('Status effect should not be used more times than usesAvailable', () => {
    const dummyTarget = new Character(
      'Cassy',
      CharacterClass.archer,
      100,
      new Spell('Fire Arrow', new FireArrow(2, 7)),
    );

    const fireArrowEffect = new FireArrowEffect('Burning', 2);

    fireArrowEffect.apply(dummyTarget);
    fireArrowEffect.apply(dummyTarget);
    fireArrowEffect.apply(dummyTarget);

    expect(dummyTarget.healthPoints).toBe(96);
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

    const fireArrowEffect = new FireArrowEffect('Burning', 1);

    fireArrowEffect.apply(dummyTarget);

    fireArrowEffect.refresh();

    fireArrowEffect.apply(dummyTarget);

    expect(dummyTarget.healthPoints).toBe(96);
  });
});
