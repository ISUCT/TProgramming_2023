import { error } from "console";

export abstract class Vehicle {
    public year: number;
    private kph: number;

    constructor(vyear: number, speed: number, public name?: string) {
        this.vyear = vyear;
        
        this.speed = speed;
        this.name = name;
    }
    set speed(speed: number) {
        if (speed > 150 || speed <-70) {
            throw new Error("Too high speed");
        }
        this.kph = speed
    }
    get speed(): number {
        return this.kph;
    }
    
    set vyear(vyear: number){
        if(vyear<1950){
            throw new Error("Too old car");
        }
        this.year = vyear; 
    }


    abstract signal(sig: string): string;
}
