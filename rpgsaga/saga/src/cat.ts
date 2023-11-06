export class Cat {
  private age: number;
  private name: string;
  private breed: string;

  constructor(age: number, name: string, breed: string) {
    this.age = age;
    this.name = name;
    this.breed = breed;
  }
   set Age(age: number){
    this.age = age;
  }

  get Age(): number {
    return this.age;
  }

 set Name(name: string){
    this.name = name;
  }

  get Name(): string {
    return this.name;
  }

 set Breed(breed: string){
    this.breed = breed;
  }
  
  get Breed(): string {
    return this.breed;
  }
 getInfo(): string {
      return `Имя: ${this.name}; Порода: ${this.breed}; Возраст: ${this.age}.`
    }   
}
