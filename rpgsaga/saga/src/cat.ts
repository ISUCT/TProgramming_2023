export class Cat {
  private theAge: number;
  private theName: string;
  private theBreed: string;
  private theWeight: number;

  constructor(age: number, name: string, breed: string, weight: number) {
    this.theAge = age;
    this.theName = name;
    this.theBreed = breed;
    this.theWeight = weight;
  }
   set Age(age: number){
    this.theAge = age;
  }

  get Age(): number {
    return this.theAge;
  }

 set Name(name: string){
    this.theName = name;
  }

  get Name(): string {
    return this.theName;
  }

 set Breed(breed: string){
    this.theBreed = breed;
  }
  
  get Breed(): string {
    return this.theBreed;
  }
  set Weight(weight: number){
    this.theWeight = weight;
  }

  get Weight(): number{
    return this.theWeight;
  }
 getInfo(): string {
      return `Имя: ${this.theName}; Порода: ${this.theBreed}; Возраст: ${this.theAge}; Вес:${this.theWeight}.`
    }   
}
