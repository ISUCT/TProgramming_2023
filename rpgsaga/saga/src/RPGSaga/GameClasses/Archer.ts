import { Player } from "../Player";


export class Archer extends Player {
    constructor(health: number, strength: number, name: string) {
        super(health, strength, name, "Огненная стрела", 10);
    }

    public toString(): string {
        return "(Лучник) " + this.name;
    }

    public ability(): [string, number] {
        console.log(this.abilityLeft);
        if (this.abilityLeft > 0) {
            this.abilityLeft--;
            // this.debuffs = 'Огненная стрела'
            return [this.abilityName, 5.0]; // название абилки и урон от неё
        } else {
            return this.attack();
        }
    }
}

