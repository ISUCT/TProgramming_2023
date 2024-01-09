import { Animal } from "./animal";
import { Mode } from "./animal";
export class Fox extends Animal {
    private _age: number;
    constructor(year: number, color: string) {
        super(color);
        this.year = year;
    };
    set year(year: number) {
        this._age = year > 0 && year < 25 ? year : 0;
    };

    get year(): number {
        return this._age;
    };

    sound(): string {
        return `Миу`;
    };

    toString(): string {
        return "Это Лиса";
    };
    
    hit(): string {
        this._healthpool -= 10;
        if (this._healthpool > 0) {
            return `Вы ударили лису, теперь у неё ${this._healthpool} здоровья`
        } else {
            this._healthpool = 100;
            return "У лисы осталось 0 здоровья, однако боги исцелили её";
        };
    };
};