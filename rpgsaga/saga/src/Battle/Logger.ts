import { Player } from "../Player/Player";

export class Logger{
    private Player0: Player;
    private Player1: Player;
    constructor(p0, p1){
        this.Player0 = p0;
        this.Player1 = p1;
    }
    startBattle(){
        console.log("Opponents of this battle is (", this.Player0.constructor.name, ")", this.Player0.name, "and (", this.Player1.constructor.name, ")", this.Player1.name);
    }
    attack(currentPlayerId: number, nameOfCurrentAbility: string, powerOfCurrentAbility: number){
        switch(currentPlayerId){
            case 0:{
                console.log("(", this.Player1.constructor.name, ")", this.Player1.name, "uses", nameOfCurrentAbility, "on (", this.Player0.constructor.name, ")", this.Player0.name, "and causes", powerOfCurrentAbility, "damage.");
            }
            case 1:{
                console.log("(", this.Player0.constructor.name, ")", this.Player0.name, "uses", nameOfCurrentAbility, "on (", this.Player1.constructor.name, ")", this.Player1.name, "and causes", powerOfCurrentAbility, "damage.");
            }
        }
    }
}