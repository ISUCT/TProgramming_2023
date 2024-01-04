import { Battle } from '../src/saga/battle';
import { Player } from '../src/saga/player';
import { createPlayer } from '../src/saga/playerFactory';

describe('Testing playing battles', () => {
  it('should play battle with two players and return the winner', () => {
    const player1 = createPlayer('Test1', 2, 2, 'Knight');
    const player2 = createPlayer('Test2', 2, 3, 'Knight');
    const battle = new Battle(player1, player2, false);
    expect(battle.initiate()).toBeInstanceOf(Player);
  });
  it('should play battle with only one player? guess it works', () => {
    const player1 = createPlayer('Test1', 2, 2, 'Knight');
    const battle = new Battle(player1, player1, false);
    expect(battle.initiate()).toBeInstanceOf(Player);
  });
});
