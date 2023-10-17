import { CharacterClass } from "./characterClasses";
import { randomIntFromInterval } from "./randomMath";

export abstract class Character
{
    public name: string;
    public class: string;
    
    private _healthPoints: number;
    private _strength: number = 5;

    get strength()
    {
        return this._strength;
    }

    get healthPoints()
    {
        return this._healthPoints;
    }

    set healthPoints(value: number)
    {
        this._healthPoints = value;
    }

    constructor(name: string, characterClass: CharacterClass, healthPoints: number)
    {
        this.name = name;
        this.class = characterClass;
        this.healthPoints = healthPoints;
    }
}

export abstract class Ability
{
    public name: string;
    // public activationFunction: Function;

    public execute(user: Character, target: Character)
    {
        
    }
}

class Checker
{
    /* 
        Функция, которая проверяет, промазала ли обычная атака или нет.
        Шанс промаха: 33%.
    */
    static hasAttackMissed(): boolean
    {
        var randomValue: number = randomIntFromInterval(1, 10);
        return (randomValue <= 3) ? true : false;
    }
}
