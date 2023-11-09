export enum Mode {
    ALIVE = "Alive",
    DIED = "Died"
}
export class Mouse {
    _healthpool: number = 100;
    private _age: number;
    _color: string;
    _mode: Mode = Mode.ALIVE;
    constructor(year: number, color: string) {
        this.year = year;
        this._color = color;
    };
    set year(year: number) {
        this._age = year > 0 && year < 4 ? year : 0
    }
    get year(): number {
        return this._age
    }
    hit(): string {
        this._healthpool -= 10
        if (this._healthpool > 0) {
            return `Вы ударили мышь, теперь у неё ${this._healthpool} здоровья`
        } else {
            this._mode = Mode.DIED
            return "Мышь сдохла"
        }
    }
    heal(): string {
        this._healthpool = 100
        return `Теперь здоровье мыши в норме и составляет 100 единиц`
    }
    paint(color): string {
        if (this._color == color) {
            return `Зачем вы красите ${this._color} в ${color}`
        } else {
            this._color = color
            return `Теперь мышь имеет ${color} цвет`
        }
    }

}
