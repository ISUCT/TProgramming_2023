import { Game } from '../src/game/game';
import { Knight } from '../src/hero/knight';
import { Logger } from '../src/logger/logger';

const logger = new Logger();
const game = new Game(4);

describe('Game', () => {
  it('createPlayers test', () => {
    expect(game.players.length).toBe(4);
  });

  it('battle test', () => {
    const player1 = new Knight('player1', 200, 20, logger);
    const player2 = new Knight('player2', 100, 10, logger);

    const logMock = jest.spyOn(game.logger, 'log');
    const useAbilityMock = jest.spyOn(player1, 'useAbility');
    const attackMock = jest.spyOn(player1, 'attack');

    game.battle(player1, player2);

    expect(useAbilityMock).toHaveBeenCalled();
    expect(attackMock).toHaveBeenCalled();
    expect(logMock).toHaveBeenCalledWith(`(Рыцарь) player2 погибает.`);
    expect(logMock).toHaveBeenCalledWith('(Рыцарь) player1 vs (Рыцарь) player2.');

    expect(game.players).not.toContain(player2);
  });
});
