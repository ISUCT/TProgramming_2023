export class Cat {
  Age: number;
  Name: string;
  Breed: string;
  Weight: number;

  constructor(age: number, name: string, breed: string, weight: number) {
    this.Age = age;
    this.Name = name;
    this.Breed = breed;
    this.Weight = weight;
    if (age <= 0 || age > 30){
            throw new Error("Invalid age");
        }
        if (weight <= 0 || weight > 30){
            throw new Error("invalid weight")
        }
  }
 getInfo(): string {
      return `Имя: ${this.theName}; Порода: ${this.theBreed}; Возраст: ${this.theAge}; Вес:${this.theWeight}.`
    }   
}
