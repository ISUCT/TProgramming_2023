import { service } from "./service";

export class Entertainment extends service{

    constructor(name: string, price: number, public time?: number){
        super(name, price);
        this.time = time;
    }
    pay(money: number): number{
        if (super.pay(money) == money - this.price){
            console.log(`${this.time} mins of ${this.name} was paid`);
            return money
        }

    }
    
    getInfo(): string{
        return (`${this.name}: Price: ${this.price}$, Time: ${this.time} `)
    }


}