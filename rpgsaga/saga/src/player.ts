import { characterClass } from "./spellsGenerator";

abstract class Character
{
    public name: string;
    public characterClass: string;

    public healthPoints: number = 100;
    public strength: number = 5;

    constructor(name: string)
    {
        this.name = name;
    }
}

class Knight extends Character
{
    constructor(name: string)
    { 
        super(name);
        this.characterClass = characterClass.knight;
    }
}

class Archer extends Character
{
    constructor(name: string)
    { 
        super(name);
        this.characterClass = characterClass.archer;
    }
}

class Mage extends Character
{
    constructor(name: string)
    { 
        super(name);
        this.characterClass = characterClass.mage;
    }
}