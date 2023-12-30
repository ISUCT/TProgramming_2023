import { ArrayItem } from './arrayItem';
import { randomIntFromInterval } from './randomMath';

export class Bina {
  public attack(attacker: ArrayItem, target: ArrayItem) {
    if (this.hasAttackMissed()) {
      console.log(
        `${attacker.player.name} (${attacker.player.class}) [${attacker.player.healthPoints}/${attacker.player.maxHealthPoints}] has missed!`,
      );
    } else {
      target.player.receiveDamage(attacker.player.getAttackPoints());
      console.log(
        `${attacker.player.name} (${attacker.player.class}) [${attacker.player.healthPoints}/${attacker.player.maxHealthPoints}] has dealt ${attacker.player.strength} damage to ${target.player.name} (${target.player.class}) [${target.player.healthPoints}/${target.player.maxHealthPoints}]!`,
      );
    }
  }

  public castSpell(attacker: ArrayItem, target: ArrayItem) {
    if (this.hasSpellMissed()) {
      console.log(
        `${attacker.player.name} (${attacker.player.class}) [${attacker.player.healthPoints}/${attacker.player.maxHealthPoints}] has missed a spell!`,
      );
    } else {
      attacker.player.spell.cast(target.player);
    }
  }

  private hasAttackMissed(): boolean {
    const randomNumber = randomIntFromInterval(1, 10);
    return randomNumber <= 3 ? true : false;
  }

  private hasSpellMissed(): boolean {
    const randomNumber = randomIntFromInterval(1, 10);
    return randomNumber <= 1 ? true : false;
  }
}
