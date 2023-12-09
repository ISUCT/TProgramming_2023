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

  private generate(type: string): Player {
    const name = this.nameBank[randomIntFromInterval(0, this.nameBank.length - 1)];
    const clamps = [];
    switch (type) {
      case 'knight':
        clamps[0] = this.statsBank.knight.hpClamp;
        clamps[1] = this.statsBank.knight.stClamp;
        break;
      case 'archer':
        clamps[0] = this.statsBank.archer.hpClamp;
        clamps[1] = this.statsBank.archer.stClamp;
        break;
      case 'mage':
        clamps[0] = this.statsBank.mage.hpClamp;
        clamps[1] = this.statsBank.mage.stClamp;
        break;
    }
    return createPlayer(
      name,
      randomIntFromInterval(clamps[0][0], clamps[0][1]),
      randomIntFromInterval(clamps[1][0], clamps[1][1]),
      type,
    );
  }
}

function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
