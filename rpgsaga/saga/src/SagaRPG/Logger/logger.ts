import { Player } from "../Player/player";

export class Logger{
    static WriteWinner(winner: Player){
        console.log()
        console.log(`${winner} win this game`)
        console.log()
    }
    static WritebattleNumber(number){
        console.log(`Battle № ${number}`)
    }
    static WritebattleMembers(battleMembers: Player[]){
        console.log(`${battleMembers[0]} VS ${battleMembers[1]}`);
      }

    static WriteDeath(looser: Player): void {
        console.log(`${looser} dead`);
      }
      static WriteAction(firstplayer, secondplayer, MoveAction){
        console.log((`${firstplayer} deal ${MoveAction} damage to enemy ${secondplayer}`));
      }
}