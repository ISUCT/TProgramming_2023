export class Cat {
    name: string;
    color: string;
    private aGe: number;

    feedCount = 0;
    petting = 0;

    constructor(name: string, age: number, color: string, public weight?: number) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.weight = this.weight > 0.5 && this.weight <= 10 ? this.weight : 3.5;
    }

    meow(): string {
        return 'Мяу';
    }

    information(): string {
        return `name: ${this.name}  age: ${this.age} color:${this.color}`;
    }

    feed(): string {
        if (this.feedCount <= 3) {
            this.weight += 0.1;
            this.feedCount += 1;
            return `${this.name} съела ${this.feedCount} порцию(ций) и её вес увеличился на ${this.feedCount * 0.1}`;
        } else {
            return `${this.name} наелась`;
        }
    }

    poop(): string {
        if (this.feedCount >= 2) {
            this.weight -= this.feedCount * 0.1;
            return `${this.name} освободила свой пещевод на ${this.feedCount * 0.1} `;
            this.feedCount = 0;
        } else {
            return `${this.name} еще не объелась`;
        }
    }

    purring(): string {
        this.petting += 1;
        if (this.petting % 3 !== 0) {
            return `${this.name} мурчит`
        } else {
            return `${this.name} делает кусь`
        }
    }

    set age(age: number) {
        this.aGe = age >= 0 && age < 21 ? age : this.aGe ?? 3;
    }

    get age(): number {
        return this.aGe;
    }
}