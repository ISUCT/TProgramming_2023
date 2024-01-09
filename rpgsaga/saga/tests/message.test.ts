import { Character } from '../src/character';
import { CharacterClass } from '../src/characterClasses';
import { Message } from '../src/message';
import { KnightAttack } from '../src/spell_system/activeEffects/knightAttack';
import { Spell } from '../src/spell_system/spell/spell';

describe('Testing Message class', () => {
  it('Testing Message constructor', () => {
    const dummyCharacter = new Character(
      'Korsika',
      CharacterClass.knight,
      150,
      new Spell('Mighty Slash', new KnightAttack(2, 5), null),
    );

    const message = new Message(
      dummyCharacter,
      dummyCharacter.toString(),
      dummyCharacter,
      dummyCharacter.toString(),
      dummyCharacter.getAttackPoints(),
      dummyCharacter.spell,
    );

    expect(message.attacker).toBe(dummyCharacter);
    expect(message.attackerInfo).toBe(dummyCharacter.toString());
    expect(message.target).toBe(dummyCharacter);
    expect(message.targetInfo).toBe(dummyCharacter.toString());
    expect(message.damagePoints).toBe(dummyCharacter.getAttackPoints());
    expect(message.spell).toBe(dummyCharacter.spell);
  });
});
