import { ArrayItem } from './arrayItem';

export class Bina {
  public attack(attacker: ArrayItem, target: ArrayItem) {
    target.player.receiveDamage(attacker.player.strength);
    console.log(
      `${attacker.player.name} (${attacker.player.class}) [${attacker.player.healthPoints}/${attacker.player.maxHealthPoints}] has dealt ${attacker.player.strength} damage to ${target.player.name} (${target.player.class}) [${target.player.healthPoints}/${target.player.maxHealthPoints}]!`,
    );
  }
}
