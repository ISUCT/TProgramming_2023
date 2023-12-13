import { Unit } from "../unit";
import { Logger } from "../logger";
import { fireDamage } from "../stringConsts";

export class Archer extends Unit{

    minHealth = 7;
    maxHealth = 20;

    classType = 'Archer';

    generateUnit(): void {
        super.generateUnit();
    }

    attack(enemy: Unit): void {
        if (enemy.isBurn){
            console.log(`${Logger.getCharacterParams(this).toString()} attack ${Logger.getCharacterParams(enemy).toString()}`);
            enemy.burnInFigth();
            console.log(`${this.getName} attack ${enemy.getName}`);
            console.log(`${this.getName} damage = ${this.getDamage}`);
            enemy.takeDamage(this.getDamage);
            console.log(`${enemy.getName} health became ${enemy.getHealth}`)
        }
        else{
            console.log(`${this.getName} use fire arrows and ${enemy.getName} became burning`);
            super.attack(enemy);
            enemy.becameBurning();
        }
    }

    constructor(){
        super();
    }
   
}