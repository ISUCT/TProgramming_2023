import { Character } from '../src/character';
import { CharacterClass } from '../src/characterClasses';
import { Spell } from '../src/spell_system/spell/spell';
import { Stun } from '../src/spell_system/activeEffects/stun';
import { StunEffect } from '../src/spell_system/statusEffect/stunEffect';

describe('Testing Character class', () => {
  it('Constructor tests', () => {
    const character = new Character(
      'Linda',
      CharacterClass.mage,
      105,
      new Spell('Freeze', new Stun(2, 0), new StunEffect('Stun', 1)),
    );

    expect(character.name).toBe('Linda');
    expect(character.class).toBe(CharacterClass.mage);
    expect(character.healthPoints).toBe(105);
    expect(character.spell).toBeInstanceOf(Spell);
  });
  it('Setting new name which contains 0 characters should result in exception', () => {
    const character = new Character(
      'Linda',
      CharacterClass.mage,
      105,
      new Spell('Freeze', new Stun(2, 0), new StunEffect('Stun', 1)),
    );

    expect(() => {
      character.name = '';
    }).toThrow(Error('Name should be longer than 0 characters'));
  });
  it('Testing receiveDamage method', () => {
    const character = new Character(
      'Linda',
      CharacterClass.mage,
      105,
      new Spell('Freeze', new Stun(2, 0), new StunEffect('Stun', 1)),
    );

    character.receiveDamage(5);

    expect(character.healthPoints).toBe(100);
  });
  it('Testing getAttackPoints method', () => {
    const character = new Character(
      'Linda',
      CharacterClass.mage,
      105,
      new Spell('Freeze', new Stun(2, 0), new StunEffect('Stun', 1)),
    );

    character.strengthModificator = 5.0;

    expect(character.getAttackPoints()).toBe(25);
  });
  it('Testing toString method', () => {
    const character = new Character(
      'Linda',
      CharacterClass.mage,
      105,
      new Spell('Freeze', new Stun(2, 0), new StunEffect('Stun', 1)),
    );

    expect(character.toString()).toBe('Linda (mage) [105/105]');
  });
});
