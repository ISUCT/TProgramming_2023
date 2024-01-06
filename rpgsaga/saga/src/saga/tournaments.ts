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
    switch (players.length) {
      case 1:
        return players[0];
      case 2:
        return this.runTournament([new Battle(players[0], players[1], this.isLogEnabled).initiate()]);
      case 3:
        // this case makes battle with the first two competitors and then runs battle with the winner and the third one
        // emergency case, don't do it like that
        return this.runTournament([this.runTournament([players[0], players[1]]), players[2]]);
      default: {
        const newCycle: Array<Player> = [];
        for (let i = 0; i < players.length; i += 2) {
          newCycle.push(new Battle(players[i], players[i + 1], this.isLogEnabled).initiate());
        }
        return this.runTournament(newCycle);
      }
    }
  }

  public startTournament(): Player {
    return this.runTournament(this.players);
  }
}
