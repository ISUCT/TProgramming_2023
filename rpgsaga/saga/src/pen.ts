import { IDisplayable } from './IDisplayable';

export class Pen implements IDisplayable {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  display(): string {
    return `stylus ${this.name}`;
  }
}
