import { Player } from "./player";

export class Logger {

    static announce(player1: Player, player2: Player) {
        console.log(`(${player1.type}) ${player1.name} vs (${player2.type}) ${player2.name}`)
    }

    static makeDamage(player1: Player, player2: Player, damage: number) {
        console.log(`(${player1.type}) ${player1.name} наносит урон ${damage} противнику (${player2.type}) ${player2.name}`)
    }

    static cast(player1: Player, player2: Player, damage: number) {
        console.log(`(${player1.type}) ${player1.name} использует (${player1.castName}) и наносит урон ${damage} противнику (${player2.type}) ${player2.name}`)
    }

    static stunned(player: Player){
        console.log(`(${player.type}) ${player.name} пропускает ход`)
    }

    static death(player: Player){
        console.log(`(${player.type}) ${player.name} погибает`)
    }

    static ticked(player: Player){
        console.log(`(${player.type}) ${player.name} получает ${player.tickDamage} урона от горения`)
    }
}