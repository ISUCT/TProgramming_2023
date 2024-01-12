import { Game } from '../src/rpgsaga/game';

describe('Game', () => {
  it('game starts and works', () => {
    const logSpy = jest.spyOn(global.console, 'log');

    const game = new Game(4);
    game.beginning();

    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toHaveBeenCalledWith('Кон 1');
    expect(logSpy).toHaveBeenCalledWith('Кон 2');
  });
});