export class Cat{
    name: string;
    color: string;
    characteristic: boolean;  
    private aGe: number;


    constructor(name: string, age: number, color: string, characteristic: boolean) {
 
        this.name = name;
        this.age = age;
        this.color = color;
        this.characteristic = characteristic
    }


    meow(){
        console.log("Мяу");
    }

    information(){
        console.log(`name: ${this.name}  age: ${this.age} color:${this.color} characteristic: ${this.characteristic}`);
    }

    сharacteristiccat(){
        if(this.characteristic){
            console.log(`Your cat is a house cat`)
        } else {
            console.log(`Your cat is not a house cat`)
        }
    }

    set age(age: number) {
        this.aGe = age >= 0 && age < 21 ? age : this.aGe ?? 3;
      }
    
      get age(): number {
        return this.aGe;
      }

}

