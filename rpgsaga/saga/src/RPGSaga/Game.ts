import { Archer } from './GameClasses/Archer';
import { Knight } from './GameClasses/Knight';
import { Mage } from './GameClasses/Mage';
import { Logger } from './Logger';
import { Player } from './Player';
import { Random } from './Random';

export class Game {
    static Start(): void {
        const p_number: number = 4;
        const playerList: Player[] = Game.PLayerListGenerator(p_number);
        Game.PlayGame(playerList);
    }

    private static PlayGame(playerList: Player[]): void {
        for (let i = 1; playerList.length !== 1; i++) {
            Logger.WriteRound(i);
            Game.PlayRound(playerList);
        }

        Logger.WriteWinner(playerList[0]);
    }

    private static PlayRound(playerList: Player[]): void {
        for (let i = 0; i < playerList.length / 2; i++) {
            const fightMembers: [Player, Player] = [playerList[i * 2], playerList[i * 2 + 1]];
            Logger.WriteFight(fightMembers);
            playerList[i * 2] = Game.PlayFight(fightMembers);
        }

        for (let i = 1; i < playerList.length; i++) {
            playerList.splice(i, 1);
        }
    }

    private static PlayFight(fightMembers: [Player, Player]): Player {
        for (let i = 0; true; i++) {
            let playerStatus = fightMembers[i % 2].checkStatus(); // 0 либо 1 , т.е он вывод массив с 2 значениями: наложенный статус и урон от этого статуса
            //   console.log(playerStatus, fightMembers[i % 2]);
            Logger.WriteStatusAbility(fightMembers[i % 2], playerStatus);
            let checkDeath: boolean = fightMembers[i % 2].getDamage(playerStatus[1]); // получаем статсут игрока жив/мертв оттналоженного статуса
            if (checkDeath) {
                // выполняется в случае True
                Logger.WriteDeath(fightMembers[i % 2]);
                fightMembers[i % 2].update();
                fightMembers[(i + 1) % 2].update();
                return fightMembers[(i + 1) % 2];
            }

            if (playerStatus[0] === 'Заворожение') { // то же самое для огненной стрелы?
                continue;
            }

            const playerAction: [string, number] = Game.PlayerDoAction(fightMembers[i % 2]); // игрок выбирает между абилкой и обычной атакой
            Logger.WriteAction(fightMembers[i % 2], fightMembers[(i + 1) % 2], playerAction); // выводится действие первого игрока по второму
            checkDeath = fightMembers[(i + 1) % 2].getDamage(playerAction[1]); // получаем статсут игрока жив/мертв от полученного урона
            //   playerAction[0] !== "" ? fightMembers[(i + 1) % 2].getStatus(playerAction[0]) : playerStatus;
            fightMembers[(i + 1) % 2].getDebuff(playerAction[0]);
            if (checkDeath) {
                Logger.WriteDeath(fightMembers[(i + 1) % 2]);
                fightMembers[i % 2].update();
                fightMembers[(i + 1) % 2].update();
                return fightMembers[i % 2];
            }
        }
    }

    private static PlayerDoAction(inputP: Player): [string, number] {
        const rnd: number = Random(0, 2);
        switch (rnd) {
            case 0:
                return inputP.ability();
            default:
                return inputP.attack();
        }
    }


    private static PLayerListGenerator(count: number): Player[] {
        let playerList: Player[] = [];
        let names = ['Itachi', 'Sasuke', 'Naruto', 'Kakashi', 'Jiraiya', 'Orochimaru', 'Gaara', 'Shikamaru', 'Neji'];
        let types_of_members = ['Wizard', 'Archer', 'Knight'];

        for (let i = 0; i < count; i++) {
            const health: number = Random(100, 300);
            const strength: number = Random(5, 50);
            const rnd: number = Random(0, names.length - 1);
            const member = types_of_members[Random(0, 2)];
            switch (member) {
                case 'Wizard':
                    playerList.push(new Mage(health, strength, names[rnd]));
                    break;
                case 'Archer':
                    playerList.push(new Archer(health, strength, names[rnd]));
                    break;
                case 'Knight':
                    playerList.push(new Knight(health, strength, names[rnd]));
                    break;
            }
        }

        return playerList;
    }
}


// установить количество использовние после применения огненной стрелы,т.е сколько она будет действовать еще ходов