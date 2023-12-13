import { Unit } from "../unit";
import { Logger } from "../logger";

export class Magican extends Unit{
    minHealth = 5;
    maxHealth = 15;
    
    classType = 'Magican';

    generateUnit(): void {
        super.generateUnit();
    }
    
    attack(enemy: Unit): void {
        if( this.isSkillUsed){
            super.attack(enemy);

        }
        else{
            console.log(`${this.classType} ${this.getName} attack ${Logger.getCharacterParams(enemy).toString()}`);
            console.log(`${this.getName} use IceFrost and delals ${enemy.getName} cold damage = 5`);
            enemy.takeDamage(5);
            console.log(`${enemy.getName} became frozen and it's health became ${enemy.getHealth}`);
            console.log(`${this.getName} attack ${enemy.getName} with damage: ${this.getDamage}`);
            enemy.takeDamage(this.getDamage);
            console.log(`${enemy.getName} health became ${enemy.getHealth}`);
            this.useSkill();
        }
    }

    constructor(){
        super();
    }
}