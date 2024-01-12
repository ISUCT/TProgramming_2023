import { Game } from '../src/game';

describe('Game', () => {
  it('game with 4 players starts and works', () => {
    const logSpy = jest.spyOn(global.console, 'log');

    const game = new Game(4);
    game.start();

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('Кон 1.');
    expect(logSpy).toHaveBeenCalledWith('Кон 2.');
  });

  it('game with 8 players starts and works', () => {
    const logSpy = jest.spyOn(global.console, 'log');

    const game = new Game(4);
    game.start();

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('Кон 1.');
    expect(logSpy).toHaveBeenCalledWith('Кон 2.');
    expect(logSpy).toHaveBeenCalledWith('Кон 2.');
  });
});