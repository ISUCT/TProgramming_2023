import { Ability } from "../Ability";

export class Strike implements Ability{
    id: 1;
    name: "Удар";
    type: 0;
    power: 1;
    targetIsEnemy: true;
    constructor(name: "Удар", type: 0, power: 1, targetIsEnemy: true){
        this.name = name;
        this.type = type;
        this.power = power;
        this.targetIsEnemy = targetIsEnemy;
    }
}