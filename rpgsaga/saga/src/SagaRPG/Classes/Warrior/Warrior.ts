import { Player } from '../../Player/player';
import { Status } from "../../Player/Ability";
export enum Warrior_Shape {
  Juggernaut = 'Juggernaut',
  Marauder = 'Marauder',
  Slayer = 'Slayer',
}

export class Warrior extends Player {
  _healthpool: number;
  _hp: number;
  _power: number = 8;
  //_hitchance:number = 80;
  //_block:number = 10;
  Shape: Warrior_Shape;
  constructor(Shape: Warrior_Shape, name: string, hp: number) {
    super(name);
    this.Shape = Shape;
    this._hp = hp;
    this._healthpool = hp;
  }
  ability(){
    return ['ability', 4, 6, Status.Bleed]
  }

  attack() {
    return ['damage',this._power];
  }
  
  public toString(): string {
    return "(Warrior) " + this._name;
  }
  
}

