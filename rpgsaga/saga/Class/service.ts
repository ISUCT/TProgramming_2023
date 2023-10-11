export abstract class service{
    public name: string;
    public price: number;
    constructor(name: string, price: number){
        this.name = name;
        this.price = price;
    } 
    public abstract getInfo();

    public pay(money: number){
        if (money >= this.price){
            return money -= this.price
        } else {
            console.log(`Not enough money`)
            return money
        }
        
    }
}