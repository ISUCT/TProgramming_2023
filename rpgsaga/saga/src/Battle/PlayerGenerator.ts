import { Archer, Knight, Mage } from "../Player/Classes/Classes";
import { randomNumber } from "../Sources/Random";
import { randomStatsEdges } from "../Sources/RandomStats";
import { None } from "../Ability/Effect";

export enum Classes {
    Warrior,
    Archer,
    Mage
}
export class PlayerGenerator {
    public static generatePlayer(Names: string[]) {
        let player;
        let playerClass = randomNumber(0, 2);
        let playerName = Names[randomNumber(0, Names.length-1)]
        switch (playerClass) {
            case Classes.Warrior:
                player = new Knight(playerName, randomNumber(randomStatsEdges.knight.minAtk, randomStatsEdges.knight.maxAtk), randomNumber(randomStatsEdges.knight.minHp, randomStatsEdges.knight.maxHp), None);
                break;
            case Classes.Mage:
                player = new Mage(playerName, randomNumber(randomStatsEdges.mage.minAtk, randomStatsEdges.mage.maxAtk), randomNumber(randomStatsEdges.mage.minHp, randomStatsEdges.mage.maxHp), None);
                break;
            case Classes.Archer:
                player = new Archer(playerName, randomNumber(randomStatsEdges.archer.minAtk, randomStatsEdges.archer.maxAtk), randomNumber(randomStatsEdges.archer.minHp, randomStatsEdges.archer.maxHp), None);
                break;
            default:
                throw new Error("undefined player type")
        }
        return player;
    }
}