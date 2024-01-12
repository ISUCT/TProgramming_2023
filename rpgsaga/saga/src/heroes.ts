import { Player } from './player'

export class Knight extends Player {
    constructor(n: string, t = 'Рыцарь', c = "Удар возмездия") {
        super(n, t, c);
    }

    dealDmg(player: Player, s = this.strength): number {
        player.health -= s
        return s
    }

    ability(player: Player): number {
        this.dealDmg(player, this.strength * 1.3)
        return Math.floor(this.strength * 1.3)
    }
}

export class Archer extends Player {
    constructor(n: string, t = "Лучник", c = "Огненные стрелы") {
        super(n, t, c);
    }

    dealDmg(player: Player): number {
        player.health -= (this.strength + player.tickDamage)
        return this.strength + player.tickDamage
    }

    ability(player: Player): number {
        if (this.abilityAbsense){
            this.dealDmg(player)
            return this.dealDmg(player)
        }
        else {
            this.abilityAbsense = true
            player.tickDamage = 2
            return 0
        }
    }
}

export class Wizard extends Player {
    constructor(n: string, t = "Маг", c = "Обворожение") {
        super(n, t, c);
    }

    dealDmg(player: Player): number {
        player.health -= this.strength
        return  this.strength
    }

    ability(player: Player): number {
        player.stunned = true
        return 0
    }
}
