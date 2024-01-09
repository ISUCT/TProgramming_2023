import { Ability, abilityType } from "../../Ability/Ability";
import { Freeze,  None } from "../../Ability/Effect";
import { Player } from "../Player";

export class Knight extends Player{
    abilities = [    
        new Ability("Swing", abilityType.ATTACK, 2, None),
        new Ability("IceSwing", abilityType.ATTACK, 3, Freeze),
    ];
}

export class Archer extends Player{
    abilities = [    
        new Ability("StoneArrow", abilityType.ATTACK, 3, None),
        new Ability("IceArrow", abilityType.ATTACK, 2, Freeze)
    ];
}

export class Mage extends Player{
    abilities = [
        new Ability("IceBall", abilityType.ATTACK, 1, Freeze),
        new Ability("StoneBall", abilityType.ATTACK, 4, None),
    ];
}