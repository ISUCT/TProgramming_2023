import { Player } from "./player";

export class Archer extends Player {
    // Удар ближнего боя
    attack(): number {
        return Math.floor(this.strong / 1.3);
    }

    // Огненные стрелы
    opponentIsOnFire = false;
    ability1() {
        this.abilityName = "Огненные стрелы";
        this.opponentIsOnFire = true;
        return 0;
    }
}