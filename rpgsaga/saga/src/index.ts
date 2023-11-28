import { Rabbit } from './rabbit';

try {
    var myRabbit = new Rabbit(5, 'black', 'Dutch dwarf');
    myRabbit.age = 10;
    console.log(myRabbit.age);
} catch(e) {
    console.log(e);
}


myRabbit.name = 'Malebu';
console.log(myRabbit.name);
myRabbit.voice();
myRabbit.toString();

console.log(myRabbit);
