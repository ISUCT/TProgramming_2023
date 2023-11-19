import { Player } from "./player";

export class Mage extends Player {
    // Удар ближнего боя
    attack(): number {
        return Math.floor(this.strong / 2);
    }

    // Заворожение
    opponentMissesTurn: boolean = false;
    ability1() {
        this.abilityName = "Заворожение";
        this.opponentMissesTurn = true;
        this.opponentMissedTurns += 1
        return 0;
    }

}