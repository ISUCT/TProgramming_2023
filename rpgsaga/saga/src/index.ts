import * as promptSync from 'prompt-sync';

import { Game } from './game';

const prompt = promptSync();

const quantityOfPlayers: number = parseInt(prompt('Enter the amount of players (bigger than 1): '));

if (quantityOfPlayers > 1) {
  const game = new Game(quantityOfPlayers);
  game.start();
} else {
  console.log('Incorrect amount of players, try again!');
}
