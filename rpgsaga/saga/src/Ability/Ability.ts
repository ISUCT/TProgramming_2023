export enum abilityType{
    DAMAGE, 
    HEAL,
}
export interface Ability{
    id: number;
    name: string; 
    type: abilityType;
    power: number;
    targetIsEnemy: boolean; 
}