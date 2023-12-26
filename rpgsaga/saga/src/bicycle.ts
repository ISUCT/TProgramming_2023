import { Vehicle } from "./vehicle";

export class Bicycle extends Vehicle {
    private price: number;
    constructor(price: number, year: number, speed: number, public name?: string) {
        super(year, speed, name);
        this.cost = price;
    }

    set cost(price:number){
        if(price<1000){
            throw new Error("too low price");
        }
        this.price = price
    }

    get cost():number{
        return this.price;
    }

    public signal(sig: string = "DZING"): string {
        return `${sig}! ${sig}!`;
      }

      public toString = () => `This is my bike ${this.name}, I checked every gaik, it is a ${this.year} model, it costs ${this.cost}`;
}