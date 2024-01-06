import { Player } from './player';

export class Logger {
  static announce(player1: Player, player2: Player) {
    console.log(`(${player1.type}) ${player1.name} vs (${player2.type}) ${player2.name}`);
  }

  static makeDamage(player1: Player, player2: Player, damage: number) {
    console.log(
      `(${player1.type}) ${player1.name} наносит урон ${damage} противнику (${player2.type}) ${player2.name}`,
    );
  }

  static castAbility(player: Player) {
    console.log(`(${player.type}) ${player.name} использует (${player.abilityName})`);
  }

  static abilityAndDamage(player1: Player, player2: Player, damage: number) {
    console.log(
      `(${player1.type}) ${player1.name} использует (${player1.abilityName}) и наносит урон ${damage} противнику (${player2.type}) ${player2.name}`,
    );
  }

  static death(player: Player) {
    console.log(`(${player.type}) ${player.name} погибает`);
  }
}
