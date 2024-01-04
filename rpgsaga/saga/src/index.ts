import { Battle } from "./Battle";
import { Knight } from "./Player/Classes/Knight";
let Player0 = new Knight("L", 1, 5);
let Player1 = new Knight("K", 1, 3);
let _Battle = new Battle(Player0, Player1);
_Battle.start();


