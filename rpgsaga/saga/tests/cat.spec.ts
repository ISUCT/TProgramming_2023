import { Cat } from '../src/cat';

describe('Testing cat constructor', () => {
    it('Cat should be created', () => {
        const Vasiliy = new Cat("Vasiliy", 3, "black", true);
        expect(Vasiliy.name).toEqual("Vasiliy");
        expect(Vasiliy.age).toEqual(3);
        expect(Vasiliy.color).toEqual("black");
        expect(Vasiliy.characteristic).toEqual(true);
    });
    it('Cat year lower than bound', () => {
        const Vasiliy = new Cat("Vasiliy", -5, "black", true);
        expect(Vasiliy.name).toEqual("Vasiliy");
        expect(Vasiliy.age).toEqual(3);
        expect(Vasiliy.color).toEqual("black");
        expect(Vasiliy.characteristic).toEqual(true);
    });
    it('Cat year higher than bound', () => {
        const Vasiliy = new Cat("Vasiliy", 21, "black", true);
        expect(Vasiliy.name).toEqual("Vasiliy");
        expect(Vasiliy.age).toEqual(3);
        expect(Vasiliy.color).toEqual("black");
        expect(Vasiliy.characteristic).toEqual(true);
    });
});

describe('Testing cat methods', () => {
    it('Cat age set valid value', () => {
        const Vasiliy = new Cat("Vasiliy", 10, "black", true);
        Vasiliy.age = 5;
        expect(Vasiliy.age).toEqual(5);
    });
    it('Cat age lower than valid value', () => {
        const Vasiliy = new Cat("Vasiliy", 15, "black", true);
        Vasiliy.age = -5;
        expect(Vasiliy.age).toEqual(15);
    });
    it('Cat age higher than valid value', () => {
        const Vasiliy = new Cat("Vasiliy", 15, "black", true);
        Vasiliy.age = 30;
        expect(Vasiliy.age).toEqual(15);
    });
});
