import { CharacterClass } from "./characterClasses";
import { randomIntFromInterval } from "./randomMath";

export abstract class Character
{
    public name: string;
    public class: string;

    public effects: Effect[] = [];
    
    static readonly minHealthPoints: number;
    static readonly maxHealthPoints: number;

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

    public receiveDamage(points: number)
    {
        this.healthPoints -= points;
    }
}

/*
 ===================================================
  Пока не знаю, как имплементировать систему абилок и т. д., так что этот код
  висит мёртвым грузом.
 ===================================================
*/

export abstract class Effect
{
    protected target: Character;
    protected points: number;
    protected duration: number;

    constructor(target: Character, points: number, duration: number)
    {
        this.target = target;
        this.points = points;
        this.duration = duration;
    }

    // Проверка на duration в apply
    apply(): void
    {
        this.duration -= 1;
    }
}
