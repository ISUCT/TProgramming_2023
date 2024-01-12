import { Hero } from "./hero";

export class Logger{
    static roundCounter(roundCounter: number){
        console.log(`Кон ${roundCounter}`)
    }

    static announcementHero(firstHero: Hero, secondHero: Hero){
        console.log(`${firstHero.name} - ${firstHero.heroType} (Сила: ${firstHero.strength}, Здоровье:${firstHero.curHealth} ) против ${secondHero.name} - ${secondHero.heroType} (Сила: ${secondHero.strength}, Здоровье:${secondHero.curHealth} )` )
    }

    static stunned(hero: Hero){
        console.log(`${hero.name} - ${hero.heroType} пропускает ход`)
    }

    static useAbility(firstHero: Hero, secondHero: Hero, damage: number){
        console.log(`${firstHero.name} - ${firstHero.heroType} применяет ${firstHero.abilName} и нанонсит урон в размере ${damage} единиц противнику ${secondHero.name} - ${secondHero.heroType}`)
    }

    static dealDamage(firstHero: Hero, secondHero: Hero, damage: number){
        console.log(`${firstHero.name} - ${firstHero.heroType} нанонсит урон в размере ${damage} единиц противнику ${secondHero.name} - ${secondHero.heroType}`)
    }

    static heroDeath(hero: Hero){
        console.log(`${hero.name} - ${hero.heroType} погиб`)
    }

    static burning(hero: Hero){
        console.log(`${hero.name} - ${hero.heroType} получает урон в размере ${hero.tickDamage} единиц`)
    }
}