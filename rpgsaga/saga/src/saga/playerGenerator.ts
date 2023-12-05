import { names } from './banks/names';
import { stats } from './banks/stats';
import { Player } from './player';
import { createPlayer } from './playerFactory';

export class PlayerGenerator {
  private nameBank = names;
  private statsBank = stats;

  public createPlayers(knights: number, archers: number, mages: number): Player[] {
    const result = [];
    for (let i = 0; i < knights; i++) {
      const name = this.nameBank[Math.abs(Math.random() * this.nameBank.length)];
      const hp = randomIntFromInterval(this.statsBank.knight.hpClamp[0], this.statsBank.knight.hpClamp[1]);
      const strength = randomIntFromInterval(this.statsBank.knight.stClamp[0], this.statsBank.knight.stClamp[1]);
      result.push(createPlayer(name, hp, strength, 'knight'));
    }
    for (let i = 0; i < archers; i++) {
      const name = this.nameBank[Math.abs(Math.random() * this.nameBank.length)];
      const hp = randomIntFromInterval(this.statsBank.archer.hpClamp[0], this.statsBank.archer.hpClamp[1]);
      const strength = randomIntFromInterval(this.statsBank.archer.stClamp[0], this.statsBank.archer.stClamp[1]);
      result.push(createPlayer(name, hp, strength, 'knight'));
    }
    for (let i = 0; i < mages; i++) {
      const name = this.nameBank[Math.abs(Math.random() * this.nameBank.length)];
      const hp = randomIntFromInterval(this.statsBank.mage.hpClamp[0], this.statsBank.mage.hpClamp[1]);
      const strength = randomIntFromInterval(this.statsBank.mage.stClamp[0], this.statsBank.mage.stClamp[1]);
      result.push(createPlayer(name, hp, strength, 'knight'));
    }
    return result;
  }
}

function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
