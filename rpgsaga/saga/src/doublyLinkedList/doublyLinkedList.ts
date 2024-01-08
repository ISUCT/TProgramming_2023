import { IStatusEffect } from '../spell_system/statusEffect/IStatusEffect';

import { DoublyLinkedListNode } from './doublyLinkedListNode';

export class DoublyLinkedList {
  private _head: DoublyLinkedListNode;
  private _tail: DoublyLinkedListNode;

  private _size: number;

  get head() {
    return this._head;
  }

  get tail() {
    return this._tail;
  }

  get size() {
    return this._size;
  }

  constructor() {
    this._head = null;
    this._tail = null;
    this._size = 0;
  }

  public length(): number {
    return this._size;
  }

  public isEmpty(): boolean {
    return this._size <= 0;
  }

  public contains(value: IStatusEffect): boolean {
    if (this.isEmpty()) {
      return false;
    }

    let tmp = this.head;
    while (tmp !== null) {
      if (tmp.value.toString() === value.toString()) {
        return true;
      }
      tmp = tmp.next;
    }

    return false;
  }

  public addLast(value: IStatusEffect) {
    const tmp = new DoublyLinkedListNode(value);

    let node: DoublyLinkedListNode = this._head;

    tmp.next = null;

    if (this._head === null) {
      tmp.prev = null;
      this._head = tmp;

      this._size += 1;

      return;
    }

    while (node.next !== null) {
      node = node.next;
    }

    node.next = tmp;

    this._tail = node.next;

    tmp.prev = node;

    this._size += 1;
  }

  public remove(value: IStatusEffect) {
    if (this.isEmpty()) {
      return;
    }

    let tmp = this._head;

    while (tmp !== null) {
      if (tmp.value.toString() === value.toString()) {
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

        this._size--;

        return;
      }

      tmp = tmp.next;
    }
  }
}
