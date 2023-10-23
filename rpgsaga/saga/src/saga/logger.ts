import { Player, ActionResult } from './player';

export class ConsoleLogger {
  player1: Player;
  player2: Player;
  isEnabled: boolean;

  constructor(player1: Player, player2: Player, enable: boolean) {
    this.player1 = player1;
    this.player2 = player2;
    this.isEnabled = enable;
  }

  public startLog() {
    if (this.isEnabled) {
      console.log(
        '(%s) %s vs (%s) %s',
        this.player1.constructor.name,
        this.player1.name,
        this.player2.constructor.name,
        this.player2.name,
      );
    }
  }

  public actionLog(attacker: Player, input: ActionResult) {
    if (this.isEnabled) {
      const defender = this.player1 === attacker ? this.player2 : this.player1;
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
  }

  public endLog(defeated: Player) {
    if (this.isEnabled) {
      console.log('(%s) %s погибает', defeated.constructor.name, defeated.name);
    }
  }

  public logCurrentTournament(players: Array<Player>) {
    if (this.isEnabled){
        console.log("\n В турнире участвуют \n")
        for (let i = 0; i < players.length; i++) {
            console.log(players[i].name, " ")            
        }
    }
  }
}
