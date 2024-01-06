import { randomInt } from "./utils";

export abstract class Player {
    full_health: number;
    health: number;
    strength: number;
    name: string;
    stunned = false;
    tickDamage = 0;
    type: string;
    castName: string;
    abilityAbsense = false;

    constructor(n: string, type: string, castName: string) {
        this.full_health = randomInt(50, 100);
        this.strength = randomInt(5, 20);
        this.name = n;
        this.type = type;
        this.castName = castName
        this.health = this.full_health
    }

    abstract dealDmg(player: Player): number;

    abstract ability(player: Player): number;
}
