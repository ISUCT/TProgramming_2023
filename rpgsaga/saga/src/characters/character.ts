import { CharacterClass } from '../characterClasses';

export abstract class Character {
  public name: string;
  public class: string;

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

  constructor(name: string, characterClass: CharacterClass, healthPoints: number) {
    this.name = name;
    this.class = characterClass;
    this.healthPoints = healthPoints;

    this._maxHealthPoints = healthPoints;
    this._strength = 5;
    this._strengthModificator = 1.0;
  }

  public getAttackPoints(): number {
    return this._strength * this._strengthModificator;
  }

  public receiveDamage(points: number) {
    this.healthPoints -= points;
  }
}
