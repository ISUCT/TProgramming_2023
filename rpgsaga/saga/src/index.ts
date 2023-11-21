import { Person } from './person';

const person1 = new Person('Ben', 17);
console.log(person1.greet()); 
console.log(person1.isAdult()); 
console.log(person1.toString()); 
  
const person2 = Person.createWoman('Kate', 20);
console.log(person2.greet()); 
console.log(person2.isAdult()); 
console.log(person2.toString()); 

