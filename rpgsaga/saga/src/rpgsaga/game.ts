import { Hero } from "./hero";
import { Wizard } from "./wizard";
import { Knight } from "./knight";
import { Archer } from "./archer";
import { getRandomNumber } from "./getRandomNumber";
import { Logger } from "./logger";

export class Game {
    
    heroAmount: number
    heros: Hero[] = []

    readonly playersNames = ['Аэлен', 'Лорэнд', 'Эйраин', 'Аланор', 'Аластар', 
    'Арон', 'Кайл', 'Эрик', 'Артур', 'Ричард',
    'Глен', 'Торин', 'Дурин', 'Гимли', 'Бильбо',
    'Грох', 'Урк', 'Бох', 'Крок', 'Тух', 'Аль-Мухан']

    constructor(heroAmount: number){
        this.heroAmount = heroAmount

        for (let i = 0; i < heroAmount; i++){
            const heroType = getRandomNumber(0, 2)
            let hero: Hero
            if (heroType === 0){
                hero = new Knight(this.playersNames[getRandomNumber(0, this.playersNames.length)])
                this.heros.push(hero)
            } else if (heroType === 1) {
                hero = new Wizard(this.playersNames[getRandomNumber(0, this.playersNames.length)])
                this.heros.push(hero)
            } else if (heroType === 2) {
                hero = new Archer(this.playersNames[getRandomNumber(0, this.playersNames.length)])
                this.heros.push(hero)
            }
        }
    }

    beginning(){

        let roundCounter = 1

        while (this.heros.length > 1) {
            Logger.roundCounter(roundCounter)

            let win: Hero[]= []

            for (let i = 0; i < this.heros.length - 1; i += 2){
                //каждый кон сбрасываем значения к исходным
                this.heros[i].curHealth = this.heros[i].initialHealth
                this.heros[i + 1].curHealth = this.heros[i + 1].initialHealth

                this.heros[i].useAbitlity = false
                this.heros[i + 1].useAbitlity = false

                this.heros[i].tickDamage = 0
                this.heros[i + 1].tickDamage = 0
                //героев, которые победили добавляем в массив
                win.push(this.battle(this.heros[i], this.heros[i + 1]))
                console.log()
            }

            this.heros = win
            roundCounter++
        }
    }

    battle(firstHero: Hero, secondHero: Hero){
        Logger.announcementHero(firstHero, secondHero) 
        
        let role = false
        
        while (firstHero.curHealth > 0 && secondHero.curHealth > 0){
            let attaking: Hero
            let defending: Hero
            //Если role = true, то первый игрок атакует, иначе второй
            if (role) {
                attaking = secondHero
            } else {
                attaking = firstHero
            }
            //Если role = true, то второй игрок защищается, иначе первый
            if (role) {
                defending = firstHero
            } else {
                defending = secondHero
            }
            //Если атакующий в стане
            if (attaking.stunned){
                Logger.stunned(attaking)
                attaking.stunned = false
            } else {
                let abilChance = getRandomNumber(0, 1)
                //Если выпала возможность применить способность
                if (abilChance){
                    //Если способность не была применена раньше
                    if (attaking.useAbitlity){
                        let damageValue = attaking.dealDamage(defending)
                        Logger.dealDamage(attaking, defending, damageValue)
                        if (defending.curHealth <= 0){
                            Logger.heroDeath(defending)
                            return attaking
                        }
                    //Если способность не была раньше не была применена
                    } else {
                        let damageValue = attaking.ability(defending)
                        Logger.useAbility(attaking, defending, damageValue)
                        if (defending.curHealth <= 0){
                            Logger.heroDeath(defending)
                            return attaking
                        }
                    }
                //Если не выпала возможность применить способность
                } else {
                    let damageValue = attaking.dealDamage(defending)
                    Logger.dealDamage(attaking, defending, damageValue)
                    if (defending.curHealth <= 0){
                        Logger.heroDeath(defending)
                        return attaking
                    }
                }
            }
            //Если атакующий сгорел
            if (attaking.tickDamage > 0){
                attaking.curHealth -= attaking.tickDamage
                Logger.burning(attaking)

                if (attaking.curHealth <= 0){
                    Logger.heroDeath(attaking)
                    return defending
                }
            }
            role = !role
        }
    }
}