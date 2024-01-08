import { Character } from './character';
import { DoublyLinkedListNode } from './doublyLinkedList/doublyLinkedListNode';
import { Message } from './message';
import { IStatusEffect } from './spell_system/statusEffect/IStatusEffect';

export class Bina {
  private _message: Message;

  public receiveMessage(message: Message) {
    this._message = message;
  }

  public performAttack() {
    this._message.target.receiveDamage(this._message.damagePoints);

    console.log(
      `${this._message.attackerInfo} has dealt ${this._message.damagePoints} damage to ${this._message.targetInfo}!`,
    );
  }

  public performSpell() {
    const isSuccessful = this._message.spell.execute(this._message.target);

    if (isSuccessful) {
      console.log(
        `${this._message.attackerInfo} has casted a spell ${this._message.spell.toString()} on ${
          this._message.targetInfo
        }!`,
      );

      if (this._message.spell.hasStatusEffect()) {
        this.sendStatusEffect(this._message.target, this._message.spell.sendStatusEffect());
      }
    } else {
      console.log(`${this._message.attackerInfo} has failed to cast a spell!`);
    }
  }

  public sendStatusEffect(target: Character, statusEffect: IStatusEffect) {
    if (target.statusEffects.contains(statusEffect)) {
      const node: DoublyLinkedListNode = target.statusEffects.head;
      while (node !== null) {
        if (node.value.toString() === statusEffect.toString()) {
          node.value.refresh();
          return;
        }
      }
    } else {
      statusEffect.refresh();
      target.statusEffects.addLast(statusEffect);
    }
  }
}
