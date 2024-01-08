import { DoublyLinkedList } from '../src/doublyLinkedList/doublyLinkedList';
import { FireArrowEffect } from '../src/spell_system/statusEffect/fireArrowEffect';
import { StunEffect } from '../src/spell_system/statusEffect/stunEffect';
import { IStatusEffect } from '../src/spell_system/statusEffect/IStatusEffect';

describe('Testing DoublyLinkedList constructor', () => {
  it('Should initialise properly', () => {
    const linkedList = new DoublyLinkedList();
    expect(linkedList.head).toBe(null);
    expect(linkedList.tail).toBe(null);
    expect(linkedList.size).toBe(0);
  });
});

describe('Testing addLast method', () => {
  it('Should add an element into the empty doubly linked list', () => {
    const linkedList = new DoublyLinkedList();
    linkedList.addLast(new FireArrowEffect('Burning', 3));

    expect(linkedList.head.value).toBeInstanceOf(FireArrowEffect);
    expect(linkedList.tail).toBe(null);
    expect(linkedList.size).toBe(1);
  });
  it('Should add an element into the non-empty doubly linked list', () => {
    const linkedList = new DoublyLinkedList();
    linkedList.addLast(new FireArrowEffect('Burning', 3));
    linkedList.addLast(new FireArrowEffect('Blue Fire', 1));
    linkedList.addLast(new StunEffect('Stun', 1));

    expect(linkedList.head.value).toBeInstanceOf(FireArrowEffect);
    expect(linkedList.head.next.value).toBeInstanceOf(FireArrowEffect);
    expect(linkedList.head.next.next.value).toBeInstanceOf(StunEffect);
    expect(linkedList.tail.value).toBeInstanceOf(StunEffect);
    expect(linkedList.size).toBe(3);
  });
});

describe('Testing contains method', () => {
  it('Should result in true if element is in the linked list', () => {
    const linkedList = new DoublyLinkedList();
    const statusEffect: IStatusEffect = new FireArrowEffect('Burning', 3);

    linkedList.addLast(statusEffect);

    expect(linkedList.contains(statusEffect)).toBe(true);
  });
  it('Should result in false if linked list is empty', () => {
    const linkedList = new DoublyLinkedList();
    const statusEffect: IStatusEffect = new FireArrowEffect('Burning', 3);

    expect(linkedList.contains(statusEffect)).toBe(false);
  });
  it("Should result in false if element isn't in the linked list", () => {
    const linkedList = new DoublyLinkedList();
    const statusEffect: IStatusEffect = new FireArrowEffect('Burning', 3);
    const anotherStatusEffect: IStatusEffect = new FireArrowEffect('Blue Fire', 1);

    linkedList.addLast(statusEffect);

    expect(linkedList.contains(anotherStatusEffect)).toBe(false);
  });
});

describe('Testing remove method', () => {
  it('Should work without errors if linked list is empty', () => {
    const linkedList = new DoublyLinkedList();
    const statusEffect: IStatusEffect = new FireArrowEffect('Blue Fire', 1);

    expect(() => {
      linkedList.remove(statusEffect);
    }).not.toThrow();
  });

  it('Should remove an element from non-empty linked list', () => {
    const linkedList = new DoublyLinkedList();
    const statusEffect: IStatusEffect = new FireArrowEffect('Blue Fire', 1);
    const anotherStatusEffect: IStatusEffect = new FireArrowEffect('Burning', 3);

    linkedList.addLast(statusEffect);
    linkedList.addLast(anotherStatusEffect);

    linkedList.remove(statusEffect);

    expect(linkedList.size).toBe(1);
    expect(linkedList.head.value).toBe(anotherStatusEffect);
  });
});
