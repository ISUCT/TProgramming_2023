import { names } from './banks/names';
import { stats } from './banks/stats';
import { Player } from './player';
import { createPlayer } from './playerFactory';

export class PlayerGenerator {
  private static nameBank = names;
  private static statsBank = stats;

  public static createPlayers(knights: number, archers: number, mages: number): Player[] {
    const result = [];
    for (let i = 0; i < knights; i++) {
      const name = PlayerGenerator.nameBank[Math.round(Math.random() * PlayerGenerator.nameBank.length)];
      const hp = randomIntFromInterval(
        PlayerGenerator.statsBank.knight.hpClamp[0],
        PlayerGenerator.statsBank.knight.hpClamp[1],
      );
      const strength = randomIntFromInterval(
        PlayerGenerator.statsBank.knight.stClamp[0],
        PlayerGenerator.statsBank.knight.stClamp[1],
      );
      result.push(createPlayer(name, hp, strength, 'knight'));
    }
    for (let i = 0; i < archers; i++) {
      const name = PlayerGenerator.nameBank[Math.round(Math.random() * PlayerGenerator.nameBank.length)];
      const hp = randomIntFromInterval(
        PlayerGenerator.statsBank.archer.hpClamp[0],
        PlayerGenerator.statsBank.archer.hpClamp[1],
      );
      const strength = randomIntFromInterval(
        PlayerGenerator.statsBank.archer.stClamp[0],
        PlayerGenerator.statsBank.archer.stClamp[1],
      );
      result.push(createPlayer(name, hp, strength, 'knight'));
    }
    for (let i = 0; i < mages; i++) {
      const name = PlayerGenerator.nameBank[Math.round(Math.random() * PlayerGenerator.nameBank.length)];
      const hp = randomIntFromInterval(
        PlayerGenerator.statsBank.mage.hpClamp[0],
        PlayerGenerator.statsBank.mage.hpClamp[1],
      );
      const strength = randomIntFromInterval(
        PlayerGenerator.statsBank.mage.stClamp[0],
        PlayerGenerator.statsBank.mage.stClamp[1],
      );
      result.push(createPlayer(name, hp, strength, 'knight'));
    }
    return result;
  }
}

function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
