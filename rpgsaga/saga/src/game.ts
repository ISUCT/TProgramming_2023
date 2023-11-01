import { Character } from "./character";
import { getRandomCharacterFactory } from "./characterFactory";

class Game
{
    private players: Character[] = [];
    private currentPlayers: Character[] = [];
    private newPlayerIndex: number = 2;
    private _quantityOfPlayers: number;

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
    }

    public initialize()
    {
        for (let i = 1; i <= this.quantityOfPlayers; ++i)
        {
            var factory = getRandomCharacterFactory();
            this.players.push(factory.createCharacter());
        }
    }
}