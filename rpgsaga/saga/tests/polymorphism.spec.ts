
import { Animal } from "../src/polymorphism/animal";
import { Mode } from "../src/polymorphism/animal";
import { Fox } from "../src/polymorphism/fox";
import { chinchilla } from "../src/polymorphism/chinchilla";
import { generateKeyPair } from "crypto";

describe('Testing Animals constructor', () => {
    it('Animals should be created with incorrect age', () => {
        const Evgenia = new chinchilla(200, "Белая");
        const Karina = new Fox(200, "Чёрная");
        expect(Evgenia.year).toEqual(0)
        expect(Karina.year).toEqual(0)
        expect(Evgenia._color).toEqual("Белая")
        expect(Karina._color).toEqual("Чёрная")
    });

    it("Animals should be created", () => {
        const Evgenia = new chinchilla(19, "Белая");
        const Karina = new Fox(19, "Чёрная");
        expect(Evgenia.year).toEqual(19)
        expect(Karina.year).toEqual(19)
    });
});

describe('Testing Animals methods', () => {
    it("Method toString", () => {
        const Evgenia = new chinchilla(19, "Белая");
        const Karina = new Fox(19, "Чёрная");
        expect(`${Evgenia}`).toEqual("Это Шиншила");
        expect(`${Karina}`).toEqual("Это Лиса");
    });
    it("Method sound", () => {
        const Evgenia = new chinchilla(19, "Белая");
        const Karina = new Fox(19, "Чёрная");
        expect(Karina.sound()).toEqual("Миу");
        expect(Evgenia.sound()).toEqual("Фыр-фыр");
    });
    it("Method color with same color and not", () => {
    })
});