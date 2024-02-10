import { Character } from '../src/character';
import { Game } from '../src/game';

describe('Testing Game class', () => {
  it('Constructor should throw an error when received quantity of players equal to 1', () => {
    expect(() => {
      new Game(1);
    }).toThrow('Quantity of players should be greater than 1');
  });
  it('Constructor should throw an error when received quantity of players less than 1', () => {
    expect(() => {
      new Game(0);
    }).toThrow('Quantity of players should be greater than 1');
  });
  it('Should result in valid winner when the game ends', () => {
    const game = new Game(2);
    game.start();

    expect(game.winner).toBeInstanceOf(Character);
    expect(game.winner.healthPoints).toBeGreaterThan(0);
  });
});
