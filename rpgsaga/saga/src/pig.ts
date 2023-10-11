// Список растений, овощей и фруктов, которые ест PlantEater
export enum plantNames
{
    carrot = "carrot",
    grass = "grass",
    apple = "apple",
    pear = "pear",
    cucumber = "cucumber",
    cabbage = "cabbage",
}

// Список хищников, которые могут охотиться на Herbivore
export enum carnivoreNames
{
    wolf = "wolf",
    bear = "bear",
}

abstract class Animal
{
    protected _mass: number;
    public identificator: string; // код животного на бирке, прикрепленной на ухо

    /*
        В Typescript (и в JS) нет возможности сделать перегрузку конструкторов,
        поэтому сделала лишь один с опциональными параметрами.
    */
    constructor(animalName ?: string)
    {
        if (animalName)
        {
            this.identificator = animalName;
        }
        else
        {
            this.identificator = "Unknown identificator";
        }
    }

    abstract makeSound(): string;
}

interface PlantEater
{
    eatPlant(plantName: plantNames): string;
}

interface Herbivore
{
    runFromCarnivore(carnivoreName: carnivoreNames): string;
}

export class Pig extends Animal implements PlantEater, Herbivore
{ 
    constructor(mass: number, identificator ?: string)
    {
        super(identificator);
        this.mass = mass;
    }
 
    get mass(): number
    {
        return this._mass;
    }
 
    set mass(value: number)
    {
        if (value >= 50)
        {
            this._mass = value;
        }
        else
        {
            throw new Error("Pig's mass should be 50 kg or bigger.");
        }
    }
 
    getSalo(): number
    {
        // Допускается, что количество получаемого со свиньи сала равно 20% от её массы тела
        return this._mass * 0.2;
    }

    // Текстовое представление класса
    public toString(): string
    {
        return `The pig id is ${this.identificator} and it's mass is ${this.mass}`;
    }

    makeSound(): string
    {
        return "Oink-oink";
    }

    eatPlant(plantName: plantNames): string
    {
        return `Pig "${this.identificator}" is peacefully eating a ${plantName}.`
    }

    runFromCarnivore(carnivoreName: carnivoreNames): string
    {
        return `Pig "${this.identificator}" successfully ran away from a ${carnivoreName}`;
    }
}