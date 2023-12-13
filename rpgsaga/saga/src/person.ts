export class Person {
  public name: string;
  public age: number;
  public gender: 'man' | 'woman';
  
  
  constructor(name: string, age: number, gender: 'man' | 'woman' = 'man') {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }

    static createMan(name: string, age: number): Person {
      return new Person( name, age, 'man');
    }
  
    static createWoman(name: string, age: number): Person {
      return new Person(name, age, 'woman');
    }
  
    greet(): string {
      return `Hello, my name is ${this.name}. I am ${this.age} years old and I am a ${this.gender}.`;
    }
  
    isAdult(): boolean {
      return this.age >= 18;
    }
  
    toString(): string {
      return `Person: ${this.name}, ${this.age}, ${this.gender}`;
    }
  }
  

  