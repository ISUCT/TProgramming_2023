export class Cat{
    name: string;
    age: number;
    color: string;
    gender: boolean;


    constructor(name: string, age: number, color: string, gender:boolean) {
 
        this.name = name;
        this.age = age;
        this.color = color;
        this.gender = gender
    }


    meow(){
        console.log("Мяу");
    }

    information(){
        console.log(`name: ${this.name}  age: ${this.age} color:${this.color} gender: ${this.gender}`);
    }

    gender_cat(){
        if(this.gender){
            console.log(`Your cat is female`)
        } else {
            console.log(`Your cat is male`)
        }
    }
   

}

