import { Ability } from "../Ability/Ability";
import { Player } from "../Player/Player";

export class Logger{
    private Player0: Player;
    private Player1: Player;
    constructor(p0:Player, p1:Player){
        this.Player0 = p0;
        this.Player1 = p1;
    }
    startBattle(){
        console.log("Opponents of this duel is (", this.Player0.constructor.name, ")", this.Player0.name, "and (", this.Player1.constructor.name, ")", this.Player1.name);
    }
    endBattle(winner: Player){
        console.log("Winner of the duel is (", Player.constructor.name, ")", Player.name);
    }
    attack(currentPlayerId: number, currentAbility: Ability){
        switch(currentPlayerId){
            case 0:{
                console.log("(", this.Player1.constructor.name, ")", "[", this.Player1.effect.name, "]", "{ HP:", this.Player1.hp, "}", this.Player1.name, "uses #", currentAbility.name, "# on (", this.Player0.constructor.name, ")", "[", this.Player0.effect.name, "]", "{ HP:", this.Player0.hp, "}", this.Player0.name, "and causes", currentAbility.power*this.Player1.dmg, "damage with effect *", currentAbility.effect.name, "*");
                break;
            }
            case 1:{
                console.log("(", this.Player0.constructor.name, ")", "[", this.Player0.effect.name, "]", "{ HP:", this.Player0.hp, "}", this.Player0.name, "uses #", currentAbility.name, "# on (", this.Player1.constructor.name, ")", "[", this.Player1.effect.name, "]", "{ HP:", this.Player1.hp, "}", this.Player1.name, "and causes", currentAbility.power*this.Player0.dmg, "damage with effect *", currentAbility.effect.name, "*");
                break;
            }
        }
    }
}