import { Game } from '../src/RPGSaga/Game';
import { Archer } from '../src/RPGSaga/GameClasses/Archer';
import { Player } from '../src/RPGSaga/Player';


describe('Game', () => {
  describe('PlayerDoAction', () => {
    it('should return an action for the player', () => {
      const player = new Archer(150,30,"Артем");
      const action = Game.PlayerDoAction(player);
      
      expect(action).toBeDefined();
      expect(action).toHaveLength(2);
      expect(typeof action[0]).toBe('string');
      expect(typeof action[1]).toBe('number');
    });
  });

  describe('PLayerListGenerator', () => {
    it('should generate a list of players', () => {
      const count = 3;
      const playerList = Game.PLayerListGenerator(count);

      expect(playerList).toHaveLength(count);
      playerList.forEach(player => {
        expect(player instanceof Player).toBe(true);
      });
    });
  });
});



