import { Mage } from '../src/hero/mage';
import { Logger } from '../src/logger/logger';

const logger = new Logger();
const mage = new Mage('mage', 50, 20, logger);
const opponent = new Mage('opponent', 80, 15, logger);

describe('Mage', () => {
  it('useAbility test', () => {
    const logMock = jest.spyOn(logger, 'log');
    mage.useAbility(opponent);

    expect(opponent.canWalk).toBe(false);
    expect(mage.usedAbility).toBe(true);
    expect(logMock).toHaveBeenCalledWith(
      `(Маг) mage использует (заворожение), противник (Маг) opponent пропустит следующий ход.`,
    );
  });
});
