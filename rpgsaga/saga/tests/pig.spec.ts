import { Pig } from '../src/pig';

describe('Testing pig constructor', () => {
    it('Pig should be created', () => {
      const pig = new Pig(500, "DIV69");
      expect(pig.mass).toEqual(500);
      expect(pig.identificator).toEqual("DIV69");
    });
    it('Pig with invalid mass', () => {
        expect(() => new Pig(10, "RIP38")).toThrow(Error("Pig's mass should be 50 kg or bigger."));
    });
});

describe ('Testing pig setters and getters', () => {
    it('Normal mass', () => {
        const pig = new Pig(50, "ID823");
        expect(pig.mass).toEqual(50);
    })
    it('Normal mass (float)', () => {
        const pig = new Pig(50.283, "ID823");
        expect(pig.mass).toEqual(50.283);
    })
    it('Less than normal mass', () => {
        expect(() => new Pig(25, "ID823")).toThrow(Error("Pig's mass should be 50 kg or bigger."));
    })
    it('Negative mass', () => {
        expect(() => new Pig(-5, "ID823")).toThrow(Error("Pig's mass should be 50 kg or bigger."));
    })
});

describe('Testing pig methods', () => {
    it('Should give right amount of сало', () => {
        const pig = new Pig(100, "ADB69");
        expect(pig.getSalo()).toEqual(20);
    });
    it('Should be able to return float values', () => {
        const pig = new Pig(101, "ADB69");
        expect(pig.getSalo()).toBeCloseTo(20.2);
    });
    it('Should be able to work with float values', () => {
        const pig = new Pig(100.5, "ADB69");
        expect(pig.getSalo()).toBeCloseTo(20.1);
    });
});