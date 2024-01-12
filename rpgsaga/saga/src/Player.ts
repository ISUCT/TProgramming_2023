export function randomInt(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
export abstract class Player{
    BasicHealth: number;
    Health: number;
    Name: string;
    Strength: number;
    Specialization: string;
    Stun: boolean = false;
    BurnDamage: number = 0;
    AbilityUsed: boolean = false;
    AbilityName: string;


    protected constructor(Name: string, Specialization: string, AbilityName: string) {
        this.BasicHealth = randomInt(75, 100);
        this.Name = Name;
        this.Health = this.BasicHealth;
        this.Strength = randomInt(5, 15);
        this.Specialization = Specialization;
        this.AbilityName = AbilityName;
    }
    abstract attackDamage(player: Player): number;
    abstract abilityDamage(player: Player): number;
}
