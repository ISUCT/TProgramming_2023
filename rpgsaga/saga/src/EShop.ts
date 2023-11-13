import { IDisplayable } from './IDisplayable';
import { Phone } from './phone';

export class Eshop {
  private stuff: IDisplayable[];
  constructor() {
    this.stuff = [];
  }

  addStuff(item: IDisplayable) {
    this.stuff.push(item);
  }

  showStuff() {
    for (const itm of this.stuff) {
      console.log(itm.display());
    }
  }
}
