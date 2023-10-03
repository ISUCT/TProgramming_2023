import { Character } from "../character"

export class Knight extends Character {
    
    _minHealth = 70;
    _maxHealth = 100;
    _minStrength = 70;
    _maxStrength = 100;
    _minDexterity = 50;
    _maxDexterity = 70;

    className: string = "Рыцарь";

    constructor() {
        super();
    }
}