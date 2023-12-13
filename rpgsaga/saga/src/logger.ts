import { Unit } from "./unit";

export class Logger{
    static getCharacterParams(unit: Unit){
        return `${unit.classType} ${unit.getName}`
    }

    static startMessage(){
        console.log('Fight started now');
    }

    static characterBurn(character: Unit, firedamage) {
        console.log(`${this.getCharacterParams(character).toString()} burn and take ${firedamage} damage`);
    }

    static fighting(character1: Unit, character2: Unit){
        if (character1 != character2){
            while(character1.getHealth > 0 && character2.getHealth > 0){

                if (character1.getHealth > 0){
                    character2.attack(character1);
                }
                if (character1.getHealth <= 0){
                    console.log(`${character2.getName} wins!`);
                    console.log()
                }
                if (character2.getHealth > 0){
                    character1.attack(character2);
                }
                if (character2.getHealth <= 0){
                    console.log(`${character1.getName} wins!`);
                    console.log();
                }
            }
        }
    }
}