import { Character } from './character';
import { DoublyLinkedListNode } from './doublyLinkedList/doublyLinkedListNode';

export class StatusEffectManager {
  public applyAllStatusEffects(target: Character) {
    let node: DoublyLinkedListNode = target.statusEffects.head;

    while (node !== null) {
      node.value.apply(target);
      node = node.next;
    }
  }

  public removeEndedStatusEffects(target: Character) {
    let node: DoublyLinkedListNode = target.statusEffects.head;

    while (node !== null) {
      if (!node.value.canApply()) {
        target.statusEffects.remove(node.value);
      }

      node = node.next;
    }
  }
}
