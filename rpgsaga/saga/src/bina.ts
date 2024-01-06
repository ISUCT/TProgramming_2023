import { Character } from './character';
import { DoublyLinkedListNode } from './doublyLinkedList/doublyLinkedListNode';
import { Message } from './message';
import { StatusEffect } from './statusEffect/statusEffect';

export class Bina {
  private message: Message;

  public receiveMessage(message: Message) {
    this.message = message;
  }

  public performAttack() {
    this.message.target.receiveDamage(this.message.damagePoints);

    console.log(
      `${this.message.attackerInfo} has dealt ${this.message.damagePoints} damage to ${this.message.targetInfo}!`,
    );
  }

  public performSpell() {
    const isSuccessful = this.message.spell.cast(this.message);

    if (isSuccessful) {
      console.log(
        `${this.message.attackerInfo} has casted a spell ${this.message.spell.toString()} on ${
          this.message.targetInfo
        }!`,
      );

      if (this.message.spell.statusEffect !== null) {
        this.sendStatusEffect(this.message.target, this.message.spell.statusEffect);
      }
    } else {
      console.log(`${this.message.attackerInfo} has failed to cast a spell and skipped a turn!`);
    }
  }

  public sendStatusEffect(target: Character, statusEffect: StatusEffect) {
    if (target.statusEffects.contains(statusEffect)) {
      const node: DoublyLinkedListNode = target.statusEffects.head;
      while (node !== null) {
        if (node.value.name === statusEffect.name) {
          node.value.refresh();
          return;
        }
      }
    } else {
      statusEffect.refresh();
      this.message.target.statusEffects.addLast(statusEffect);
    }
  }
}
