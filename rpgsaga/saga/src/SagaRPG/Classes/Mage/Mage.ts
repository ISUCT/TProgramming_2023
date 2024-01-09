import { Player } from '../../Player/player';

export enum Mage_Shape {
  Inquisitor = 'Inquisitor',
  Forbidden = 'Forbidden',
  Occultist = 'Occultist',
}

export class Mage extends Player {
  _healthpool: number;
  _hp: number;
  _power: number = 12;
  //_hitchance:number = 90;
  //_evade:number = 10;
  Shape: Mage_Shape;
  constructor(Shape: Mage_Shape, name: string, hp: number) {
    super(name);
    this.Shape = Shape;
    this._hp = hp;
    this._healthpool = hp;
  }

  attack() {
    return this._power;
  }
  
  public toString(): string {
    return "(Mage) " + this._name;
  }
}
