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
      const tmp = new DoublyLinkedListNode(value);
      this._head = tmp;
      this._tail = tmp;
      this.size++;
      return;
    } else {
      const tmp = new DoublyLinkedListNode(value);
      tmp.prev = this._tail;
      this._tail.next = tmp;
      this._tail = this.tail.next;
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
