import { Archer } from '../src/heroes/archer';
import { Messenger } from '../src/messenger';

describe('Archer', () => {
  it('useHeroAbility test', () => {
    const messenger = new Messenger();
    const archer = new Archer(100, 20, 'archer', messenger);
    const enemy = new Archer(100, 20, 'enemy', messenger);

    const messengerFn = jest.spyOn(messenger, 'sendMessage');
    const initialHealth = enemy.health;
    archer.useHeroAbility(enemy);

    expect(enemy.health).toBe(initialHealth - 2);
    expect(archer.usedAbility).toBe(true);
    expect(messengerFn).toHaveBeenCalledWith(
      '(Лучник) archer использует (Огненные стрелы) на игрока (Лучник) enemy, он загорается и теряет 2 единицы жизни.',
    );
  });

  it('attack test', () => {
    const messenger = new Messenger();
    const archer = new Archer(100, 20, 'archer', messenger);
    const enemy = new Archer(100, 20, 'enemy', messenger);

    const getDamageMock = jest.spyOn(enemy, 'getDamage');
    archer.attack(enemy);

    expect(getDamageMock).toHaveBeenCalledWith(archer.power);
  });
});
