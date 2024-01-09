import { Mage } from '../src/heroes/mage';
import { Messenger } from '../src/messenger';

describe('Mage', () => {
  it('useHeroAbility test', () => {
    const messenger = new Messenger();
    const mage = new Mage(100, 20, 'mage', messenger);
    const enemy = new Mage(100, 20, 'enemy', messenger);

    const messengerFn = jest.spyOn(messenger, 'sendMessage');
    mage.useHeroAbility(enemy);

    expect(enemy.isCanAttack).toBe(false);
    expect(mage.usedAbility).toBe(true);
    expect(messengerFn).toHaveBeenCalledWith(
      `(Маг) mage использует (заворожение), противник (Маг) enemy пропустит следующий ход.`,
    );
  });
});
