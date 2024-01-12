import { Hero } from "./hero";

export class Wizard extends Hero{
    constructor(name: string, heroType = "Маг", abilName = "Обворожение"){
        super(name, heroType, abilName)
    }

    dealDamage(hero: Hero): number {
        hero.curHealth -= this.strength
        return this.strength
    }

    ability(hero: Hero): number {
        hero.stunned = true
        return 0
    }
}   

