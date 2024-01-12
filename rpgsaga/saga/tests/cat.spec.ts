import { Cat } from '../src/cat';

describe('Testing Cat constructor', () => {
    it('Cat should be created', () => {
        const first = new Cat(8, "Кеша", "Шотландский вислоухий", 7);
        expect(first.age).toEqual(8);
        expect(first.name).toEqual("Кеша");
        expect(first.breed).toEqual("Шотландский вислоухий");
        expect(first.weight).toEqual(7);
    });
    it('Cat with empty name', () => {
        const first = new Cat(8, "", "Шотландский вислоухий", 7 );
        expect(first.age).toEqual(8);
        expect(first.name).toBeUndefined();
        expect(first.breed).toEqual("Шотландский вислоухий");
        expect(first.weight).toEqual(7);
    });
        it('Cat age lower than bound', () => {
        const first = new Cat(0, "", "Шотландский вислоухий", 7 );
        expect(first.age).toEqual(1);
        expect(first.name).toBeUndefined();
        expect(first.breed).toEqual("Шотландский вислоухий");
        expect(first.weight).toEqual(7);
    });
    it('Cat age higher than bound', () => {
        const first = new Cat(65, "", "Шотландский вислоухий", 7 );
        expect(first.age).toEqual(29);
        expect(first.name).toBeUndefined();
        expect(first.breed).toEqual("Шотландский вислоухий");
        expect(first.weight).toEqual(7);
    });
});
