import { Character } from "./character";

export enum CharacterClass
{
    mage = "mage",
    knight = "knight",
    archer = "archer",
}

export class Knight extends Character
{
    static readonly minHealthPoints: number = 110;
    static readonly maxHealthPoints: number = 120;
    
    constructor(name: string, healthPoints: number)
    {
        super(name, CharacterClass.knight, healthPoints);
    }
}


export class Archer extends Character
{
    static readonly minHealthPoints: number = 90;
    static readonly maxHealthPoints: number = 110;

    constructor(name: string, healthPoints: number)
    {
        super(name, CharacterClass.archer, healthPoints);
    }
}

export class Mage extends Character
{
    static readonly minHealthPoints: number = 80;
    static readonly maxHealthPoints: number = 90;

    constructor(name: string, healthPoints: number)
    { 
        super(name, CharacterClass.mage, healthPoints);
    }
}
