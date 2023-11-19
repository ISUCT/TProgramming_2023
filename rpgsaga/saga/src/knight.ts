import { Player } from "./player";

export class Knight extends Player {
    // Удар возмездия
    ability1() {
        this.abilityName = "Удар возмездия";
        return this.strong + Math.floor(this.strong * 30 / 100);
    }
}