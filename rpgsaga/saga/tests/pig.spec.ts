import { Pig, plantNames, carnivoreNames } from '../src/pig';

describe('Testing pig constructor', () => {
    it('Pig should be created', () => {
      const pig = new Pig(500, "DIV69");
      expect(pig.mass).toEqual(500);
      expect(pig.identificator).toEqual("DIV69");
    });
    it('Pig with empty identificator should be created', () => {
        const pig = new Pig(500);
        expect(pig.mass).toEqual(500);
        expect(pig.identificator).toEqual("Unknown identificator");
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

describe('Testing getSalo method', () => {
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

describe('Testing Pig methods', () => {
    it('Should return corrent text representation of Pig class', () => {
        const pig = new Pig(100, "ADB69");
        expect(pig.toString()).toEqual(`The pig id is ${pig.identificator} and it's mass is ${pig.mass}`);
    });
    it('Should return corrent sound', () => {
        const pig = new Pig(100, "ADG283");
        expect(pig.makeSound()).toEqual("Oink-oink");
    });
    it('Should return corrent message about eating plant', () => {
        const pig = new Pig(100, "ADJ820");
        expect(pig.eatPlant(plantNames.cabbage)).toEqual(`Pig "${pig.identificator}" is peacefully eating a cabbage.`);
    });
    it('Should successfully run away from carnivore', () => {
        const pig = new Pig(100, "ADJ820");
        expect(pig.runFromCarnivore(carnivoreNames.wolf)).toEqual(`Pig "${pig.identificator}" successfully ran away from a wolf`);
    });
});