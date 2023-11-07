export abstract class Vehicle {
  public year: number;
  private kph: number;

  constructor(vyear: number, speed: number, public name?: string) {
    this.year = vyear;
    this.kph = speed;
    this.name = name;
  }
  set speed(speed: number) {
    this.kph = speed >= 0 && speed <= 150 ? speed : this.kph;
  }
  get speed(): number {
    return this.kph;
  }

  abstract signal(sig: string): string;
}
