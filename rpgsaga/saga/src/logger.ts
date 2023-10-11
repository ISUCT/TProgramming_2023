import { Player } from './player';

export class Logger {
  static playersLog(players: Player[]) {
    for (const i in players) {
      console.log(players[i]);
    }
  }

  static hpLog(player: Player): void {
    console.log(`Жизни (${player.className}) ${player.name}: ${player.health}`);
  }

  static attackLog(attacker: Player, defender: Player, damage: number): void {
    console.log(
      `(${attacker.className}) ${attacker.name} атакует (${defender.className}) ${defender.name} с уроном ${damage}`,
    );
    console.log(`Заблокировано урона броней: ${defender.armor}`);
  }

  static deathLog(player: Player): void {
    console.log(`(${player.className}) ${player.name} умирает`);
    this.nextLog();
  }

  static nextLog(): void {
    console.log('');
  }

  static divideLog(): void {
    console.log('____________________________');
  }

  static roundLog(n: number): void {
    console.log(`Раунд ${n}`);
    this.nextLog();
  }

  static brawlLog(p1: Player, p2: Player): void {
    console.log(`(${p1.className}) ${p1.name} VS (${p2.className}) ${p2.name}`);
  }

  static winLog(winner: Player): void {
    console.log(`(${winner.className}) ${winner.name} Победил в бою`);
    this.hpLog(winner);
    this.divideLog();
  }

  static abilityLog(attacker: Player, defender: Player): void {
    this.nextLog();
    console.log(
      `(${attacker.className}) ${attacker.name} Использовал ${attacker.abilityName} на (${defender.className}) ${defender.name}`,
    );
    console.log(`${attacker.abilityDescription} ${attacker.abilityPower}`);
    console.log(`Остаток маны: ${attacker.mana}/${attacker.maxMana}`);
  }

  static frozenLog(player: Player) {
    this.nextLog();
    console.log(`(${player.className}) ${player.name} Заморожен и пропускает ход`);
  }

  static fireLog(player: Player, damage: number) {
    this.nextLog();
    console.log(`(${player.className}) ${player.name} Получает урон от огня ${damage}`);
  }

  static rageLog(damage) {
    console.log(`Берсерк получает бонус к урону ${damage} от яростного удара`);
  }

  static lightLog(damage) {
    console.log(`Паладин наносит ${damage} урона светом`);
  }
}
