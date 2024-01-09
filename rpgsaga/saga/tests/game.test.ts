import { Game } from '../src/game';
import { Knight } from '../src/heroes/knight';
import { Messenger } from '../src/messenger';

const messenger = new Messenger();
const game = new Game(4);

describe('Game', () => {
  it('battle test', () => {
    const firstPlayer = new Knight(200, 20, 'firstPlayer', messenger);
    const secondPlayer = new Knight(100, 10, 'secondPlayer', messenger);

    const useFirstPlayerAbilityMock = jest.spyOn(firstPlayer, 'useHeroAbility');
    const useSecondPlayerAbilityMock = jest.spyOn(secondPlayer, 'useHeroAbility');
    const firstPlayerAttackMock = jest.spyOn(firstPlayer, 'attack');
    const secondPlayerattackMock = jest.spyOn(secondPlayer, 'attack');

    game.makeOneFight(firstPlayer, secondPlayer);

    expect(useFirstPlayerAbilityMock).toHaveBeenCalled();
    expect(useSecondPlayerAbilityMock).toHaveBeenCalled();
    expect(firstPlayerAttackMock).toHaveBeenCalled();
    expect(secondPlayerattackMock).toHaveBeenCalled();
  });
});
