import { Player } from "./player";

export class Mage extends Player {
    className = "Маг";

    // Удар ближнего боя
    attack(): number {
        return Math.floor(this.strong / 2);
    }

    // Заворожение
    ability1() {
        this.abilityName = "Заворожение";
        return 0;
    }

}