export enum CharacterClass
{
    mage = "mage",
    knight = "knight",
    archer = "archer",
}

// Function to generate a random value from [min; max]
function randomIntFromInterval(min: number, max: number): number
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export abstract class Character
{
    public name: string;
    public class: string;
    
    public healthPoints: number;
    public strength: number = 5;

    constructor(name: string, characterClass: CharacterClass, healthPoints: number)
    {
        this.name = name;
        this.class = characterClass;
        this.healthPoints = healthPoints;
    }

    attack(target: Character, conditionToMiss = Game.hasAttackMissed()): string
    {
        if (!conditionToMiss)
        {
            target.healthPoints -= this.strength;
            return `${this.name} (${this.class}) нанёс ${this.strength} урона ${target.name} (${target.class})!`;
        }
        else
        {
            return `${this.name} (${this.class}) пытался атаковать ${target.name} (${target.class}), но промахнулся!`;
        }
    }
}

class Knight extends Character
{
    constructor(name: string)
    {
        var hp: number = randomIntFromInterval(110, 120);
        super(name, CharacterClass.knight, hp);
    }
}

class Archer extends Character
{
    constructor(name: string)
    {
        var hp: number = randomIntFromInterval(90, 110);
        super(name, CharacterClass.archer, hp);
    }
}

class Mage extends Character
{
    constructor(name: string)
    { 
        var hp: number = randomIntFromInterval(80, 90);
        super(name, CharacterClass.mage, hp);
    }
}

class Game
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
