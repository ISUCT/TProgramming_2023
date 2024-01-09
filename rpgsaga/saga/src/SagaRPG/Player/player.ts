export class Player {
  _hp: number;
  _power: number;
  _healthpool: number;
  _name: string;
  _abilityuses: number = 3;
  _abilityused: number = 0;
  //_hitchance: number;
  constructor(name: string) {
    this._name = name;
  }

  ability() {}
  attack() {
    return this._power;
  }
  DeathOrAlive(): boolean {
    if (this._hp <= 0) {
      return true;
    } else {
      return false;
    }
  }
  getDamage(damage: number) {
    this._hp = this._hp - damage;
    return this.DeathOrAlive();
  }
  restore() {
    this._hp = this._healthpool;
    this._abilityused = 0;
  }
}
