import { StatusEffect } from '../../statusEffects/statusEffect';

import { DoublyLinkedListNode } from './doublyLinkedListNode';

export class DoublyLinkedList {
  private head: DoublyLinkedListNode;
  private tail: DoublyLinkedListNode;

  private size: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  public length(): number {
    return this.size;
  }

  public isEmpty(): boolean {
    return this.size <= 0;
  }

  public addLast(value: StatusEffect) {
    if (this.isEmpty()) {
      const tmp = new DoublyLinkedListNode();
      this.head = tmp;
      this.tail = tmp;
      this.size++;
      return;
    } else {
      const tmp = new DoublyLinkedListNode();
      tmp.next = null;
      tmp.prev = this.tail;
      tmp.value = value;

      this.tail.next = tmp;

      this.tail = tmp;
      this.size++;
    }
  }
}
