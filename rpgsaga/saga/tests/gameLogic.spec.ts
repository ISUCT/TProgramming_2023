import { GameLogic } from "../src/gameLogic";
import { Archer, Knight, Mage } from "../src/playableCharacters";

describe('Testing create players', () => {
    it('Check number of created characters', () => {
      const first = new GameLogic();
      first.createPlayers(6);
      expect(first.createdPlayers.length).toEqual(6);
    });
  });

  describe('Testing results of the fight', () => {
    it('Check number of characters', () => {
      const first = new GameLogic();
      first.createPlayers(6);
      first.fight(first.createdPlayers[0], first.createdPlayers[1], 0, 1);
      expect(first.createdPlayers.length).toEqual(5);
    });
  });

  describe('Testing default attack', () => {
    it('First Character use default attack', () => {
      const game = new GameLogic();
      const first = new Knight('Luke', 30, 10);
      const second = new Archer('Ann', 20, 10);
      game.defaultAttack(first, second, 1)
      expect(second.hp).toEqual(10);
    });
    it('Second Character use default attack', () => {
        const game = new GameLogic();
        const first = new Knight('Luke', 30, 10);
        const second = new Archer('Ann', 20, 10);
        game.defaultAttack(first, second, 2)
        expect(first.hp).toEqual(20);
      });
  });

  describe('Testing used special attack', () => {
    it('Knight use special attack', () => {
      const game = new GameLogic();
      const first = new Knight('Luke', 30, 10);
      const second = new Archer('Ann', 20, 10);
      game.useSpecialAttack(first, second, 1)
      expect(second.hp).toEqual(7);
    });
    it('Mage use special attack', () => {
        const game = new GameLogic();
        const first = new Mage('Tom', 15, 15);
        const second = new Archer('Ann', 20, 10);
        game.useSpecialAttack(first, second, 1)
        expect(second.stun).toEqual(true);
        expect(second.hp).toEqual(20);
    });
    it('Archer use special attack', () => {
        const game = new GameLogic();
        const first = new Mage('Tom', 15, 15);
        const second = new Archer('Ann', 20, 10);
        game.useSpecialAttack(first, second, 2)
        expect(second.isFireUsed).toEqual(true);
        expect(first.hp).toEqual(15);
    });
  });