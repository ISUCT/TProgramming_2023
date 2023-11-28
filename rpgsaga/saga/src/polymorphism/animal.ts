export enum Mode {
    ALIVE = "Alive",
    DIED = "Died"
};
export abstract class Animal {
    _mode: Mode = Mode.ALIVE;
    _color: string;
    _healthpool: number = 100;
    constructor(color: string) {
        this._color = color;
    };
    sound(): string {
        return "Мы не можем понять, кто это"
    }
};

