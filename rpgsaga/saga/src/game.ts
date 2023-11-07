import { Character } from "./character";
import { CharacterClass } from "./characterClasses";
import { CharacterFactory } from "./characterFactory";
import { randomEnumValue } from "./randomMath";

class Game
{
    private players: Character[] = [];
    private currentPlayers: Character[] = [];
    private newPlayerIndex: number;
    private _quantityOfPlayers: number;
    private generation: CharacterFactory;

    set quantityOfPlayers(value: number)
    {
        if (value >= 2)
        {
            this._quantityOfPlayers = value;
        }
    }

    constructor(quantityOfPlayers: number)
    {
        this.quantityOfPlayers = quantityOfPlayers;
        this.newPlayerIndex = 2;

        for (let i = 1; i <= this.quantityOfPlayers; ++i)
        {
            this.generation.set(randomEnumValue(CharacterClass));
            this.players.push(this.generation.factory.createCharacter());
        }

        this.currentPlayers = [this.players[0], this.players[1]];
    }
}