import { Character } from '../../src/character';
import { CharacterClass } from '../../src/characterClasses';
import { FireArrow } from '../../src/spell_system/activeEffects/fireArrow';
import { Spell } from '../../src/spell_system/spell/spell';
import { FireArrowEffect } from '../../src/spell_system/statusEffect/fireArrowEffect';
import { StunEffect } from '../../src/spell_system/statusEffect/stunEffect';
import { StatusEffectManager } from '../../src/spell_system/statusEffectManager';

describe('Testing applyAllStatusEffects method', () => {
  it('Should apply all status effects', () => {
    const dummyTarget = new Character(
      'Cassy',
      CharacterClass.archer,
      100,
      new Spell('Fire Arrow', new FireArrow(2, 7)),
    );

    const fireArrowEffect = new FireArrowEffect('Burning', 3);
    const stunEffect = new StunEffect('Stun', 1);

    dummyTarget.statusEffects.addLast(fireArrowEffect);
    dummyTarget.statusEffects.addLast(stunEffect);

    const manager = new StatusEffectManager();

    manager.applyAllStatusEffects(dummyTarget);

    expect(dummyTarget.healthPoints).toBe(98);
    expect(dummyTarget.isStunned).toBe(true);
  });
});

describe('Testing removeEndedStatusEffects method', () => {
  it('Should remove all ended status effects', () => {
    const dummyTarget = new Character(
      'Cassy',
      CharacterClass.archer,
      100,
      new Spell('Fire Arrow', new FireArrow(2, 7)),
    );

    const fireArrowEffect = new FireArrowEffect('Burning', 3);
    const stunEffect = new StunEffect('Stun', 0);

    dummyTarget.statusEffects.addLast(fireArrowEffect);
    dummyTarget.statusEffects.addLast(stunEffect);

    const manager = new StatusEffectManager();

    manager.removeEndedStatusEffects(dummyTarget);

    expect(dummyTarget.statusEffects.size).toBe(1);
  });
});
