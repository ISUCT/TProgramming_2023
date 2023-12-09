import { PlayerGenerator } from '../src/saga/playerGenerator';

describe('Testing creating players', () => {
  it('should return as much players as we ordered', () => {
    const gen = new PlayerGenerator();
    const players = gen.createPlayers(4, 4, 4);
    expect(players).toBeDefined();
    const nameList = {
      knight: 0,
      archer: 0,
      mage: 0,
    };
    for (let i = 0; i < players.length; i++) {
      switch (players[i].constructor.name) {
        case 'Knight':
          nameList.knight += 1;
          break;
        case 'Archer':
          nameList.archer += 1;
          break;
        case 'Mage':
          nameList.mage += 1;
          break;
      }
    }
    expect(nameList.knight).toEqual(4);
    expect(nameList.archer).toEqual(4);
    expect(nameList.mage).toEqual(4);
  });
});
