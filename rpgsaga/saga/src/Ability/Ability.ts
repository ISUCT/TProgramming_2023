export enum abilityType{
    ATTACK, 
    HEAL,
}
export class Ability{
    name: string; 
    type: abilityType;
    power: number;
    constructor(Name: string, Type: abilityType, Power: number){
        this.name = Name;
        this.type = Type;
        this.power = Power;
    }
} 