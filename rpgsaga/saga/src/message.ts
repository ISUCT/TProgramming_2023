import { Character } from './character';
import { ISpell } from './spell_system/spell/ISpell';

export class Message {
  private _attacker: Character;
  private _attackerInfo: string;
  private _target: Character;
  private _targetInfo: string;
  private _damagePoints: number;

  private _spellInfo: string;
  private _spell: ISpell;

  get damagePoints() {
    return this._damagePoints;
  }

  get attacker() {
    return this._attacker;
  }

  get attackerInfo() {
    return this._attackerInfo;
  }

  get target() {
    return this._target;
  }

  get targetInfo() {
    return this._targetInfo;
  }

  get spell() {
    return this._spell;
  }

  get spellInfo() {
    return this._spellInfo;
  }

  constructor(
    attacker: Character,
    attackerInfo: string,
    target: Character,
    targetInfo: string,
    damagePoints?: number,
    spell?: ISpell,
  ) {
    this._attacker = attacker;
    this._attackerInfo = attackerInfo;
    this._target = target;
    this._targetInfo = targetInfo;

    this._damagePoints = damagePoints;

    this._spell = spell;
  }
}
