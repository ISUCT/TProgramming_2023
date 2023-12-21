import { Knight } from '../src/hero/knight';
import { Logger } from '../src/logger/logger';

const logger = new Logger();
const knight = new Knight('knight', 50, 20, logger);
const opponent = new Knight('opponent', 80, 15, logger);

describe('Knight', () => {
  it('useAbility test', () => {
    const logMock = jest.spyOn(logger, 'log');
    const initialHealth = opponent.currentHealth;
    knight.useAbility(opponent);

    expect(knight.usedAbility).toBe(true);
    expect(logMock).toHaveBeenCalledWith(
      `(Рыцарь) knight использует (Удар возмездия) и наносит урон 26 противнику (Рыцарь) opponent.`,
    );
    expect(opponent.currentHealth).toBe(initialHealth - knight.strength * 1.3);
  });
});
