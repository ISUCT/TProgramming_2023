import { IStatusEffect } from '../spell_system/statusEffect/IStatusEffect';

export class DoublyLinkedListNode {
  public value: IStatusEffect;
  public next: DoublyLinkedListNode;
  public prev: DoublyLinkedListNode;

  constructor(value: IStatusEffect) {
    this.value = value;
  }
}
