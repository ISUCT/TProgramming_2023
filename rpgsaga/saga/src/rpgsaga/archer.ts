import { Hero } from "./hero"

export class Archer extends Hero{
    constructor(name: string, heroType = "Лучник", abilName = "Огненные стрелы"){
        super(name, heroType, abilName)
    }

    dealDamage(hero: Hero): number {
        hero.curHealth -= (this.strength + hero.tickDamage)
        return this.strength + hero.tickDamage
    }

    ability(hero: Hero): number {
        if (this.useAbitlity){
            this.dealDamage(hero)
            return this.dealDamage(hero)
        } else {
            this.useAbitlity = true
            hero.tickDamage = 1.5
            return 0
        }
    }
}