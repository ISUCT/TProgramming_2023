import { Character } from "./character";

export enum CharacterClass
{
    mage = "mage",
    knight = "knight",
    archer = "archer",
}

// HP: 110-120
export class Knight extends Character
{
    constructor(name: string, healthPoints: number)
    {
        super(name, CharacterClass.knight, healthPoints);
    }
}

// HP: 90-110
export class Archer extends Character
{
    constructor(name: string, healthPoints: number)
    {
        super(name, CharacterClass.archer, healthPoints);
    }
}

// HP: 80-90
export class Mage extends Character
{
    constructor(name: string, healthPoints: number)
    { 
        super(name, CharacterClass.mage, healthPoints);
    }
}
