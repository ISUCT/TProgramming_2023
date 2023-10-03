import { Character } from './character';
import { Logger } from './logger';
import { MathHelper } from './mathHelper';
import * as readline from 'readline';

class Game {
    private numPlayers: number = 0;
    private players: Character[] = [];

    constructor() {
        Logger.startGameMessage();

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });


        rl.question('', (charactersCount) => {
            if (Number(charactersCount)) {
                if (!MathHelper.isOdd(Number(charactersCount))) {
                    this.setNumberPlayers(Number(charactersCount));
                    this.generatePlayers();
                    this.startNewRound(1, this.players);
                } else {
                    Logger.numberIsOddErrorMessage();
                }
            } else{
                Logger.isNotANumberMessage();
            }

            rl.close();
        });
    }

    setNumberPlayers(numPlayers: number) {
        if (!MathHelper.isOdd(numPlayers)) {
            this.numPlayers = numPlayers;
            // console.log(this.numPlayers);
        }
        else {
        }
    }

    generatePlayers() {
        for (let i = 0; i < this.numPlayers; i++) {
            let character = new Character();
            this.players.push(character);
        }
    }

    startNewRound(currentRound: number, characters:Character[]) {
        let winners: Character[] = [];
        let loosers: Character[] = [];

        let isWholeNumber = require('is-whole-number');

        if(!isWholeNumber(characters.length / 2)){
                winners.push(characters[0]);
                characters.splice(0, 1);
        }

        let firstCharacterIndex: number = 0;
        let secondCharacterIndex: number = 1;

        for (let i = 0; i < characters.length / 2; i++) {
            let fightResult: [Character, Character] = this.startFight(firstCharacterIndex, secondCharacterIndex, characters);
            Logger.endFightMessage(fightResult[0], fightResult[1]);

            winners.push(fightResult[0]);
            loosers.push(fightResult[1]);

            firstCharacterIndex += 2;
            secondCharacterIndex += 2;
        }

        Logger.roundResultMessage(winners, loosers, currentRound);

        if(winners.length > 1){
            this.startNewRound(currentRound+1, winners);
        } else{
            Logger.EndGame(winners[0]);
        }

    }

    startFight(firstCharacterNumber: number, secondCharacterNumber: number, characters: Character[]): [Character, Character] {
        let firstCharacter: Character = characters[firstCharacterNumber];
        let secondCharacter: Character = characters[secondCharacterNumber];

        Logger.battleAnnouncement(firstCharacter, secondCharacter);

        let firstCharacterInitiative: number = 0;
        let secondCharacterInitiative: number = 0;

        while (firstCharacterInitiative == secondCharacterInitiative) {
            firstCharacterInitiative = firstCharacter.checkInitiative();
            secondCharacterInitiative = secondCharacter.checkInitiative();
        }

        if (firstCharacterInitiative > secondCharacterInitiative) {
            Logger.initiativeMessage(firstCharacterInitiative, secondCharacterInitiative, firstCharacter, secondCharacter);
            return this.proccessFight([firstCharacter, secondCharacter]);
        }
        else {
            Logger.initiativeMessage(secondCharacterInitiative, firstCharacterInitiative, secondCharacter, firstCharacter);
            return this.proccessFight([secondCharacter, firstCharacter]);
        }
    }

    proccessFight(characters: Character[]): [Character, Character] {
        let looser: Character = null;
        let winner: Character = null;
        while (true) {
            for (let index = 0; index < characters.length; index++) {
                let attackingCharacter = characters[index];

                let defendingCharacterIndex = index + 1;
                if (defendingCharacterIndex >= characters.length) {
                    defendingCharacterIndex = 0;
                }

                let defendingCharacter = characters[defendingCharacterIndex];

                this.attack(attackingCharacter, defendingCharacter)

                if (defendingCharacter.health <= 0) {
                    looser = characters[defendingCharacterIndex];
                    winner = attackingCharacter;
                    break;
                }
            }

            if (looser != null)
                break;
        }
        return [winner, looser]
    }

    attack(enemy1: Character, enemy2: Character) {
        Logger.startAttackMessage(enemy1);

        let hitStrength = enemy1.checkHit();
        let dodgeStrength = enemy2.checkDodge();

        if (hitStrength > dodgeStrength) {
            enemy2.takeDamage(hitStrength - dodgeStrength);
            Logger.successAttackMessage(enemy1, hitStrength, enemy2, dodgeStrength, hitStrength - dodgeStrength)
        }
        else {
            Logger.failedAttackMessage(enemy1, hitStrength, enemy2, dodgeStrength)
        }
    }
}

const game = new Game();