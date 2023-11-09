import { Animal } from "./animal";
import { Mode } from "./animal";
export class chinchilla extends Animal {
    private _age: number;
    constructor(year: number, color: string) {
        super(color);
        this.year = year;
    };
    set year(year: number) {
        this._age = year > 0 && year < 20 ? year : 0;
    };

    get year(): number {
        return this._age;
    }

    sound(): string {
        return `Фыр-фыр`;
    };
    toString(): string {
        return "Это Шиншила";
    };
};