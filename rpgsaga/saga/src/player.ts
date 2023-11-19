export class Player {
    health: number;
    strong: number;
    name: string;
    abilityName: string;

    opponentMissedTurns: number = 0;
    opponentIsOnFire: boolean;

    constructor(health: number, strong: number, name: string) {
        this.health = health;
        this.strong = strong;
        this.name = name;
    }

    playerState(playerIsOnFire: boolean, playerMissesTurn: boolean, player0Class: string, player0Name: string, player1Class: string, player1Name: string, ability: number) {
        if (playerIsOnFire) {
            console.log(`(${player0Class}) ${player0Name} горит и теряет 2 единицы жизни`);
            this.health -= 2;
        }
        if (playerMissesTurn) {
            console.log(`(${player0Class}) ${player0Name} пропускает ход`);
            playerMissesTurn = false;
            return 0;
        }
        if (ability == 0 || this.opponentIsOnFire || this.opponentMissedTurns == 3) { // Если randomAbility равна 0 или Охотник уже использовал "Огненные стрелы" или Маг  
            console.log(`(${player0Class}) ${player0Name} наносит урон ${this.attack()} противнику (${player1Class}) ${player1Name}`)
            return this.attack();
        } else if (ability == 1) {
            const abil1 = this.ability1();
            if (abil1 != 0) {
                console.log(`(${player0Class}) ${player0Name} использует (${this.abilityName}) и наносит урон ${abil1} противнику (${player1Class}) ${player1Name}`);
            } else {
                console.log(`(${player0Class}) ${player0Name} использует (${this.abilityName})`);
            }
            return abil1;
        }
    }

    // Удар ближнего боя
    attack(): number {
        return this.strong;
    }

    ability1() {
        return 0;
    }
}