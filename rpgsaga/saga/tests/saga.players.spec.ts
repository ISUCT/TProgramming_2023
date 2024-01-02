import { createPlayer } from '../src/saga/playerFactory';
import { PlayerGenerator } from '../src/saga/playerGenerator';
import { Statuses } from '../src/saga/banks/statuses';

describe('Testing creating players', () => {
  it('should return as much players as we ordered', () => {
    const players = PlayerGenerator.createPlayers(4, 4, 4);
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

describe('Testing players behavior', () => {
  it('regular attack should return damage in scale of strength and have no statuses, same as knights ferocious strike', () => {
    const player = createPlayer('Tester', 2, 5, 'Knight');
    expect(player.attack().damage).toEqual(player.strength);
    expect(player.attack().status).toBeUndefined();
    expect(player.ability(0).damage).toEqual(1.5 * player.strength);
    expect(player.ability(0).status).toBeUndefined();
  });
  it('testing archers fire arrows', () => {
    const player = createPlayer('Tester', 2, 5, 'Archer');
    expect(player.ability(0).damage).toEqual(0);
    expect(player.ability(0).status).toEqual(Statuses.burn);
  });
  it('testing mages freeze', () => {
    const player = createPlayer('Tester', 2, 5, 'Mage');
    expect(player.ability(0).damage).toEqual(0);
    expect(player.ability(0).status).toEqual(Statuses.burn);
  });
  it('testing mages healing', () => {
    const player = createPlayer('Tester', 5, 4, 'Archer');
    player.passTurn(player.attack());
    expect(player.health).toEqual(player.maxHealth);
  });
});
