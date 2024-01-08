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
        let opponents = [this.Player0, this.Player1]
        let currentPlayerId = randomBool();
        let winner: Player;
        let LoggerBattle = new Logger(this.Player0, this.Player1)
        LoggerBattle.startBattle();
        while(opponents[0].hp>0 && opponents[1].hp>0){
            let currentAbility = opponents[currentPlayerId].abilities[randomNumber(0, opponents[currentPlayerId].abilities.length-1)];
            currentPlayerId = currentPlayerId === 0 ? 1 : 0;
            opponents[currentPlayerId].takeAbilityOnSelf(currentAbility.type, currentAbility.power);
            LoggerBattle.attack(currentPlayerId, currentAbility.name, currentAbility.power);
        }
        winner = this.Player0.hp === 0 ? this.Player1 : this.Player0;
        return winner;
    }
}