import { StatusEffect } from '../statusEffect/statusEffect';

import { DoublyLinkedListNode } from './doublyLinkedListNode';

export class DoublyLinkedList {
  private _head: DoublyLinkedListNode;
  private _tail: DoublyLinkedListNode;

  private size: number;

  get head() {
    return this._head;
  }

  get tail() {
    return this._tail;
  }

  constructor() {
    this._head = null;
    this._tail = null;
    this.size = 0;
  }

  public length(): number {
    return this.size;
  }

  public isEmpty(): boolean {
    return this.size <= 0;
  }

  public contains(value: StatusEffect): boolean {
    if (this.isEmpty()) {
      return false;
    }

    let tmp = this.head;
    while (tmp !== null) {
      if (tmp.value.name === value.name) {
        return true;
      }
      tmp = tmp.next;
    }

    return false;
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

      tmp.next = null;
      tmp.prev = this.tail;

      this._tail.next = tmp;

      this._tail = tmp;
      this.size++;
    }
  }

  public remove(value: StatusEffect) {
    if (this.isEmpty()) {
      return;
    }

    let tmp = this._head;

    while (tmp !== null) {
      if (tmp.value.name === value.name) {
        if (tmp.prev !== null) {
          tmp.prev.next = tmp.next;
        } else {
          this._head = tmp.next;
        }

        if (tmp.next !== null) {
          tmp.next.prev = tmp.prev;
        } else {
          this._tail = tmp.prev;
        }

        this.size--;

        return;
      }

      tmp = tmp.next;
    }
  }
}
