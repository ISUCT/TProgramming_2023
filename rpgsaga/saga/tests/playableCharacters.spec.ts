import { Archer, Knight, Mage } from "../src/playableCharacters";

describe('Testing characters constructor', () => {
    it('Knight should be created', () => {
      const first = new Knight('Luke', 30, 10);
      expect(first.name).toEqual('Luke');
      expect(first.hp).toEqual(30);
      expect(first.strenght).toEqual(10);
      expect(first.specialAttackName).toEqual('Super Strike');
    });
    it('Mage should be created', () => {
        const first = new Mage('Tom', 15, 15);
        expect(first.name).toEqual('Tom');
        expect(first.hp).toEqual(15);
        expect(first.strenght).toEqual(15);
        expect(first.specialAttackName).toEqual('Stun');
    });
    it('Archer should be created', () => {
        const first = new Archer('Ann', 20, 10);
        expect(first.name).toEqual('Ann');
        expect(first.hp).toEqual(20);
        expect(first.strenght).toEqual(10);
        expect(first.isFireUsed).toEqual(false);
        expect(first.specialAttackName).toEqual('Fire Arrows');
    });
  });

  describe('Testing characters methods', () => {
    it('Knight use Super Strike', () => {
      const first = new Knight('Luke', 30, 10);
      first.specialAttack();
      expect(first.strenght).toEqual(13);
    });
    it('Knight is burning', () => {
        const first = new Knight('Luke', 30, 10);
        first.burning(first);
        expect(first.step).toEqual(1);
        expect(first.hp).toEqual(28);
    });
    it('Knight attack', () => {
        const first = new Knight('Luke', 30, 10);
        const second = new Archer('Ann', 20, 10);
        first.attack(second);
        expect(second.hp).toEqual(10);
    });

    it('Mage use Stun', () => {
        const first = new Mage('Tom', 15, 15);
        const second = new Knight('Luke', 30, 10);
        first.specialAttack(second);
        expect(second.stun).toEqual(true);
    });
    it('Mage is burning', () => {
        const first = new Mage('Tom', 15, 15);
        first.burning(first);
        expect(first.step).toEqual(0);
    });
    it('Mage attack', () => {
        const first = new Mage('Tom', 15, 15);
        const second = new Archer('Ann', 20, 10);
        first.attack(second);
        expect(second.hp).toEqual(5);
    });

    it('Archer use Fire Arrows', () => {
        const first = new Archer('Ann', 20, 10);
        const second = new Knight('Luke', 30, 10);
        first.specialAttack(second);
        expect(second.step).toEqual(1);
    });
    it('Archer is burning', () => {
        const first = new Archer('Ann', 20, 10);
        first.burning(first);
        expect(first.step).toEqual(1);
        expect(first.hp).toEqual(18);
    });
    it('Archer attack', () => {
        const first = new Archer('Ann', 20, 10);
        const second = new Mage('Tom', 15, 15);
        first.attack(second);
        expect(second.hp).toEqual(5);
    });
  });