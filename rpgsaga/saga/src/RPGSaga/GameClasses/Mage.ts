import { Player } from "../Player";


export class Mage extends Player {
    constructor(health: number, strength: number, name: string) {
      super(health, strength, name, "Заворожение", 3);
    }

    public toString(): string {
      return "(Маг) " + this.name;
    }

    public ability(): [string, number] {
        // console.log(this.abilityLeft);
      if (this.abilityLeft > 0) {
        this.abilityLeft--;
        return [this.abilityName, 0.0];
      } else {
        return this.attack();
      }
    }
}

