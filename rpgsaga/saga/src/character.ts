import { CharacterClass } from './characterClasses';

export class Character {
  private _name: string;
  private _class: CharacterClass;

  private readonly _maxHealthPoints: number;
  private _healthPoints: number;

  private _strength: number;
  private _strengthModificator: number;

  get name() {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
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

  set healthPoints(value: number) {
    this._healthPoints = value;
  }

  get strength() {
    return this._strength;
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

    this._maxHealthPoints = healthPoints;
    this.healthPoints = this._maxHealthPoints;

    this._strength = 5;
    this._strengthModificator = 1.0;
  }

  public receiveDamage(points: number) {
    this.healthPoints -= points;
  }

  public getAttackPoints(): number {
    return this._strength * this._strengthModificator;
  }

  public toString(): string {
    return `${this._name} (${this._class}) [${this._healthPoints}/${this._maxHealthPoints}]`;
  }
}
