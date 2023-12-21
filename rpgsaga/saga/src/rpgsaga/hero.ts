import { Logger } from "./logger";

export abstract class Hero {
    abstract heroClass: string
    abstract useAbil(enemy: Hero): void;

    name: string
    strength: number
    fullHP: number
    curHP: number
    usedAbil: boolean = false

    logger: Logger
    
    constructor(name: string, strength: number, HP: number){
        this.name = name
        this.strength = strength
        this.fullHP = HP
        this.curHP = HP
    }

    heroRecharge(enemy: Hero){
        this.curHP = this.fullHP
        this.usedAbil = false
    }

    getHit(damage: number, enemy: Hero, showLogger = true){
        this.curHP -= damage

        if (showLogger){
            this.logger.logger(`${this.heroClass, this.name} получает урон от ${enemy.heroClass, enemy.name} в размере ${damage} единиц`)
        }
    }

    takeHit(enemy: Hero){
        enemy.getHit(this.strength, this)
    }
}