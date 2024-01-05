import { Message } from './message';

export class Bina {
  public performAttack(message: Message) {
    message.target.receiveDamage(message.damagePoints);

    console.log(`${message.attackerInfo} has dealt ${message.damagePoints} damage to ${message.targetInfo}!`);
  }
}
