import { Player, ActionResult, PassResult } from './player';

export class ConsoleLogger {
  private isEnabled: boolean;
  private player1: Player;
  private player2: Player;
  constructor(player1: Player, player2: Player, enable: boolean) {
    this.player1 = player1;
    this.player2 = player2;
    this.isEnabled = enable;
  }

  public actionLog(attacker: Player, input?: ActionResult): void {
    if (this.isEnabled) {
      const defender = this.player1 === attacker ? this.player2 : this.player1;
      if (input === undefined) {
        console.log('(%s) %s пропускает ход', attacker.constructor.name, attacker.name);
        return;
      }

      // redo
      switch (input.action.constructor.name) {
        case 'Attack':
          console.log(
            '(%s) %s наносит урон %d противнику (%s) %s',
            attacker.constructor.name,
            attacker.name,
            input.damage,
            defender.constructor.name,
            defender.name,
          );
          break;
        case 'AbilityAttack':
          console.log(
            '(%s) %s использует (%s) и наносит урон %d противнику (%s) %s',
            attacker.constructor.name,
            attacker.name,
            input.action.name,
            input.damage,
            defender.constructor.name,
            defender.name,
          );
          break;
        case 'Ability':
          console.log(
            '(%s) %s использует (%s) на противнике (%s) %s',
            attacker.constructor.name,
            attacker.name,
            input.action.name,
            defender.constructor.name,
            defender.name,
          );
          break;
        case 'State':
          if (input.action.name === 'frozen') {
            console.log('(%s) %s заморожен и не может двигаться', attacker.constructor.name, attacker.name);
          }
      }
    }
  }

  public endLog(defeated: Player): void {
    if (this.isEnabled) {
      console.log('(%s) %s погибает\n', defeated.constructor.name, defeated.name);
    }
  }

  public logCurrentTournament(players: Array<Player>): void {
    if (this.isEnabled && players.length > 0) {
      if (players.length > 1) {
        console.log('\nВ турнире участвуют \n');
        for (let i = 0; i < players.length; i++) {
          console.log(players[i].name, ' ');
        }
      } else {
        console.log('\nВ турнире побеждает \n');
        console.log(players[0].name, ' ');
      }
    }
  }

  public startLog(): void {
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

  public stateLog(player: Player, input: PassResult): void {
    if (this.isEnabled) {
      // redo, log doesn't know about statuses' real damage
      for (let i = 0; i < input.statuses.length; i++) {
        const element = input.statuses[i];
        if (element.dmgPerTurn > 0) {
          console.log(
            '(%s) %s получает %d от статуса %s',
            player.constructor.name,
            player.name,
            element.dmgPerTurn,
            element.name,
          );
        }
      }
      if (input.statuses) {
        console.log('(%s) %s разморожен и готов атаковать', player.constructor.name, player.name);
      }
    }
  }
}
