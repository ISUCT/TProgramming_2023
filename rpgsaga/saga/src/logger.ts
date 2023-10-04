import { Character } from "./character";
import color from 'colorts';

export class Logger {
    static battleAnnouncement(firstEnemy: Character, secondEnemy: Character) {
        console.log("\n" + color(this.getFullCharactername(firstEnemy) + " vs " + this.getFullCharactername(secondEnemy)).inverse.toString());
    }

    static numberIsOddErrorMessage(){
        console.error(this.errorMessage("Ошибка! Число должно быть чётным!"));
    }

    static isNotANumberMessage(){
        console.error(this.errorMessage("Вы ввели не число!"));
    }

    static startGameMessage(){
        console.log("Добро пожаловать на кровавю арену смерти! Давно мы не устраивали эпичных сражений!");
        console.log("\n");
        console.log("Введите количество игроков: ")
    }
    
    static initiativeMessage(winnerPass: number, looserPass: number, winner: Character, loser: Character) {
        console.log(winner.characterName);
        console.log(this.paintHeaderAction("Проверка инициативы..."));
        console.log(this.paintLooserPass(loser, looserPass.toString()));
        console.log(this.paintWinnerPass(winner, winnerPass.toString()));
        console.log(this.paintResultAction(loser.characterName + ' замешкивается, ' + winner.characterName + ' реагирует быстрее'));
    }

    static startAttackMessage(assaulter: Character){
        console.log(this.paintHeaderAction(this.getFullCharactername(assaulter) + " собирается атаковать..."));
    }

    static successAttackMessage(assaulter: Character, attackStrength: number, defending:Character, dodgeStrength:number, damage:number) {
        console.log(this.paintLooserPass(defending, dodgeStrength.toString()));
        console.log(this.paintWinnerPass(assaulter, attackStrength.toString()));
        console.log(this.paintResultAction(this.getFullCharactername(assaulter) + " успешно наносит урон в количестве: " + color(damage.toString()).red));
    }

    static endFightMessage(winner:Character, looser:Character){
        console.log(this.paintResultAction(this.getFullCharactername(looser) + " падает без сознания"))
        console.log(color(this.getFullCharactername(winner) + " победил!").bgYellow.toString());
    }

    static failedAttackMessage(assaulter: Character, attackStrength: number, defending:Character, dodgeStrength:number) {
        console.log(this.paintWinnerPass(defending, dodgeStrength.toString()));
        console.log(this.paintLooserPass(assaulter, attackStrength.toString()));
        console.log(this.paintResultAction(this.getFullCharactername(defending) + " уворачивается"));
    }

    static roundResultMessage(winners:Character[], loosers:Character[], currentRound: number){
        console.log(color("\nРЕЗУЛЬТАТЫ " + currentRound +" РАУНДА").inverse.bold.toString());
        winners.forEach(winner => {
            console.log(color(this.getFullCharactername(winner)).inverse.toString());
        });
        loosers.forEach(looser => {
            console.log(color(this.getFullCharactername(looser)).strikethrough.toString());
        });
    }

    static EndGame(winner:Character){
        console.log(color('\n' + this.getFullCharactername(winner) + ' - ПОБЕДИТЕЛЬ ТУРНИРА').bgRed.toString())

    }

    static UseAssasinSkill(assasin:Character, enemy:Character){
        console.log(this.paintResultAction(`${this.getFullCharactername(assasin)} исчезает и готовится нанести удар из тени, ${this.getFullCharactername(enemy)} пытается найти противника и пропускает свой ход`))
    }

    static UseKnightSkill(knight:Character, enemy:Character, damage:Number){
        console.log(this.paintResultAction(`${this.getFullCharactername(knight)} наносит сокрушительный удар, ${this.getFullCharactername(enemy)} получает ${damage} урона`))
    }

    static errorMessage(message:string):String{
        return color(message).red.toString();
    }

    static paintHeaderAction(message:string):String{
        return color(message).white.bold.underline.toString();
    }

    static paintLooserPass(character: Character, result: string):String {
        return (this.getFullCharactername(character) + ": " +color(result).red.toString());
    }

    static paintWinnerPass(character: Character, result: string):String {
        return (this.getFullCharactername(character) + ": " +color(result).green.toString());
    }

    static paintResultAction(message:string):String{
        return color(message).white.bold.italic.toString();
    }

    static getFullCharactername(character:Character){
        return ("(" + character.className + ") " + character.characterName);
    }
}