import { Rabbit } from './rabbit';

const myRabbit = new Rabbit(5, 'black', 'Dutch dwarf');
myRabbit.age = 10;
console.log(myRabbit.age);
myRabbit.name = 'Malebu';
console.log(myRabbit.name);

console.log(myRabbit);
