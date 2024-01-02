import { Character } from './character';
import { DoublyLinkedListNode } from './dataStructures/doublyLinkedList/doublyLinkedListNode';

export class SpellSystemManager {
  public removeEndedStatusEffects(player: Character) {
    let node = player.statusEffects.head;
    while (node !== null) {
      if (node.value.usesRemaining === 0) {
        player.statusEffects.removeNode(node);
      }
      node = node.next;
    }
  }

  public applyAllStatusEffects(player: Character) {
    let node: DoublyLinkedListNode = player.statusEffects.head;
    while (node !== null) {
      node.value.apply();
      node = node.next;
    }
  }
}
