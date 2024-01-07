import * as promptSync from 'prompt-sync';

import { Game } from './game';

function hasOnlyDigits(value): boolean {
  return /^-?\d+$/.test(value);
}

function receiveQuantityOfPlayers(): number {
  const prompt = promptSync();

  const quantityOfPlayers = prompt('Enter the amount of players (bigger than 1): ');

  if (isInputValid(quantityOfPlayers)) {
    return Number(quantityOfPlayers);
  } else {
    console.log('Incorrect amount of players, try again!');
    return undefined;
  }
}

function isInputValid(quantityOfPlayers: string): boolean {
  if (hasOnlyDigits(quantityOfPlayers) && Number(quantityOfPlayers) > 1) {
    return true;
  }
  return false;
}

const quantityOfPlayers: number = receiveQuantityOfPlayers();

if (typeof quantityOfPlayers !== undefined) {
  const game = new Game(quantityOfPlayers);
  game.start();
}
