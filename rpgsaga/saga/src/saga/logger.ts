import { Player, ActionResult } from './player';

export class ConsoleLogger {
  player1: Player;
  player2: Player;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  public startLog() {
    console.log(
      '(%s) %s vs (%s) %s',
      this.player1.constructor.name,
      this.player1.name,
      this.player2.constructor.name,
      this.player2.name,
    );
  }

  public actionLog(attacker: Player, input: ActionResult) {
    const defender = this.player1 === attacker ? this.player1 : this.player2;
    if (input.actionName === 'default attack') {
      console.log(
        '(%s) %s наносит урон %d противнику (%s) %s',
        attacker.constructor.name,
        attacker.name,
        input.damage,
        defender.constructor.name,
        defender.name,
      );
    } else {
      if (input.damage !== 0) {
        console.log(
          '(%s) %s использует (%s) и наносит урон %d противнику (%s) %s',
          attacker.constructor.name,
          attacker.name,
          input.actionName,
          input.damage,
          defender.constructor.name,
          defender.name,
        );
      } else {
        console.log(
          '(%s) %s использует (%s) на противнике (%s) %s',
          attacker.constructor.name,
          attacker.name,
          input.actionName,
          defender.constructor.name,
          defender.name,
        );
      }
    }
  }

  public endLog(defeated: Player) {
    console.log('(%s) %s погибает', defeated.constructor.name, defeated.name);
  }
}
