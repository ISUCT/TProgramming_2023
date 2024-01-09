import { Player } from "../Player/Player";
import { Names, deleteName } from "../Sources/Names";
import { Battle } from "./Battle";
import { PlayerGenerator } from "./PlayerGenerator";

export function createGridOfParticipants(numberOfParticipants: number) {
    let playerGrid = [];
    for (let i = 0; i < numberOfParticipants; i++) {
        let Participant = PlayerGenerator.generatePlayer(Names);
        playerGrid.push(Participant);
        deleteName(Participant.name);
    }
    return playerGrid;
}

export function shuffleGridOfParticipants(array: Array<Player>): Array<Player> {
    let currentIndex = array.length;
    let randomIndex: number;
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

export class Tournament {
    startingArray: Player[];
    constructor(StartingArray: Player[]) {
        this.startingArray = StartingArray;
    }
    private runTournament(players: Array<Player>): Player {
        switch (players.length) {
            case 1:
                return players[0];
            case 2:
                return this.runTournament([new Battle(players[0], players[1]).start()]);
            default: {
                const newCycle: Array<Player> = [];
                for (let i = 0; i < players.length; i += 2) {
                    newCycle.push(new Battle(players[i], players[i + 1]).start());
                }
                return this.runTournament(newCycle);
            }
        }
    }
    startTournament(){
        return this.runTournament(this.startingArray);
    }
}