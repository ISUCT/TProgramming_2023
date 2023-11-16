import { Character } from "./character";
import { CharacterClass } from "./characterClasses";
import { CharacterFactory } from "./characterFactory";
import { getRandomEnumValue } from "./randomMath";

class Game
{
    private players: Character[] = [];
    private currentPlayers: Character[] = [];
    private newPlayerIndex: number;
    private quantityOfPlayers: number;

    constructor(quantityOfPlayers: number)
    {
        this.quantityOfPlayers = quantityOfPlayers;
        this.newPlayerIndex = 2;

        let factory: CharacterFactory;
        for (let i = 1; i <= this.quantityOfPlayers; ++i)
        {
            let character = factory.getCharacter(getRandomEnumValue(CharacterClass));
            this.players.push(character);
        }

        this.currentPlayers = [this.players[0], this.players[1]];
    }
}