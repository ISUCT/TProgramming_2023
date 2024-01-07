import { Player } from "../Player";

export class Knight extends Player {
    constructor(health: number, strength: number, name: string) {
        super(health, strength, name, "Удар возмездия", 3);
    }

    public toString(): string {
        return "(Рыцарь) " + this.name;
    }

    public ability(): [string, number] {
        // console.log(this.abilityLeft);
        if (this.abilityLeft > 0) {
            this.abilityLeft--;
            return [this.abilityName, Math.floor(this.strength * 1.3)];
        } else {
            return this.attack();
        }
    }
}

