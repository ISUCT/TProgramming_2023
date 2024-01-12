import {Player} from "./Player";
import {randomInt} from "./Player";
import {Paladin, Ranger, Sorcerer} from "./Classes";
import {Logger} from "./Logger";

export class Game{
    players: Player[] = []
    private playersNames = ["Чилчак", "Туовен", "Сонот", "Ролвод", "Зогрид"]
    playersCount: number;
    constructor(playersCount: number) {
        this.playersCount = playersCount;
        for(let i = 0; i < playersCount; i++){
            const playerType = randomInt(0, 2)
            const playerName = randomInt(0, 4)
            let player: Player
            switch (playerType) {
                case 0:
                    player = new Paladin(this.playersNames[playerName])
                    break
                case 1:
                    player = new Ranger(this.playersNames[playerName])
                    break
                case 2:
                    player = new Sorcerer(this.playersNames[playerName])
            }

            // @ts-ignore
            this.players.push(player)
        }

    }
    battle(p1: Player, p2: Player): any {
        let turn = false; //сходил ли первый игрок
        while (p1.Health > 0 && p2.Health > 0) {
            const attackingPlayer = turn ? p2 : p1;
            const defendingPlayer = turn ? p1 : p2;
            // if (!turn) {
            //     const attackingPlayer = p1;
            //     const defendingPlayer = p2;
            // } else {
            //     const attackingPlayer = p2;
            //     const defendingPlayer = p1;
            // }
            if (attackingPlayer.Stun){
                attackingPlayer.Stun = false;
            }else{
                if (randomInt(0,1)){
                    if (attackingPlayer.AbilityUsed){
                        let damage = attackingPlayer.abilityDamage(defendingPlayer);
                        damage += defendingPlayer.BurnDamage;
                        Logger.abilityDamage(attackingPlayer, defendingPlayer, damage);
                        if (defendingPlayer.Health <= 0){
                            Logger.death(defendingPlayer);
                            return attackingPlayer;
                        }
                    }else{
                        let damage = attackingPlayer.attackDamage(defendingPlayer)
                        Logger.attackDamage(attackingPlayer, defendingPlayer, damage);
                        if(defendingPlayer.Health <= 0){
                            Logger.death(defendingPlayer);
                            return attackingPlayer;
                        }
                    }
                }else{
                    let damage = attackingPlayer.attackDamage(defendingPlayer);
                    if (defendingPlayer.BurnDamage){
                        damage += defendingPlayer.BurnDamage;
                    }
                    Logger.attackDamage(attackingPlayer, defendingPlayer, damage);
                    if(defendingPlayer.Health <= 0){
                        Logger.death(defendingPlayer);
                        return attackingPlayer;
                    }
                }
            }
        }
        turn = !turn;
    }
    start(){
        let count = 1;
        let shuffledPlayers = shuffle(this.players);
        while(shuffledPlayers.length > 1){
            const winner: Player[] = [];
            console.log(`Битва ${count}`);
            for(let i = 0; i < shuffledPlayers.length - 1; i += 2){
                shuffledPlayers[i].Health = shuffledPlayers[i].BasicHealth;
                shuffledPlayers[i + 1].Health = shuffledPlayers[i + 1].BasicHealth;
                winner.push(this.battle(shuffledPlayers[i], shuffledPlayers[i + 1]))
            }
            shuffledPlayers = winner;
            count += 1;
        }
    }
}

export function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}



