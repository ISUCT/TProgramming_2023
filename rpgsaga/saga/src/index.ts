import { Game } from './game';
import { names } from './names';

// Вызов игры
const fighters = Game.generatePlayers(2, names);
Game.startGame(fighters);

// Отладка баланса
// let archers = 0;
// let warriors = 0;
// let mages = 0;
// let berserkers = 0;
// let brawlers = 0;
// let paladins = 0;

// for (let i = 0; i < 1; i++) {
//   const namesarr: string[] = names;
//   const fighters = Game.generatePlayers(2, namesarr);
//   Game.startGame(fighters);
//   switch (fighters[0].className) {
//     case 'Воин':
//       warriors++;
//       break;
//     case 'Лучник':
//       archers++;
//       break;
//     case 'Маг':
//       mages++;
//       break;
//     case 'Берсерк':
//       berserkers++;
//       break;
//     case 'Боец':
//       brawlers++;
//       break;
//     case 'Паладин':
//       paladins++;
//       break;
//   }
// }

// console.log(`Воины: ${warriors}`);
// console.log(`Лучники: ${archers}`);
// console.log(`Маги: ${mages}`);
// console.log(`Берсерки: ${berserkers}`);
// console.log(`Паладины: ${paladins}`);
