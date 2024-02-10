import * as promptSync from 'prompt-sync';

export function hasOnlyDigits(value): boolean {
  return /^-?\d+$/.test(value);
}

export function getUserInput(fakeUserInput?: string): string {
  const prompt = promptSync();

  let quantityOfPlayers: string;

  if (typeof fakeUserInput === 'undefined') {
    quantityOfPlayers = prompt('Enter the amount of players (bigger than 1): ');
  } else {
    quantityOfPlayers = fakeUserInput;
  }

  return quantityOfPlayers;
}

export function receiveQuantityOfPlayers(quantityOfPlayers: string): number {
  if (hasOnlyDigits(quantityOfPlayers)) {
    return Number(quantityOfPlayers);
  } else {
    throw Error('Incorrect input, try again!');
  }
}
