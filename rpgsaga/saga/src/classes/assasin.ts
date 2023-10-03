import { Character } from "../character"

export class Assasin extends Character {
    
    _minHealth = 50;
    _maxHealth = 80;
    _minStrength = 50;
    _maxStrength = 80;
    _minDexterity = 80;
    _maxDexterity = 100;

    className: string = "Ассасин";

    constructor() {
        super();
    }
}