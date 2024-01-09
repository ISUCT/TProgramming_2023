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
        if (MoveAction[0] == 'damage') {
            console.log((`${firstplayer} deal ${MoveAction[1]} damage to enemy ${secondplayer}`));
        }else{
            console.log((`${firstplayer} imposed ${MoveAction[3]} on ${secondplayer}`));
        } 
      }
      static WriteDagameFromAbility(player){
        console.log(`${player} get ${player.CheckStatus()[2]} damage from enemy's ability`)
      }
}