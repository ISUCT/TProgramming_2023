import { CharacterClass } from './characterClasses';
import { DoublyLinkedList } from './doublyLinkedList/doublyLinkedList';
import { ISpell } from './spell_system/spell/ISpell';

export class Character {
  private _name: string;
  private _class: CharacterClass;

  private readonly _maxHealthPoints: number;
  private _healthPoints: number;

  private _strength: number;
  private _strengthModificator: number;

  private _spell: ISpell;
  private _statusEffects: DoublyLinkedList = new DoublyLinkedList();

  private _isStunned: boolean;

  get name() {
    return this._name;
  }

  set name(value: string) {
    if (value.length > 0) {
      this._name = value;
    } else {
      throw Error('Name should be longer than 0 characters');
    }
  }

  get class() {
    return this._class;
  }

  set class(value: CharacterClass) {
    this._class = value;
  }

  get maxHealthPoints(): number {
    return this._maxHealthPoints;
  }

  get healthPoints() {
    return this._healthPoints;
  }

  get strengthModificatior() {
    return this._strengthModificator;
  }

  set strengthModificator(value: number) {
    this._strengthModificator = value;
  }

  get spell() {
    return this._spell;
  }

  get isStunned() {
    return this._isStunned;
  }

  set isStunned(value: boolean) {
    this._isStunned = value;
  }

  get statusEffects() {
    return this._statusEffects;
  }

  constructor(name: string, characterClass: CharacterClass, healthPoints: number, spell: ISpell) {
    this.name = name;
    this.class = characterClass;

    this._maxHealthPoints = healthPoints;
    this._healthPoints = this._maxHealthPoints;

    this._strength = 5;
    this._strengthModificator = 1.0;

    this._spell = spell;

    this._isStunned = false;
  }

  public receiveDamage(points: number) {
    this._healthPoints -= points;
  }

  public getAttackPoints(): number {
    return this._strength * this._strengthModificator;
  }

  public toString(): string {
    return `${this._name} (${this._class}) [${this._healthPoints}/${this._maxHealthPoints}]`;
  }
}
