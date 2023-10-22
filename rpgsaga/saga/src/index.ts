import { Knight, Mage } from './saga/classes';
import { Battle } from './saga/battle';
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

const player1 = new Knight(12, 4, 'Tatsuya');
const player2 = new Mage(11, 2, 'May');
const battle = new Battle(player1, player2);
battle.initiate();
