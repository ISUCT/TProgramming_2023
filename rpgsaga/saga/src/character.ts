import { CharacterClass } from './characterClasses';

export abstract class Character {
  public name: string;
  public class: string;
  public arrayIndex: number;

  // public effects: Effect[] = [];

  static readonly minHealthPoints: number;
  static readonly maxHealthPoints: number;

  private _healthPoints: number;
  private _strength: number;

  get strength() {
    return this._strength;
  }

  get healthPoints() {
    return this._healthPoints;
  }

  set healthPoints(value: number) {
    this._healthPoints = value;
  }

  constructor(name: string, characterClass: CharacterClass, healthPoints: number) {
    this.name = name;
    this.class = characterClass;
    this.healthPoints = healthPoints;
    this._strength = 5;
  }

  public receiveDamage(points: number) {
    this.healthPoints -= points;
  }
}