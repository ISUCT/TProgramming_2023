import { Bina } from '../src/bina';
import { Character } from '../src/character';
import { CharacterClass } from '../src/characterClasses';
import { Message } from '../src/message';
import { FireArrow } from '../src/spell_system/activeEffects/fireArrow';
import { Stun } from '../src/spell_system/activeEffects/stun';
import { Spell } from '../src/spell_system/spell/spell';
import { FireArrowEffect } from '../src/spell_system/statusEffect/fireArrowEffect';
import { StunEffect } from '../src/spell_system/statusEffect/stunEffect';

describe('Testing receiveMessage method', () => {
  it('Should receive given message correctly', () => {
    const attacker = new Character(
      'Eve',
      CharacterClass.mage,
      100,
      new Spell('Stun', new Stun(1, 0), new StunEffect('Freezing', 1)),
    );

    const target = new Character(
      'Cassie',
      CharacterClass.archer,
      100,
      new Spell('Fire Arrow', new FireArrow(2, 7), new FireArrowEffect('Burning', 3)),
    );

    const message = new Message(
      attacker,
      attacker.toString(),
      target,
      target.toString(),
      attacker.getAttackPoints(),
      attacker.spell,
    );

    const bina = new Bina();
    bina.receiveMessage(message);
    expect(bina.message).toBe(message);
  });
});

describe('Testing receiveDamage method', () => {
  it('Target should receive damage which was in message', () => {
    const attacker = new Character(
      'Eve',
      CharacterClass.mage,
      100,
      new Spell('Stun', new Stun(1, 0), new StunEffect('Freezing', 1)),
    );

    const target = new Character(
      'Cassie',
      CharacterClass.archer,
      100,
      new Spell('Fire Arrow', new FireArrow(2, 7), new FireArrowEffect('Burning', 3)),
    );

    const message = new Message(
      attacker,
      attacker.toString(),
      target,
      target.toString(),
      attacker.getAttackPoints(),
      attacker.spell,
    );

    const bina = new Bina();
    bina.receiveMessage(message);

    bina.performAttack();

    expect(message.target.healthPoints).toBe(message.target.maxHealthPoints - message.damagePoints);
  });
});

describe('Testing performSpell method', () => {
  it('Should result in true if spell can be casted and give statusEffect to target', () => {
    const attacker = new Character(
      'Eve',
      CharacterClass.mage,
      100,
      new Spell('Stun', new Stun(1, 0), new StunEffect('Freezing', 1)),
    );

    const target = new Character(
      'Cassie',
      CharacterClass.archer,
      100,
      new Spell('Fire Arrow', new FireArrow(2, 7), new FireArrowEffect('Burning', 3)),
    );

    const message = new Message(
      attacker,
      attacker.toString(),
      target,
      target.toString(),
      attacker.getAttackPoints(),
      attacker.spell,
    );

    const bina = new Bina();
    bina.receiveMessage(message);

    const isSuccessfull = bina.performSpell();
    expect(isSuccessfull).toBe(true);
    expect(message.target.statusEffects.contains(message.spell.getStatusEffect())).toBe(true);
  });
  it('Should result in false if spell cannot be casted', () => {
    const attacker = new Character(
      'Eve',
      CharacterClass.mage,
      100,
      new Spell('Stun', new Stun(0, 0), new StunEffect('Freezing', 1)),
    );

    const target = new Character(
      'Cassie',
      CharacterClass.archer,
      100,
      new Spell('Fire Arrow', new FireArrow(2, 7), new FireArrowEffect('Burning', 3)),
    );

    const message = new Message(
      attacker,
      attacker.toString(),
      target,
      target.toString(),
      attacker.getAttackPoints(),
      attacker.spell,
    );

    const bina = new Bina();
    bina.receiveMessage(message);

    const isSuccessful = bina.performSpell();
    expect(isSuccessful).toBe(false);
  });
});
