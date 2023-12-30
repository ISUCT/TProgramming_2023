import { CharacterClass } from './characterClasses';
import { DoublyLinkedList } from './dataStructures/doublyLinkedList/doublyLinkedList';
import { Spell } from './spells/spell';

export abstract class Character {
  public name: string;
  public class: string;

  public spell: Spell;
  public statusEffects: DoublyLinkedList = new DoublyLinkedList();

  private readonly _maxHealthPoints: number;
  private _healthPoints: number;
  private _strength: number;
  private _strengthModificator: number;

  get maxHealthPoints(): number {
    return this._maxHealthPoints;
  }

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

  constructor(name: string, characterClass: CharacterClass, healthPoints: number, spell: Spell) {
    this.name = name;
    this.class = characterClass;
    this.healthPoints = healthPoints;
    this.spell = spell;

    this._maxHealthPoints = healthPoints;
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
