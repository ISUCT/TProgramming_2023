import { Mage, Knight, Archer } from "./characterClasses";
import { Character } from "./character";
import { randomIntFromInterval, getRandomArrayIndex } from "./randomMath";

abstract class CharacterGenerator
{
    protected nameList: string[];
    protected surnameList: string[];

    protected getRandomNameAndSurname(): string
    {
        var name: string = this.nameList[getRandomArrayIndex(this.nameList.length)];
        var surname: string = this.surnameList[getRandomArrayIndex(this.surnameList.length)];

        return name + " " + surname;
    }

    public abstract createCharacter(): Character;
}

class KnightGenerator extends CharacterGenerator
{
    protected nameList: string[] = [
        "Seraphina", "Elara", "Thorian", "Elysia", "Isolde", "Rowena",
        "Reynald", "Galahad", "Serilda", "Evelina", "Elysia", "Lysander",
    ];
    protected surnameList: string[] = [
        "Stormblade", "the Brave", "Swiftstrike", "Darkhammer", "Moonshadow", "Firebrand",
        "Frostheart", "Sunblade", "Ravenshadow", "Silverthorn", "Lightbringer", "Thunderclap",
    ];

    public createCharacter(): Character
    {
        return new Knight(this.getRandomNameAndSurname(), randomIntFromInterval(Knight.minHealthPoints, Knight.maxHealthPoints));
    }
}

class MageGenerator extends CharacterGenerator
{
    protected nameList: string[] = [
        "Thalindra", "Malachar", "Isolde", "Elowen", "Sylas", "Lirael",
        "Alaric", "Seraphina", "Cedric", "Vivienne", "Galadriel", "Orion",
    ];
    protected surnameList: string[] = [
        "Spellweaver", "Arcaneborn", "Starfall", "Frostfire", "Shadowcaster", "Stormcaller",
        "Emberflame", "Moonshaper", "Runebinder", "Frostwhisper", "Voidseer", "Flameforge",
    ];

    public createCharacter(): Character
    {
        return new Mage(this.getRandomNameAndSurname(), randomIntFromInterval(Mage.minHealthPoints, Mage.maxHealthPoints)); 
    }
}

class ArcherGenerator extends CharacterGenerator
{
    protected nameList: string[] = [
        "Lareth", "Theron", "Theron", "Lyria", "Galen", "Elysia",
        "Caelan", "Talia", "Sylas", "Merida", "Thalindra", "Naelan",
    ];
    protected surnameList: string[] = [
        "Windstrider", "Hawkeye", "Swiftshot", "Longbow", "Arrowheart", "Fletchertongue",
        "Shadowquiver", "Ironwood", "Nightshade", "Stormrider", "Moonshadow", "Firesight",
    ];

    public createCharacter(): Character
    {
        return new Archer(this.getRandomNameAndSurname(), randomIntFromInterval(Archer.minHealthPoints, Archer.maxHealthPoints)); 
    }
}

const factories: CharacterGenerator[] = [new KnightGenerator(), new MageGenerator(), new ArcherGenerator()];

export function getRandomCharacterFactory(): CharacterGenerator
{
    return factories[getRandomArrayIndex(CharacterGenerator.length)];
}