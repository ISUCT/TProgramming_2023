import {getRandomNumber} from "./getRandomNumber"
export abstract class Hero{
    name: string
    initialHealth: number
    curHealth: number
    strength: number
    tickDamage: number
    heroType: string
    abilName: string
    useAbitlity = false
    stunned = false

    readonly healthPoint = [50, 75, 100]

    constructor(name: string, type: string, abilName){
        this.name = name
        this.initialHealth = this.healthPoint[getRandomNumber(0, this.healthPoint.length-1)]
        this.curHealth = this.initialHealth
        this.strength = getRandomNumber(2, 25)
        this.heroType = type
        this.abilName = abilName
        this.tickDamage = 0
    }

    abstract ability(hero : Hero): number

    abstract dealDamage(hero : Hero): number
}