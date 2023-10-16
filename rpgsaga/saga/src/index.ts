import { Television, Channel } from './tv';

const channels: Array<Channel> = [
  new Channel('Первый канал'),
  new Channel('Россия 1'),
  new Channel('ТВЦ'),
  new Channel('2х2'),
  new Channel('Cartoon Network'),
];

const tv = new Television('Sony', 'BH-200', 'SVD2349874324XD', channels);

console.log(tv.printedTV());

tv.currentChannel = 2;
console.log(tv.printedTV());

console.log(tv.prevChannel());
console.log(tv.prevChannel());
console.log(tv.prevChannel());
console.log(tv.prevChannel());
/*
Phones example:
import { Phone } from './phone';

const first = new Phone('+7900-000 000 (123)', 1990, 'Телефон 1');
first.year = 1998;

first.year = -1998;
first.call('12345');
first.endCall();

const second = new Phone('+799900000', -5);
// second.name = 'Телефон 2';
console.log(second.year);
second.call('12345');
second.endCall();

console.log(first, second, Phone.phoneCount);
*/
