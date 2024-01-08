import { Archer } from "../Player/Classes/Archer";
import { Knight } from "../Player/Classes/Knight";
import { Mage } from "../Player/Classes/Mage";
import { Player } from "../Player/Player";
import { randomNumber } from "../Random/Random";
import { Names } from "../Sources/Names";
import { randomStatsEdges } from "../Sources/RandomStats";

export enum Classes {
    Warrior,
    Archer,
    Mage
}
export class PlayerGenerator {
    public static generatePlayer(): Player {
        let player;
        let playerClass = randomNumber(0, 2);
        let playerName = Names[randomNumber(0, Names.length-1)]
        switch (playerClass) {
            case Classes.Warrior:
                player = new Knight(playerName, randomNumber(randomStatsEdges.knight.minAtk, randomStatsEdges.knight.maxAtk), randomNumber(randomStatsEdges.knight.minHp, randomStatsEdges.knight.maxHp));
                break;
            case Classes.Mage:
                player = new Mage(playerName, randomNumber(randomStatsEdges.mage.minAtk, randomStatsEdges.mage.maxAtk), randomNumber(randomStatsEdges.mage.minHp, randomStatsEdges.mage.maxHp));
                break;
            case Classes.Archer:
                player = new Archer(playerName, randomNumber(randomStatsEdges.archer.minAtk, randomStatsEdges.archer.maxAtk), randomNumber(randomStatsEdges.archer.minHp, randomStatsEdges.archer.maxHp));
                break;
            default:
                throw new Error("undefined player type")
        }
        return player;
    }
}