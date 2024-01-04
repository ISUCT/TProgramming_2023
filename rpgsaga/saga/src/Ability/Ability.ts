export enum abilityType{
    DAMAGE, 
    HEAL,
}
export interface Ability{
    name: string; 
    type: abilityType;
    power: number;
    targetIsEnemy: boolean; 
}