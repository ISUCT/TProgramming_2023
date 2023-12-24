import { CharacterClass } from './characterClasses';
import { DoublyLinkedList } from './dataStructures/doublyLinkedList/doublyLinkedList';

export abstract class Character {
  public name: string;
  public class: string;

  public statusEffects: DoublyLinkedList;

  public readonly maxHealthPoints: number;
  private _healthPoints: number;
  private _strength: number;
  private _strengthModificator: number;

  get strength() {
    return this._strength;
  }

  get healthPoints() {
    return this._healthPoints;
  }

  set healthPoints(value: number) {
    this._healthPoints = value;
  }

  get strengthModificatior() {
    return this._strengthModificator;
  }

  set strengthModificator(value: number) {
    this._strengthModificator = value;
  }

  constructor(name: string, characterClass: CharacterClass, healthPoints: number) {
    this.name = name;
    this.class = characterClass;
    this.healthPoints = healthPoints;
    this.maxHealthPoints = healthPoints;
    this._strength = 5;
    this.strengthModificator = 1.0;
  }

  public getAttackPoints(): number {
    return this.strength * this.strengthModificator;
  }

  public receiveDamage(points: number) {
    this.healthPoints -= points;
  }
}
