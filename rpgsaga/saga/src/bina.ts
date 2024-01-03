import { Character } from './character';

export class Bina {
  public attack(attacker: Character, target: Character) {
    target.receiveDamage(attacker.getAttackPoints());

    console.log(`${attacker.toString()} has dealt ${attacker.getAttackPoints()} damage to ${target.toString()}!`);
  }
}
