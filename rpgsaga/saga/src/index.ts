import { Statuses } from './saga/banks/statuses';
import { PlayerGenerator } from './saga/playerGenerator';
// import { Television } from './tv';
// import { Channel } from './channel';
import { Tournament } from './saga/tournaments';

// const channels: Array<Channel> = [
//   new Channel('Первый канал'),
//   new Channel('Россия 1'),
//   new Channel('ТВЦ'),
//   new Channel('2х2'),
//   new Channel('Cartoon Network'),
// ];

// const tv = new Television('Sony', 'BH-200', 'SVD2349874324XD', channels);

// console.log(tv.printTV());

// tv.currentChannel = 2;
// console.log(tv.printTV());

// console.log(tv.prevChannel());
// console.log(tv.prevChannel());
// console.log(tv.prevChannel());
// console.log(tv.prevChannel());

const players = PlayerGenerator.createPlayers(1, 1, 2);
const tournament = new Tournament(players, true);
tournament.startTournament();

const status = Statuses.burn;
console.log(status);
