import { Player } from '../../Player/player';

export enum Archer_Shape {
  Hunter = 'Hunter',
  Raider = 'Raider',
  Elemental_Mage = 'Elemental_Mage',
}

export class Archer extends Player {
  _healthpool: number;
  _hp: number;
  _power: number = 10;
  //_hitchance: number = 85;
  //_suppress: number = 25;
  Shape: Archer_Shape;
  constructor(Shape: Archer_Shape, name: string, hp: number) {
    super(name);
    this.Shape = Shape;
    this._hp = hp;
    this._healthpool = hp;
  }

  attack() {
    return this._power;
  }
  
  public toString(): string {
    return "(Archer) " + this._name;
  }
}
