import { Mage, Knight, Archer, CharacterClass } from "./characterClasses";
import { Character } from "./character";
import { randomIntFromInterval } from "./randomMath";

class CharacterFactory
{
    static create(characterClass: CharacterClass): Character
    {
        var character: Character;
        var hpValue: Number;

        if (characterClass == CharacterClass.mage)
        {
            // character = new Mage(...)
        }
        else if (characterClass == CharacterClass.archer)
        {
            //
        }
        else if (CharacterClass.knight)
        {
            //
        }

        return character;
    }
}