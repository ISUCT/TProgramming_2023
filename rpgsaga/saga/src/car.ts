import { Vehicle } from './vehicle';

export class Car extends Vehicle {
  public fuel: string;
  constructor(year: number, speed: number, fuel: string, name?: string) {
    super(year, speed, name);
    this.fuel = fuel;
  }
  public signal(sig: string): string {
    return `${sig}! ${sig}!`;
  }
  public brakePathLength(): number {
    return ((this.speed * 1000) / 3600) ** 2 / (2 * 0.8 * 10);
  }

  public willCrash(distance: number): string {
    return this.brakePathLength() > distance ? 'YES' : 'NO';
  }
  public toString = () => `This is ${this.name}`;
}
