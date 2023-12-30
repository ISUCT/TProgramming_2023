import { StatusEffect } from '../../statusEffects/statusEffect';

import { DoublyLinkedListNode } from './doublyLinkedListNode';

export class DoublyLinkedList {
  private _head: DoublyLinkedListNode;
  private _tail: DoublyLinkedListNode;

  private size: number;

  constructor() {
    this._head = null;
    this._tail = null;
    this.size = 0;
  }

  get head() {
    return this._head;
  }

  get tail() {
    return this._tail;
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
      this._head = tmp;
      this._tail = tmp;
      this.size++;
      return;
    } else {
      const tmp = new DoublyLinkedListNode();
      tmp.next = null;
      tmp.prev = this._tail;
      tmp.value = value;

      this._tail.next = tmp;

      this._tail = tmp;
      this.size++;
    }
  }

  public removeNode(node: DoublyLinkedListNode) {
    if (this.isEmpty()) {
      return;
    }

    if (node.prev !== null) {
      node.prev.next = node.next;
    } else {
      this._head = node.next;
    }

    if (node.next !== null) {
      node.next.prev = node.prev;
    } else {
      this._tail = node.prev;
    }

    this.size--;
  }
}
