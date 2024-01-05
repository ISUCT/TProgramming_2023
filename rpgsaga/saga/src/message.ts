import { Character } from './character';

export class Message {
  private _attackerInfo: string;
  private _target: Character;
  private _targetInfo: string;
  private _damagePoints: number;

  get damagePoints() {
    return this._damagePoints;
  }

  set damagePoints(value: number) {
    this._damagePoints = value;
  }

  get attackerInfo() {
    return this._attackerInfo;
  }

  set attackerInfo(value: string) {
    this._attackerInfo = value;
  }

  get target() {
    return this._target;
  }

  set target(value: Character) {
    this._target = value;
  }

  get targetInfo() {
    return this._targetInfo;
  }

  set targetInfo(value: string) {
    this._targetInfo = value;
  }

  constructor(attackerInfo: string, target: Character, targetInfo: string, damagePoints: number) {
    this._attackerInfo = attackerInfo;
    this._target = target;
    this._targetInfo = targetInfo;
    this._damagePoints = damagePoints;
  }
}
