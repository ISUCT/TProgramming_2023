import { ConsoleLogger } from './logger';
import { Player, randomBool } from './player';

export class Battle {
  private opponents: Array<Player>;
  private useLogger: boolean;

  constructor(player1: Player, player2: Player, useLogger: boolean) {
    this.opponents = new Array<Player>(player1, player2);
    this.useLogger = useLogger;
  }

  initiate(): Player {
    const logger = new ConsoleLogger(this.opponents[0], this.opponents[1], this.useLogger);
    logger.startLog();
    let currentTurn = randomBool();
    let currentPlayer = this.opponents[currentTurn];
    while (this.opponents[0].health > 0 && this.opponents[1].health > 0) {
      // first player acts
      const action = currentPlayer.act();
      // log this action
      logger.actionLog(currentPlayer, action);
      // reverse the players, now opponent is the main one
      currentTurn = currentTurn === 0 ? 1 : 0;
      currentPlayer = this.opponents[currentTurn];
      // our new current player gets damage and reacts to statuses
      const res = currentPlayer.passTurn(action);
      // if player was hit by attack they could reflect, pass it on opponent
      this.opponents[currentTurn === 0 ? 1 : 0].simplePassTurn(res.reflectiveAttack);
      // log status effects
      logger.stateLog(currentPlayer, res);
    }
    logger.endLog(this.opponents[0].health <= 0 ? this.opponents[0] : this.opponents[1]);
    return this.opponents[0].health <= 0 ? this.opponents[1] : this.opponents[0];
  }
}
