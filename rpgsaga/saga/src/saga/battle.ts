import { ConsoleLogger } from './logger';
import { Player, randomBool } from './player';

export class Battle {
  opponents: Array<Player>;
  useLogger: boolean;

  constructor(player1: Player, player2: Player, useLogger: boolean) {
    this.opponents = new Array<Player>(player1, player2);
    this.useLogger = useLogger;
  }

  initiate(): Player {
    const logger = new ConsoleLogger(this.opponents[0], this.opponents[1], this.useLogger);
    logger.startLog();
    let currentTurn = randomBool();
    while (this.opponents[0].health > 0 && this.opponents[1].health > 0) {
      const res = this.opponents[currentTurn].act();
      logger.actionLog(this.opponents[currentTurn], res);
      currentTurn = currentTurn === 0 ? 1 : 0;
      this.opponents[currentTurn].passTurn(res);
    }
    logger.endLog(this.opponents[0].health <= 0 ? this.opponents[0] : this.opponents[1]);
    return this.opponents[0].health <= 0 ? this.opponents[1] : this.opponents[0];
  }
}
