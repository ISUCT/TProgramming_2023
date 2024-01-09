import { stat } from "fs";
import { Status } from "../Player/Ability";
export class Player {
  _hp: number;
  _power: number;
  _healthpool: number;
  _name: string;
  _status: [Status, number, number?] = [Status.None, 0, 0];
  //_hitchance: number;
  constructor(name: string) {
    this._name = name;
  }

  ability(){
    return ['ability', 6, 3, Status.Ignite]
  }
  attack() {
    return ['damage',this._power];
  }
  DeathOrAlive(): boolean {
    if (this._hp <= 0) {
      return true;
    } else {
      return false;
    }
  }
  getDamage(damage: number): boolean {
    this._hp = this._hp - damage;
    return this.DeathOrAlive();
  }
  restore():void {
    this._hp = this._healthpool;
    this._status = [Status.None, 0, 0]
  }

  CheckStatus(){
    return this._status
  }
  getStatus(status){
    this._status = status
  }
  TakeDamageFromAbility(){
    this._healthpool -= this.CheckStatus[1]
    this.CheckStatus[1] - 1
  }
}
