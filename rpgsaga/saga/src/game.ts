import { Knight } from "./knight";
import { Mage } from "./mage";
import { Archer } from "./archer";

export class Game {
    private names: string[] = ["Джоли Бьорн", "Донат Троллебой", "Дуротан", "Забытый", "Зул'джин", "Зулухед Пришибленный", "Иллидан Ярость Бури", "Ирод", "Изера", "К'тун", "Каргат Острорук", "Кел'Тузед", "Кель'тас Солнечный скиталец", "Кенарий", "Кэрн Кровавое Копыто", "Кил'джеден", "Килрогг Мёртвый Глаз", "Корагг", "Кориалстраз", "Король Ллан Ринн I", "Король Теренас Менетил II", "Ксавий", "Кси'ри", "Леди Вайш"];
    private numberGames: number;
    private customCharacters: any[];
    players: any[];
    private missedTurns: number = 0;

    constructor(numberGames: number, customCharacters = []) {
        this.numberGames = numberGames > 0 ? numberGames : 1;
        this.customCharacters = customCharacters;
    }

    private getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private createCharacter(className: string, health: number, strong: number, name: string) {
        let clss;
        if (className == "Knight") {
            clss = Knight;
        } else if (className == "Mage") {
            clss = Mage;
        } else if (className == "Archer") {
            clss = Archer;
        }
        return new clss(health, strong, name);
    }

    private charactersCreation(numberPlayers = 2) {
        let players = [];
        const classes = ["Knight", "Mage", "Archer"];
        if (this.customCharacters.length) {
            for (let i = 0; i < numberPlayers; i++) {
                players[i] = this.createCharacter(this.customCharacters[i][0], this.customCharacters[i][1], this.customCharacters[i][2], this.customCharacters[i][3]);
            }
        } else {
            let randomClass: number;
            let characterStats: { health: number; strong: number; name: string; };
            for (let i = 0; i < numberPlayers; i++) {
                randomClass = Math.floor(Math.random() * classes.length);
                characterStats = {
                    health: this.getRandomInt(80, 110),
                    strong: this.getRandomInt(35, 55),
                    name: this.names[Math.floor(Math.random() * this.names.length)]
                };
                players[i] = this.createCharacter(classes[randomClass], characterStats.health, characterStats.strong, characterStats.name);
            }
        }
        return players;
    }

    private fight(p0: number, p1: number) {
        const log = new LoggingGame(this.players);
        const randomAbility = this.getRandomInt(0, 1);
        if (this.players[p0].debuffs.playerIsOnFire) {
            log.playerIsOnFire(p0);
            this.players[p0].health -= 2;
        }
        if (this.players[p0].debuffs.playerMissesTurn) {
            log.playerMissesTurn(p0)
            this.missedTurns += 1;
            this.players[p0].debuffs.playerMissesTurn = false;
            return;
        }
        if (randomAbility == 0 || this.players[p1].debuffs.playerIsOnFire || this.missedTurns == 3) { // Если randomAbility равна 0 или Охотник уже использовал "Огненные стрелы" или Маг
            const damage = this.players[p0].attack();
            log.attack(p0, p1, damage)
            this.players[p1].health -= damage;
            return;
        } else {
            const damage = this.players[p0].ability1();
            log.useAbility(p0, p1, this.players[p0].abilityName, damage);
            if (this.players[p0].className == "Рыцарь") {
                this.players[p1].health -= damage;
            } else if (this.players[p0].className == "Маг") {
                this.players[p1].debuffs.playerMissesTurn = true;
            } else if (this.players[p0].className == "Лучник") {
                this.players[p1].debuffs.playerIsOnFire = true
            }
            return;
        }
    }

    play() {
        let turn: number;
        for (let i = 0; i < this.numberGames; i++) {
            // Создание персонажей
            this.players = this.charactersCreation();
            const log = new LoggingGame(this.players);

            // Бой
            // 0 - первый игрок, 1 - второй игрок
            turn = this.getRandomInt(0, 1);
            log.startGame(turn);
            while (this.players[0].health > 0 && this.players[1].health > 0) {
                let randomAbility = this.getRandomInt(0, 1);
                if (turn === 0) { // Ходит первый игрок
                    this.fight(0, 1);
                    turn = 1;
                } else { // Ходит второй игрок
                    this.fight(1, 0);
                    turn = 0;
                }
            }
            log.gameOver();
        }
    }
}

export class LoggingGame {
    players;

    constructor(players) {
        this.players = players;
    }

    startGame(turn: number) {
        console.log(`(${this.players[0].className}) ${this.players[0].name} [Здоровье: ${this.players[0].health}, Сила: ${this.players[0].strong}] <<VS>> (${this.players[1].className}) ${this.players[1].name} [Здоровье: ${this.players[1].health}, Сила: ${this.players[1].strong}]`);
        console.log(turn == 0 ? "Первым ходит ИГРОК 1" : "Первым ходит ИГРОК 2");
    }

    playerIsOnFire(playerNum: number) {
        console.log(`(${this.players[playerNum].className}) ${this.players[playerNum].name} горит и теряет 2 единицы жизни`);
    }

    playerMissesTurn(playerNum: number) {
        console.log(`(${this.players[playerNum].className}) ${this.players[playerNum].name} пропускает ход`);
    }

    attack(p0: number, p1: number, damage: number) {
        console.log(`(${this.players[p0].className}) ${this.players[p0].name} наносит урон ${damage} противнику (${this.players[p1].className}) ${this.players[p1].name}`);
    }

    useAbility(p0: number, p1: number, abilityName: string, damage: number) {
        if (damage != 0) {
            console.log(`(${this.players[p0].className}) ${this.players[p0].name} использует (${abilityName}) и наносит урон ${damage} противнику (${this.players[p1].className}) ${this.players[p1].name}`);
        } else {
            console.log(`(${this.players[p0].className}) ${this.players[p0].name} использует (${abilityName})`);
        }
    }

    gameOver() {
        if (this.players[1].health <= 0) {
            console.log(`(${this.players[1].className}) ${this.players[1].name} погибает`);
        } else {
            console.log(`(${this.players[0].className}) ${this.players[0].name} погибает`);
        }
        console.log();
    }
}