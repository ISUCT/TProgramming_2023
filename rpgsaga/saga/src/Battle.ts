import { Strike } from "./Ability/Strike/Strike";
import { Knight } from "./Player/Classes/Knight";
import { RandomBool, RandomNumber } from "./Random";

export class Battle{
    Player0: Knight;
    Player1: Knight;
    constructor(Player0: Knight, Player1: Knight){
        this.Player0 = Player0;
        this.Player1 = Player1;
    }
    start(){
        let opponents = [this.Player0, this.Player1]
        let currentPlayer = RandomBool();
        console.log(this.Player0);
        console.log(this.Player1);
        while(opponents[0].hp>0 && opponents[1].hp>0){
            let currentAbility = new Strike("Удар", 0, 1, true);
            currentPlayer = currentPlayer === 0 ? 1 : 0;
            opponents[currentPlayer].takeAbilityOnSelf(currentAbility.type, currentAbility.power);
            console.log("");
            console.log(this.Player0);
            console.log(this.Player1);
        }
    }
} 
//сделать генератор, переделать баттл под генератор