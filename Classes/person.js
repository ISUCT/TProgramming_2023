class Person {
    constructor(name, age, gender) {
      if (typeof name !== 'string' || typeof gender !== 'string' || typeof age !== 'number') {
        throw new Error('Invalid argument type');
      }
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
  
    static createMan(name, age) {
      return new Person(name, age, 'man');
    }
  
    static createWoman(name, age) {
      return new Person(name, age, 'woman');
    }
  
    greet() {
      return `Hello, my name is ${this.name}. I am ${this.age} years old and I am a ${this.gender}.`;
    }
  
    isAdult() {
      return this.age >= 18;
    }
  
    toString() {
      return `Person: ${this.name}, ${this.age}, ${this.gender}`;
    }
  }
  
  
  try {
    const person1 = new Person('John', 25, 'man');
    console.log(person1.greet()); // Output: Hello, my name is John. I am 25 years old and I am a man.
    console.log(person1.isAdult()); // Output: true
    console.log(person1.toString()); // Output: Person: John, 25, man
  
    const person2 = Person.createWoman('Jane', 17);
    console.log(person2.greet()); // Output: Hello, my name is Jane. I am 20 years old and I am a woman.
    console.log(person2.isAdult()); // Output: true
    console.log(person2.toString()); // Output: Person: Jane, 20, woman
  
    const person3 = new Person(123, '30', 'man'); // Invalid argument type
  } catch (error) {
    console.log(error.message);
  }
