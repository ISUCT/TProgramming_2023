import { Cat } from './cat';
import {Game} from "./Game";

const Cat1 = new Cat (8, 'Кеша', 'Шотландский вислоухий', 7);
Cat1.getInfo()

const game = new Game(8);
game.start();
