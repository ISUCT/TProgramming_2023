export abstract class Player {
    health: number;
    strong: number;
    name: string;
    className: string;
    abilityName: string;
    debuffs: any;

    constructor(health: number, strong: number, name: string) {
        this.health = health;
        this.strong = strong;
        this.name = name;
        this.debuffs = {
            playerIsOnFire: false,
            playerMissesTurn: false,
        };
    }

    // Удар ближнего боя
    attack(): number {
        return this.strong;
    }

    abstract ability1();
}