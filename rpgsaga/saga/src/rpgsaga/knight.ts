import { Hero } from "./hero";

export class Knight extends Hero {

    damageMultiplier: number

    constructor(name: string, heroType = "Рыцарь", abilName = "Удар возместия", damageMultiplier = 1.3){
        super(name, heroType, abilName)

        this.damageMultiplier = damageMultiplier
    }

    dealDamage(hero: Hero, strenght = this.strength): number {
        hero.curHealth -= strenght
        return strenght
    }

    ability(hero : Hero): number {
        this.dealDamage(hero, this.strength * this.damageMultiplier)
        return Math.floor(this.strength * this.damageMultiplier)
    }
}