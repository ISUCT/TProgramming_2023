import { StatusEffect } from '../../statusEffects/statusEffect';

export class DoublyLinkedListNode {
  public value: StatusEffect;
  public next: DoublyLinkedListNode;
  public prev: DoublyLinkedListNode;

  constructor(value: StatusEffect) {
    this.value = value;
  }
}
