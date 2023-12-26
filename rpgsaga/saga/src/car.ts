import { Vehicle } from './vehicle';

export class Car extends Vehicle {
  public fuel: number;
  constructor(year: number, speed: number, fuel: number, name?: string) {
    super(year, speed, name);
    this.petrol = fuel;
  }

  set petrol(fuel:number){
    if(fuel<90 || fuel>98){
        throw new Error("non-existing fuel");
    }
    this.fuel = fuel;
  }

  public signal(sig: string = "BEEP"): string {
    return `${sig}! ${sig}!`;
  }
  public brakePathLength(): number {
    return ((this.speed * 1000) / 3600) ** 2 / (2 * 0.8 * 10);
  }

  public willCrash(distance: number): string {
    return this.brakePathLength() > distance ? 'YES' : 'NO';
  }
  public toString = () => `This is ${this.name} car, it is a ${this.vyear} model, it uses ${this.petrol} fuel`;
}
