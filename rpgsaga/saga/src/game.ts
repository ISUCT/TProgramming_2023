import { Player } from './player';
import { Logger } from './logger';
import { Warrior } from './warrior';
import { Mage } from './mage';
import { Archer } from './archer';
import { Berserk } from './berserk';
import { Brawler } from './brawler';
import { Paladin } from './paladin';

export class Game {
  public static generatePlayers(count: number, namesArr: string[]) {
    const players = [];
    for (let i = 0; i < count; i++) {
      // цикл создания бойцов

      // базовые характеристики персонажа

      const nameNumber = randomNumber(0, namesArr.length - 1);
      const playerHP = randomNumber(Player.healthMin, Player.healthMax);
      const playerDMG = randomNumber(Player.damageMin, Player.damageMax);
      const playerArmor = 0;

      // генерация персонажа и выдача рандомного класса
      // базовые характеристики могут варьироваться у разных классов

      switch (randomNumber(0, 4)) {
        case 0:
          players[i] = new Warrior(playerHP + 5, playerDMG, playerArmor + 2, namesArr[nameNumber]);
          break;
        case 1:
          players[i] = new Mage(playerHP, playerDMG, playerArmor + 1, namesArr[nameNumber]);
          break;
        case 2:
          players[i] = new Archer(playerHP - 3, playerDMG + 2, playerArmor + 1, namesArr[nameNumber]);
          break;
        case 3:
          players[i] = new Berserk(playerHP + 10, playerDMG, playerArmor, namesArr[nameNumber]);
          break;
        case 4:
          players[i] = new Paladin(playerHP, playerDMG - 3, playerArmor + 2, namesArr[nameNumber]);
          break;
        case 5:
          players[i] = new Brawler(playerHP, playerDMG, playerArmor, namesArr[nameNumber]);
          break;
      }
      namesArr.splice(nameNumber, 1); // удаляем использованное имя
    }
    return players;
  }

  public static async startGame(brawlers: Player[]) {
    Logger.playersLog(brawlers); // отображение участников турнира
    Logger.divideLog();
    let round = 0;

    while (brawlers.length > 1) {
      // цикл раундов
      // await delay(time)
      shufflePlayers(brawlers);
      round++;
      Logger.roundLog(round);
      for (let i = 0; i < brawlers.length; i++) {
        // цикл боев (в одном раунде может быть несколько боев)
        const brawler1 = brawlers[i];
        const brawler2 = brawlers[i + 1];
        // await delay(time)
        Logger.brawlLog(brawler1, brawler2);
        while (brawler1.isAlive && brawler2.isAlive) {
          // цикл одного боя
          // await delay(time)
          brawler1.chooseAction(brawler2); // ход 1го игрока
          if (brawler1.isAlive && brawler2.isAlive) {
            // await delay(time)
            brawler2.chooseAction(brawler1); // ход 2го игрока
          }
        }
        brawler1.isAlive ? brawlers.splice(i + 1, 1) : brawlers.splice(i, 1); // удаление проигравшего из списка участников
        brawlers[i].winnerRegenerate(); // победитель готовится к следующему бою
      }
    }
  }
}

const time = 2000;

export const randomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

const shufflePlayers = (array: Player[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
