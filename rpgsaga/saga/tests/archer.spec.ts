import { Archer } from '../src/hero/archer';
import { Logger } from '../src/logger/logger';

const logger = new Logger();
const archer = new Archer('archer', 50, 20, logger);
const opponent = new Archer('opponent', 80, 15, logger);

describe('Archer', () => {
  it('useAbility test', () => {
    const logMock = jest.spyOn(logger, 'log');
    const initialHealth = opponent.currentHealth;
    archer.useAbility(opponent);

    expect(opponent.currentHealth).toBe(initialHealth - 2);
    expect(archer.usedAbility).toBe(true);
    expect(logMock).toHaveBeenCalledWith(
      '(Лучник) archer использует (Огненные стрелы) на игрока (Лучник) opponent, он загорается и теряет 2 единицы жизни.',
    );
  });

  it('attack test', () => {
    const getDamageMock = jest.spyOn(opponent, 'getDamage');
    archer.attack(opponent);

    expect(getDamageMock).toHaveBeenCalledWith(archer.strength + 2, archer);
  });
});
