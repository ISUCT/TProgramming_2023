import { Battle } from "./Battle/Battle";
import { PlayerGenerator } from "./Battle/PlayerGenerator";
let p0 = PlayerGenerator.generatePlayer();
let p1 = PlayerGenerator.generatePlayer();
let Battle0 = new Battle(p0, p1);
console.log(Battle0.start())


