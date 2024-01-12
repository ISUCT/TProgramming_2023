import {Player} from "./Player";
import {spec} from "node:test/reporters";

export class Paladin extends Player{
    constructor(name: string, specialization = 'Паладин',  AbilityName: string = "Кара") {
        super(name, specialization, AbilityName);
}
    attackDamage(player: Player, strength = this.Strength){
        player.Health -= strength;
        return strength;
    }
    abilityDamage (player: Player): number{
        this.attackDamage(player, this.Strength * 1.3)
        return Math.floor(this.Strength * 1.3)
    }
}
export class Sorcerer extends Player{
    constructor(name: string, specialization: string = 'Волшебник', AbilityName: string = "Ледяной туман") {
        super(name, specialization, AbilityName);
    }

    attackDamage(player: Player, strength = this.Strength): number{
        player.Health -= strength;
        return strength;
    }
    abilityDamage(player: Player): number{
    player.Stun = true;
    return 0;
    }
}
export class Ranger extends Player {
    constructor(name: string, specialization: string = 'Следопыт', AbilityName: string = "Град огненных стрел") {
        super(name, specialization, AbilityName);
    }
    attackDamage(player: Player, strength = this.Strength): number{
        player.Health -= strength;
        return  strength;
    }
    abilityDamage(player: Player): number{
        if (this.AbilityUsed){
            this.attackDamage(player);
            return this.attackDamage(player);
        }else{
            this.AbilityUsed = true;
            player.BurnDamage = 3;
            return 0;
        }
    }
}
