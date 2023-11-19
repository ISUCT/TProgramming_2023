import { Knight } from "./knight";
import { Mage } from "./mage";
import { Archer } from "./archer";

export class Game {
    names: string[] = ["Джоли Бьорн", "Донат Троллебой", "Дуротан", "Забытый", "Зул'джин", "Зулухед Пришибленный", "Иллидан Ярость Бури", "Ирод", "Изера", "К'тун", "Каргат Острорук", "Кел'Тузед", "Кель'тас Солнечный скиталец", "Кенарий", "Кэрн Кровавое Копыто", "Кил'джеден", "Килрогг Мёртвый Глаз", "Корагг", "Кориалстраз", "Король Ллан Ринн I", "Король Теренас Менетил II", "Ксавий", "Кси'ри", "Леди Вайш"];
    numberPlayers: number;

    constructor(numberPlayers: number) {
        this.numberPlayers = numberPlayers;
    }

    private getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    play() {
        const classes = ["Рыцарь", "Маг", "Лучник"];
        let players = [];
        let playerClass = [];
        let turn: number;
        let characterStats: [number, number, string];

        for (let i = 0; i < this.numberPlayers; i++) {
            // Создание игроков
            for (let j = 0; j < this.numberPlayers - 1; j++) {
                playerClass.push(classes[Math.floor(Math.random() * classes.length)]);
                characterStats = [this.getRandomInt(80, 110), this.getRandomInt(35, 55), this.names[Math.floor(Math.random() * this.names.length)]]
                if (playerClass[j] == "Рыцарь") {
                    players[j] = new Knight(characterStats[0], characterStats[1], characterStats[2]);
                } else if (playerClass[j] == "Маг") {
                    players[j] = new Mage(characterStats[0], characterStats[1], characterStats[2]);
                } else if (playerClass[j] == "Лучник") {
                    players[j] = new Archer(characterStats[0], characterStats[1], characterStats[2]);
                }
            }

            // Бой
            // 0 - первый игрок, 1 - второй игрок
            turn = this.getRandomInt(0, 1);
            console.log(`(${playerClass[0]}) ${players[0].name} [Здоровье: ${players[0].health}, Сила: ${players[0].strong}] <<VS>> (${playerClass[1]}) ${players[1].name} [Здоровье: ${players[1].health}, Сила: ${players[1].strong}]`);
            console.log(turn == 0 ? "Первым ходит ИГРОК 1" : "Первым ходит ИГРОК 2");
            while (players[0].health > 0 && players[1].health > 0) {
                let randomAbility = this.getRandomInt(0, 1);
                if (turn == 0) { // Ходит первый игрок
                    players[1].health -= players[0].playerState(players[1].opponentIsOnFire, players[1].opponentMissesTurn, playerClass[0], players[0].name, playerClass[1], players[1].name, randomAbility);
                    players[1].opponentMissesTurn = false;
                    turn = 1;
                } else { // Ходит второй игрок
                    players[0].health -= players[1].playerState(players[0].opponentIsOnFire, players[0].opponentMissesTurn, playerClass[1], players[1].name, playerClass[0], players[0].name, randomAbility);
                    players[0].opponentMissesTurn = false;
                    turn = 0;
                }
            }
            if (players[1].health < 0) {
                console.log(`(${playerClass[1]}) ${players[1].name} погибает`)
            } else {
                console.log(`(${playerClass[0]}) ${players[0].name} погибает`)
            }
            console.log()
        }
    }
}