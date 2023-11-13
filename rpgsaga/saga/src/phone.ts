import { IDisplayable } from './IDisplayable';

export abstract class Phone implements IDisplayable {
  private aYear: number;
  phoneNumber: string;

  static phoneCount = 0;

  constructor(number: string, year: number, public name?: string) {
    console.log('Creating phone');
    Phone.phoneCount += 1;
    this.phoneNumber = number;
    this.year = year;
    this.name = name;
  }

  call(number: string) {
    console.log(`Making a call from ${this.phoneNumber} to ${number}`);
  }
  endCall() {
    console.log('Ending call');
  }

  set year(year: number) {
    if (year >= 1900 && year < 2023) {
      this.aYear = year;
      return;
    }
    throw new Error(`incorrect year`);
  }

  get year(): number {
    return this.aYear;
  }

  toString(): string {
    return `this is phone ${this.name}`;
  }

  abstract display(): string;
}
