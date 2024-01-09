import { Knight } from '../src/heroes/knight';
import { Messenger } from '../src/messenger';

describe('Knight', () => {
  it('useHeroAbility test', () => {
    const messenger = new Messenger();
    const knight = new Knight(100, 20, 'knight', messenger);
    const enemy = new Knight(100, 20, 'enemy', messenger);

    const messengerFn = jest.spyOn(messenger, 'sendMessage');
    const initialHealth = enemy.health;
    knight.useHeroAbility(enemy);

    expect(knight.usedAbility).toBe(true);
    expect(messengerFn).toHaveBeenCalledWith(
      `(Рыцарь) knight использует (Удар возмездия) и наносит урон 26 противнику (Рыцарь) enemy.`,
    );
    expect(enemy.health).toBe(initialHealth - knight.power * 1.3);
  });
});
