import { ArrayItem } from './arrayItem';

export class Bina {
  public attack(attacker: ArrayItem, target: ArrayItem) {
    target.player.receiveDamage(attacker.player.getAttackPoints());

    console.log(
      `${attacker.player.name} (${attacker.player.class}) [${attacker.player.healthPoints}/${
        attacker.player.maxHealthPoints
      }] has dealt ${attacker.player.getAttackPoints()} damage to ${target.player.name} (${target.player.class}) [${
        target.player.healthPoints
      }/${target.player.maxHealthPoints}]!`,
    );
  }
}
