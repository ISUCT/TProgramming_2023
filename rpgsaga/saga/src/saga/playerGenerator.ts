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
      result.push(this.generate('knight'));
    }
    for (let i = 0; i < archers; i++) {
      result.push(this.generate('archer'));
    }
    for (let i = 0; i < mages; i++) {
      result.push(this.generate('mage'));
    }
    return result;
  }

  private static generate(type: string): Player {
    const name = this.nameBank[randomIntFromInterval(0, this.nameBank.length - 1)];
    const clamps = {
      hp: [0, 0],
      st: [0, 0],
    };
    switch (type) {
      case 'knight':
        clamps.hp = this.statsBank.knight.hpClamp;
        clamps.st = this.statsBank.knight.stClamp;
        break;
      case 'archer':
        clamps.hp = this.statsBank.archer.hpClamp;
        clamps.st = this.statsBank.archer.stClamp;
        break;
      case 'mage':
        clamps.hp = this.statsBank.mage.hpClamp;
        clamps.st = this.statsBank.mage.stClamp;
        break;
    }
    return createPlayer(
      name,
      randomIntFromInterval(clamps.hp[0], clamps.hp[1]),
      randomIntFromInterval(clamps.st[0], clamps.st[1]),
      type,
    );
  }
}

function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
