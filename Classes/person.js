class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  
    introduce() {
      console.log(`I am ${this.age} years old`);
    }
  
    celebrateBirthday() {
      this.age++;
      console.log(`Happy birthday! Now I am ${this.age} years old`);
    }
  }
  
  // Пример использования:
  
  const person1 = new Person('John', 25);
  person1.sayHello(); // Hello, my name is John
  person1.introduce(); // I am 25 years old
  person1.celebrateBirthday(); // Happy birthday! Now I am 26 years old
  
  const person2 = new Person('Alice', 30);
  person2.sayHello(); // Hello, my name is Alice
  person2.introduce(); // I am 30 years old
  person2.celebrateBirthday(); // Happy birthday! Now I am 31 years old