import { Unit } from "../unit";
import { Logger } from "../logger";


export class Warrior extends Unit{
    minHealth = 10;
    maxHealth = 30;
    
    classType = 'Warrior';

    generateUnit(): void {
        super.generateUnit();
    }
    
    attack(enemy: Unit): void {
        if(this.isSkillUsed){
            super.attack(enemy);
        }
        else{
            console.log(`${this.classType} ${this.getName} attack ${Logger.getCharacterParams(enemy).toString()}`);
        console.log(`${this.getName} use ultimate and it's damage became = ${this.getDamage + 10}`);
        enemy.takeDamage(this.getDamage + 10);
        console.log(`${enemy.getName} health became ${enemy.getHealth}`);
        this.useSkill();
        }
    }

    constructor(){
        super();
    }
}