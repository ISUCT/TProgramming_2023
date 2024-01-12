import {Player} from "./Player";

export class Logger{
    static attackDamage(p1: Player, p2: Player, damage: number){
        console.log(`${p1.Name} наносит урон ${damage} врагу${p2.Name}.`);
    }
    static abilityDamage(p1: Player, p2: Player, damage: number){
        console.log(`${p1.Name} использует способность ${p1.AbilityName} и наносит ${damage} врагу ${p2.Name}.`);

    }
    static death(player: Player){
        console.log(`${player.Name} повержен!`);
    }
    static roundStart(p1: Player, p2:Player){
        console.log(`${p1.Specialization} ${p1.Name} против ${p2.Specialization} ${p2.Name}`)
    }
    static stun(player: Player){
        console.log(`${player.Name} замерзает и пропускает ход`);
    }
}
