import { abilityType } from "../Ability/Ability";
import { Strike } from "../Ability/Strike/Strike";
import { Player } from "../Player/Player";
import { randomBool } from "../Sources/Random";
import { PlayerGenerator } from "./PlayerGenerator";

export class Battle{
    private Player0: Player;
    private Player1: Player;
    constructor(player0: Player, player1: Player){
        this.Player0 = player0;
        this.Player1 = player1;
    }
    start(){
        let opponents = [this.Player0, this.Player1]
        let currentPlayer = randomBool();
        let winner;
        console.log(this.Player0);
        console.log(this.Player1);
        while(opponents[0].hp>0 && opponents[1].hp>0){
            let currentAbility = new Strike("Удар", abilityType.ATTACK, 1, true);
            currentPlayer = currentPlayer === 0 ? 1 : 0;
            opponents[currentPlayer].takeAbilityOnSelf(currentAbility.type, currentAbility.power);
            console.log("");
            console.log(this.Player0);
            console.log(this.Player1);
        }
        winner = this.Player0.hp === 0 ? this.Player1 : this.Player0;
        return winner;
    }
} 
//сделать генератор, переделать баттл под генератор