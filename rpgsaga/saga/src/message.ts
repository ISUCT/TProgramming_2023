import { Character } from './character';
import { Spell } from './spell_system/spell/spell';

export class Message {
  private _attacker: Character;
  private _attackerInfo: string;
  private _target: Character;
  private _targetInfo: string;
  private _damagePoints: number;

  private _spellInfo: string;
  private _spell: Spell;

  get damagePoints() {
    return this._damagePoints;
  }

  set damagePoints(value: number) {
    this._damagePoints = value;
  }

  get attacker() {
    return this._attacker;
  }

  set attacker(value: Character) {
    this._attacker = value;
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

  get spell() {
    return this._spell;
  }

  set spell(value: Spell) {
    this._spell = value;
  }

  get spellInfo() {
    return this._spellInfo;
  }

  set spellInfo(value: string) {
    this._spellInfo = value;
  }

  constructor(
    attacker: Character,
    attackerInfo: string,
    target: Character,
    targetInfo: string,
    damagePoints?: number,
    spell?: Spell,
  ) {
    this._attacker = attacker;
    this._attackerInfo = attackerInfo;
    this._target = target;
    this._targetInfo = targetInfo;

    this._damagePoints = damagePoints;

    this._spell = spell;
  }
}
