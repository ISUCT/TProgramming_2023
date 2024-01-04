import { createPlayer } from '../src/saga/playerFactory';
import { PlayerGenerator } from '../src/saga/playerGenerator';
import { Statuses } from '../src/saga/banks/statuses';
import { Skill } from '../src/saga/actions';
import { ActionResult, Player } from '../src/saga/player';
import { ActionType, Aff } from '../src/saga/affinities';
import { Changer } from '../src/saga/changer';

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

describe('Testing players actions', () => {
  it('regular attack should return damage in scale of strength and have no statuses, same as knights ferocious strike', () => {
    const player = createPlayer('Tester', 2, 5, 'Knight');
    expect(player.attack().damage).toEqual(player.strength);
    expect(player.attack().status).toBeUndefined();
    expect(player.ability(0).damage).toEqual(1.5 * player.strength);
    expect(player.ability(0).status).toBeUndefined();
  });
  it('archers fire arrows should have burn effect applied', () => {
    const player = createPlayer('Tester', 2, 5, 'Archer');
    expect(player.ability(0).damage).toEqual(0);
    expect(player.ability(0).status).toEqual(Statuses.burn);
  });
  it('mages freeze should have freeze effect applied', () => {
    const player = createPlayer('Tester', 2, 5, 'Mage');
    expect(player.ability(0).damage).toEqual(0);
    expect(player.ability(0).status).toEqual(Statuses.freeze);
  });
  it('mages healing should add some HP to this player, but not more than their max health', () => {
    const player = createPlayer('Tester', 5, 4, 'Mage');
    player.passTurn(player.attack());
    player.ability(1);
    expect(player.health).toEqual(player.maxHealth);
  });
  it('should cancel active statuses when using Dekunda spell', () => {
    const mage = createPlayer('Tester', 5, 4, 'Mage');
    const archer = createPlayer('Tester1', 5, 5, 'Archer');

    class Tester extends Player {
      protected abilityList: Skill[] = [
        new Skill('Ferocious Strike', ActionType.Normal, this.strength * 1.5),
        new Skill('Dekunda', ActionType.Support, 0, undefined, new Changer([Statuses.burn, Statuses.freeze])),
      ];
      constructor(public health: number, public strength: number, public name: string) {
        super(health, strength, name, [Aff.Normal, Aff.Normal, Aff.Normal]);
      }
    }

    const tester = new Tester(5, 5, 'Tester2');
    tester.passTurn(archer.ability(0));
    tester.passTurn(mage.ability(0));
    expect(tester.statuses.length).toEqual(2);
    tester.ability(1);
    expect(tester.statuses.length).toEqual(0);
  });
});

describe('testing player responding', () => {
  it('should respond to attack with normal affinity', () => {
    const player = createPlayer('Tester', 2, 5, 'Knight');
    player.passTurn(new ActionResult(new Skill('test', ActionType.Fire, player.strength)));
    expect(player.health).toEqual(player.maxHealth - player.strength);
  });
  it('should respond to attack with status ', () => {
    const player = createPlayer('Tester', 2, 5, 'Archer');
    player.passTurn(player.ability(0));
    expect(player.statuses.length).toEqual(1);
    expect(player.statuses[0]).toEqual(Statuses.burn);
  });
  it('should respond to active statuses', () => {
    const player = createPlayer('Tester', 6, 5, 'Knight');
    player.passTurn(new ActionResult(new Skill('apply statuses', ActionType.Fire, 0, Statuses.burn)));
    player.passTurn(); // burn, turnCounter = 3-1 = 2
    expect(player.health).toEqual(player.maxHealth - 2);
    player.passTurn(); // burn, turnCounter = 2-1 = 1
    expect(player.health).toEqual(player.maxHealth - 4);
    player.passTurn(); // burn, turnCounter = 1-1 = 0
    expect(player.health).toEqual(player.maxHealth - 6);
    player.passTurn(); // burn cancelled
    expect(player.health).toEqual(player.maxHealth - 6);
  });
});

describe('testing player affinity', () => {
  it('should reflect attack', () => {
    class Tester extends Player {
      protected abilityList: Skill[] = [new Skill('Ferocious Strike', ActionType.Normal, this.strength * 1.5)];
      constructor(public health: number, public strength: number, public name: string) {
        super(health, strength, name, [Aff.Reflect, Aff.Reflect, Aff.Reflect]);
      }
    }

    const player = new Tester(2, 5, 'Tester');
    expect(player.passTurn(player.attack()).reflectiveAttack).toBeDefined();
    expect(player.passTurn(player.attack()).reflectiveAttack.damage).toEqual(player.strength);
  });
  it('should block attack', () => {
    class Tester extends Player {
      protected abilityList: Skill[] = [new Skill('Ferocious Strike', ActionType.Normal, this.strength * 1.5)];
      constructor(public health: number, public strength: number, public name: string) {
        super(health, strength, name, [Aff.Block, Aff.Block, Aff.Block]);
      }
    }

    const player = new Tester(2, 5, 'Tester');
    player.passTurn(player.attack());
    expect(player.health).toEqual(player.maxHealth);
  });
  it('should get less damage with resist attack', () => {
    class Tester extends Player {
      protected abilityList: Skill[] = [new Skill('Ferocious Strike', ActionType.Normal, this.strength * 1.5)];
      constructor(public health: number, public strength: number, public name: string) {
        super(health, strength, name, [Aff.Resist, Aff.Resist, Aff.Resist]);
      }
    }

    const player = new Tester(2, 1, 'Tester');
    player.passTurn(player.attack());
    expect(player.health).toEqual(player.maxHealth - player.strength * 0.4);
  });
  it('should get more damage with weak attack', () => {
    class Tester extends Player {
      protected abilityList: Skill[] = [new Skill('Ferocious Strike', ActionType.Normal, this.strength * 1.5)];
      constructor(public health: number, public strength: number, public name: string) {
        super(health, strength, name, [Aff.Weak, Aff.Weak, Aff.Weak]);
      }
    }

    const player = new Tester(2, 1, 'Tester');
    player.passTurn(player.attack());
    expect(player.health).toEqual(player.maxHealth - player.strength * 1.6);
  });
});
