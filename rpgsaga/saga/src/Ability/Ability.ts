import { Effect } from "./Effect";

export enum abilityType{
    ATTACK, 
    HEAL,
}
export class Ability{
    name: string; 
    type: abilityType;
    power: number;
    effect: Effect;
    constructor(Name: string, Type: abilityType, Power: number, Effect: Effect){
        this.name = Name;
        this.type = Type;
        this.power = Power;
        this.effect = Effect;
    }
} 