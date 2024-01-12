import { Archer, Knight, Wizard } from './heroes'
import { randomInt } from './utils'
import { Player } from './player'
import { shuffle } from './utils'
import { Logger } from './logger'


export class Game {
    playersCount: number
    protected players: Player[] = []
    protected readonly playersNames = ['Эльдар', 'Артур', 'Гэндальф', 'Вильямс', 'Шадоухарт']

    constructor(playersCount: number) {
        this.playersCount = playersCount

        for (let i = 0; i < playersCount; i++){
            const playerType = randomInt(0, 2)
            const playerName = randomInt(0, 3)
            let player: Player
            switch (playerType) {
                case 0:
                    player = new Knight(this.playersNames[playerName])
                    break
                case 1:
                    player = new Archer(this.playersNames[playerName])
                    break
                case 2:
                    player = new Wizard(this.playersNames[playerName])
            }
            this.players.push(player)
        }
    }

    start() {
        let shuffledPlayers = shuffle(this.players)
        let count = 1
        while(shuffledPlayers.length > 1) {
            const winners: Player[] = []
            console.log(`Кон ${count}.`)
            for (let i = 0; i < shuffledPlayers.length - 1; i += 2) {
                shuffledPlayers[i].health = shuffledPlayers[i].full_health
                shuffledPlayers[i].abilityAbsense = false
                shuffledPlayers[i].tickDamage = 0

                shuffledPlayers[i + 1].health = shuffledPlayers[i + 1].full_health 
                shuffledPlayers[i + 1].abilityAbsense = false
                shuffledPlayers[i + 1].tickDamage = 0

                winners.push(this.fight(shuffledPlayers[i], shuffledPlayers[i + 1]))
                console.log()
            }
            shuffledPlayers = winners
            count += 1
        }
    }

    fight(player1: Player, player2: Player) {
        Logger.announce(player1, player2)
        let turn = false;
        while (player1.health > 0 && player2.health > 0){
            const attackingPlayer = turn ? player2 : player1
            const defendingPlayer = turn ? player1 : player2
            if (attackingPlayer.stunned){  // пропуск хода если игрок в стане
                Logger.stunned(attackingPlayer)
                attackingPlayer.stunned = false
            } else {
                if (randomInt(0, 1)){  // если применяется способность
                    if (attackingPlayer.abilityAbsense){  // если стрелы уже использовались
                        let damage = attackingPlayer.dealDmg(defendingPlayer)
                        Logger.makeDamage(attackingPlayer, defendingPlayer, damage)
                        if (defendingPlayer.health <= 0) {  // если у защищающегося закончилось хп
                            Logger.death(defendingPlayer)
                            return attackingPlayer
                        }
                    } else {  // если стрелы не использовались
                        let damage = attackingPlayer.ability(defendingPlayer)
                        Logger.cast(attackingPlayer, defendingPlayer, damage)
                        if (defendingPlayer.health <= 0) {  // если у защищающегося закончилось хп
                            Logger.death(defendingPlayer)
                            return attackingPlayer
                        }
                    }
                } else {  // если способность не применяется
                    let damage = attackingPlayer.dealDmg(defendingPlayer)
                    Logger.makeDamage(attackingPlayer, defendingPlayer, damage)
                    if (defendingPlayer.health <= 0) {  // если у защищающегося закончилось хп
                        Logger.death(defendingPlayer)
                        return attackingPlayer
                    }
                }
            }
            if (attackingPlayer.tickDamage > 0){
                attackingPlayer.health -= attackingPlayer.tickDamage
                Logger.ticked(attackingPlayer)
                if (attackingPlayer.health <= 0) {  // если у защищающегося закончилось хп
                    Logger.death(attackingPlayer)
                    return defendingPlayer
                }
            }
            if (turn){  // смена хода
                turn = false
            } else {
                turn = true
            }
        }
    }
}