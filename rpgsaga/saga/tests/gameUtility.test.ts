import { ArrayItem } from '../src/arrayItem';
import { AttackType } from '../src/attackType';
import { Character } from '../src/character';
import { CharacterClass } from '../src/characterClasses';
import { GameUtility } from '../src/gameUtility';
import { randomIntFromInterval } from '../src/randomMath';
import { FireArrow } from '../src/spell_system/activeEffects/fireArrow';
import { Spell } from '../src/spell_system/spell/spell';
import { FireArrowEffect } from '../src/spell_system/statusEffect/fireArrowEffect';

describe('Testing findDeadBodies method', () => {
  it('Should return array of indexes if some of the players are dead', () => {
    const players: ArrayItem[] = [];

    const player1 = new Character('Lilian', CharacterClass.archer, 0, new Spell('Fire Arrow', new FireArrow(2, 7)));
    const player2 = new Character('Dorian', CharacterClass.archer, 5, new Spell('Fire Arrow', new FireArrow(2, 7)));

    players.push(new ArrayItem(player1, 0));
    players.push(new ArrayItem(player2, 1));

    const utility = new GameUtility();

    const deadBodies = utility.findDeadBodies(players);

    expect(deadBodies).toBeTruthy();
  });
  it('Should return null if all of the players are alive', () => {
    const players: ArrayItem[] = [];

    const player1 = new Character('Lilian', CharacterClass.archer, 10, new Spell('Fire Arrow', new FireArrow(2, 7)));
    const player2 = new Character('Dorian', CharacterClass.archer, 5, new Spell('Fire Arrow', new FireArrow(2, 7)));

    players.push(new ArrayItem(player1, 0));
    players.push(new ArrayItem(player2, 1));

    const utility = new GameUtility();

    const deadBodies = utility.findDeadBodies(players);

    expect(deadBodies).toBe(null);
  });
});

describe('Testing replaceDeadBodies method', () => {
  it('Dead players should be replaces by alive players', () => {
    const currentPlayers: ArrayItem[] = [];

    const currentPlayer1 = new Character(
      'Lilian',
      CharacterClass.archer,
      0,
      new Spell('Fire Arrow', new FireArrow(2, 7)),
    );
    const currentPlayer2 = new Character(
      'Dorian',
      CharacterClass.archer,
      -5,
      new Spell('Fire Arrow', new FireArrow(2, 7)),
    );

    currentPlayers.push(new ArrayItem(currentPlayer1, 0));
    currentPlayers.push(new ArrayItem(currentPlayer2, 1));

    const players: Character[] = [];

    const player1 = new Character('Yuri', CharacterClass.archer, 5, new Spell('Fire Arrow', new FireArrow(2, 7)));
    const player2 = new Character('Satsuki', CharacterClass.archer, 10, new Spell('Fire Arrow', new FireArrow(2, 7)));

    players.push(player1);
    players.push(player2);

    const utility = new GameUtility();

    const newPlayerIndex = utility.replaceDeadBodies(players, currentPlayers, 0, [0, 1]);

    expect(newPlayerIndex).toBe(2);

    expect(currentPlayers[0].player.name).toBe('Yuri');
    expect(currentPlayers[0].player.class).toBe(CharacterClass.archer);
    expect(currentPlayers[0].player.spell).toBeInstanceOf(Spell);
    expect(currentPlayers[0].player.healthPoints).toBeGreaterThan(0);

    expect(currentPlayers[1].player.name).toBe('Satsuki');
    expect(currentPlayers[1].player.class).toBe(CharacterClass.archer);
    expect(currentPlayers[1].player.spell).toBeInstanceOf(Spell);
    expect(currentPlayers[1].player.healthPoints).toBeGreaterThan(0);
  });
});

describe('Testing restoreCurrentPlayers method', () => {
  it('Should restore initial state of all current players', () => {
    const currentPlayers: ArrayItem[] = [];

    const currentPlayer1 = new Character(
      'Lilian',
      CharacterClass.archer,
      0,
      new Spell('Fire Arrow', new FireArrow(0, 7), new FireArrowEffect('Burning', 0)),
    );
    const currentPlayer2 = new Character(
      'Dorian',
      CharacterClass.archer,
      -5,
      new Spell('Fire Arrow', new FireArrow(0, 7), new FireArrowEffect('Burning', 0)),
    );

    currentPlayers.push(new ArrayItem(currentPlayer1, 0));
    currentPlayers.push(new ArrayItem(currentPlayer2, 1));

    const players: Character[] = [];

    const player1 = new Character(
      'Lilian',
      CharacterClass.archer,
      5,
      new Spell('Fire Arrow', new FireArrow(2, 7), new FireArrowEffect('Burning', 2)),
    );
    const player2 = new Character(
      'Dorian',
      CharacterClass.archer,
      10,
      new Spell('Fire Arrow', new FireArrow(2, 7), new FireArrowEffect('Burning', 2)),
    );

    players.push(player1);
    players.push(player2);

    const utility = new GameUtility();

    utility.restoreCurrentPlayers(currentPlayers, players);

    expect(currentPlayers[0].player.name).toBe('Lilian');
    expect(currentPlayers[0].player.healthPoints).toBe(5);
    expect(currentPlayers[0].player.spell.getStatusEffect().canApply()).toBe(true);

    expect(currentPlayers[1].player.name).toBe('Dorian');
    expect(currentPlayers[1].player.healthPoints).toBe(10);
    expect(currentPlayers[1].player.spell.getStatusEffect().canApply()).toBe(true);
  });
});

describe('Testing findWinner method', () => {
  it('Should return winner if there is one', () => {
    const currentPlayers: ArrayItem[] = [];

    const currentPlayer1 = new Character(
      'Lilian',
      CharacterClass.archer,
      0,
      new Spell('Fire Arrow', new FireArrow(0, 7), new FireArrowEffect('Burning', 0)),
    );
    const currentPlayer2 = new Character(
      'Dorian',
      CharacterClass.archer,
      5,
      new Spell('Fire Arrow', new FireArrow(0, 7), new FireArrowEffect('Burning', 0)),
    );

    currentPlayers.push(new ArrayItem(currentPlayer1, 0));
    currentPlayers.push(new ArrayItem(currentPlayer2, 1));

    const utility = new GameUtility();

    const winner = utility.findWinner(currentPlayers);

    expect(winner.name).toBe('Dorian');
  });
  it('Should result in null if there are no winners', () => {
    const currentPlayers: ArrayItem[] = [];

    const currentPlayer1 = new Character(
      'Lilian',
      CharacterClass.archer,
      0,
      new Spell('Fire Arrow', new FireArrow(0, 7), new FireArrowEffect('Burning', 0)),
    );
    const currentPlayer2 = new Character(
      'Dorian',
      CharacterClass.archer,
      -5,
      new Spell('Fire Arrow', new FireArrow(0, 7), new FireArrowEffect('Burning', 0)),
    );

    currentPlayers.push(new ArrayItem(currentPlayer1, 0));
    currentPlayers.push(new ArrayItem(currentPlayer2, 1));

    const utility = new GameUtility();

    const winner = utility.findWinner(currentPlayers);

    expect(winner).toBe(null);
  });
});

describe('Testing chooseAnAttackType method', () => {
  it('Should result in attack if there is no spell available', () => {
    const utility = new GameUtility();

    const attackType = utility.chooseAnAttackType(false, randomIntFromInterval);

    expect(attackType).toBe(AttackType.attack);
  });
  it('Should result in spell if there is spell available', () => {
    const utility = new GameUtility();

    const fakeRandomNumGenerator: () => number = function alwaysReturnTwo() {
      return 2;
    };

    const attackType = utility.chooseAnAttackType(true, fakeRandomNumGenerator);

    expect(attackType).toBe(AttackType.spell);
  });
  it('Should result in attack if spell is available', () => {
    const utility = new GameUtility();

    const fakeRandomNumGenerator: () => number = function alwaysReturnTen() {
      return 10;
    };

    const attackType = utility.chooseAnAttackType(true, fakeRandomNumGenerator);

    expect(attackType).toBe(AttackType.attack);
  });
});
