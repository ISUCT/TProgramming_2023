//import * as readline from 'readline';
import { Car } from "./car";
import { Bicycle } from './bicycle';



let car1 = new Car(2005, 45, 91, "Toyota");
car1.speed = 100;
console.log(car1.speed);
console.log(car1.signal());
console.log(car1.brakePathLength());
console.log(car1.willCrash(50));
console.log(`${car1}`)

let bike1 = new Bicycle(1500, 2010, 45, "BMX");
console.log(`${bike1}`)

const arr = [car1, bike1];
for (let i of arr) {
    console.log(i.signal());
}



//  let players = Generator.generatePlayers(10);
//  for (let i of players) {
//      console.log(`${i}`);
//  }



// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// let answer = ""
// rl.question('Is this example useful? [y/n] ', (ans) => {
//     answer = ans
//     console.log(ans);
//     rl.close();

// })

// console.log((answer))


