import { Ability, abilityType } from "../../Ability/Ability";
import { Player } from "../Player";

export class Knight extends Player{
    abilities = [    
        new Ability("Strike", abilityType.ATTACK, 1)
    ];
}

export class Archer extends Player{
    abilities = [    
        new Ability("Shot", abilityType.ATTACK, 1)
    ];
}

export class Mage extends Player{
    abilities = [
        new Ability("Freeze", abilityType.ATTACK, 0),
        new Ability("StoneBullet", abilityType.ATTACK, 1)
    ];
}