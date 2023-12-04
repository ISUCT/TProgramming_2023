import { Battle } from './battle';
import { Knight } from './classes';
import { ConsoleLogger } from './logger';
import { Player } from './player';

export class Tournament {
  private isLogEnabled: boolean;
  private logger: ConsoleLogger;
  private players: Array<Player>;
  constructor(players: Array<Player>, logEnable: boolean) {
    this.players = players;
    this.isLogEnabled = logEnable;

    this.logger = new ConsoleLogger(new Knight(0, 0, ''), new Knight(0, 0, ''), true);
  }

  private runTournament(players: Array<Player>): Player {
    this.logger.logCurrentTournament(players);
    if (players.length < 2) {
      return players[0];
    } else {
      const newCycle: Array<Player> = [];
      for (let i = 0; i < players.length; i += 2) {
        players[i].fullHeal();
        players[i + 1].fullHeal();
        const battle = new Battle(players[i], players[i + 1], this.isLogEnabled);
        newCycle.push(battle.initiate());
      }
      return this.runTournament(newCycle);
    }
  }

  private startTournament(): Player {
    return this.runTournament(this.players);
  }
}
