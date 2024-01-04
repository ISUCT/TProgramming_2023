import { Logger } from '../src/logger/logger';
import { Archer } from '../src/heroes/archerHero';
import { Warrior } from '../src/heroes/warriorHero';

const spyConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});

describe('Logger tests', () => {
  let heroes;

  beforeEach(() => {
    heroes = [new Archer('Dada'), new Warrior('NetNet')];
  });

  it('start message', () => {
    Logger.startMessage();
    expect(spyConsoleLog).toHaveBeenCalledWith('\x1b[42mБитва началась\x1b[0m');
  });

  it('declaration heroes should log hero names', () => {
    Logger.declarationHeroes(heroes);
    expect(spyConsoleLog).toHaveBeenCalledWith('В данном сражение примут участие благородные и неукротимые: ');
    expect(spyConsoleLog).toHaveBeenCalledWith('\x1b[4mWarrior NetNet\x1b[0m');
    expect(spyConsoleLog).toHaveBeenCalledWith('\x1b[4mArcher Dada\x1b[0m');
  });
  it('win message', () => {
    Logger.winMassage(heroes[1]);
    expect(spyConsoleLog).toHaveBeenCalledWith(
      expect.stringMatching(
        // eslint-disable-next-line no-control-regex
        /^👑 В ЖЕСТКОЙ МЯСОРУБКЕ ПОБЕДИЛ \x1b\[41m\w+\x1b\[0m\. ИМЯ \x1b\[41m\w+\x1b\[0m ЗАПОМНЯТ НА МНОГИЕ ВЕКА 👑$/,
      ),
    );
  });
  it('critical attack information', () => {
    Logger.criticalAttack('Warrior', 'Physical');
    expect(spyConsoleLog).toHaveBeenCalledWith(
      'Warrior использовал Retaliatory Strike и наносит дополнительный урон(10)',
    );
  });
  // Others have to do with random(attack or similar)
});
