export class Car {
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

  public signal(): string {
    return `BEEP! BEEP!`;
  }

  public brakePathLength() {
    return ((this.kph * 1000) / 3600) ** 2 / (2 * 0.8 * 10);
  }

  willCrash(distance: number) {
    if (this.brakePathLength() > distance) {
      return `YES`;
    } else {
      return `NO`;
    }
  }
}
