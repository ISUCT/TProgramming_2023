<<<<<<< HEAD
import {Player, Fighter, Warlock, Ranger, Logger, Game} from './classes';

const a = new Game(0, 4);
a.start();
=======
console.log('Before timeout');
const res = fetch(`https://cat-fact.herokuapp.com/facts/random`);
console.log(res);
res
  .then(result => {
    console.log('Got answer');
    return result.json();
  })
  .then(result => {
    console.log('Got json');
    console.log(result);
  });

const promise = new Promise((res, rej) => {
  setTimeout(() => {
    console.log('resolved');
    res(2 + 2);
  }, 1000);
});
console.log(promise);
promise.then(res => console.log(`as result we got ${res}`));

setTimeout(() => {
  console.log(promise);
}, 2000);
console.log('After timeout');

const summ = (n) => {
    return (m) => n + m;
}

let a = summ;
console.log(a);
a = summ(5);
let c = summ(10);
console.log(a);
let b = a(6);
console.log(b);
console.log(c(3));
>>>>>>> upstream/master
