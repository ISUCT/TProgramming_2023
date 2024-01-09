import { Player } from "../Player/Player";
import { randomBool, randomNumber } from "../Sources/Random";
import { Logger } from "./Logger";

export class Battle{
    private Player0: Player;
    private Player1: Player;
    constructor(player0: Player, player1: Player){
        this.Player0 = player0;
        this.Player1 = player1;
    }
    start(){
        let winner: Player;
        let opponents = [this.Player0, this.Player1];
        let currentPlayerId = randomBool();
        let LoggerBattle = new Logger(this.Player0, this.Player1);
        LoggerBattle.startBattle();
        while(opponents[0].hp>0 && opponents[1].hp>0){
            let currentAbility = opponents[currentPlayerId].abilities[randomNumber(0, opponents[currentPlayerId].abilities.length-1)];
            let attackerId = currentPlayerId;
            currentPlayerId = currentPlayerId === 0 ? 1 : 0;
            LoggerBattle.attack(currentPlayerId, currentAbility);
            opponents[currentPlayerId].takeAbilityOnSelf(currentAbility, opponents[attackerId].dmg);
            if(opponents[currentPlayerId].isStunned() && opponents[currentPlayerId].effect.duration>0){
                opponents[currentPlayerId].effect.duration--;
                currentPlayerId = currentPlayerId === 0 ? 1 : 0;
            }
        }
        winner = this.Player0.hp <= 0 ? this.Player1 : this.Player0;
        return winner;
    }
}