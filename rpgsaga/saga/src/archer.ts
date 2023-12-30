import { Player } from "./player";

export class Archer extends Player {
    className = "Лучник";

    // Удар ближнего боя
    attack(): number {
        return Math.floor(this.strong / 1.3);
    }

    // Огненные стрелы
    ability1() {
        this.abilityName = "Огненные стрелы";
        return 0;
    }
}