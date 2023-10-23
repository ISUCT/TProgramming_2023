import { Archer, Knight, Mage } from './saga/classes';
import { Battle } from './saga/battle';
import { Television, Channel } from './tv';
import { Tournament } from './saga/tournaments';

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

const p1 = new Knight(12, 4, 'Tatsuya');
const p2 = new Mage(11, 2, 'May');
const p3 = new Archer(13, 2, 'Robin');
const p4 = new Mage(10, 3, 'Ann');
const tournament = new Tournament([p1, p2, p3, p4], true);
tournament.startTournament();
