import { Game } from './game';
import { getUserInput, receiveQuantityOfPlayers } from './userInput';

const quantityOfPlayers: number = receiveQuantityOfPlayers(getUserInput());

const game = new Game(quantityOfPlayers);
game.start();
