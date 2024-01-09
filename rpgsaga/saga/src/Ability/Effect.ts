export class Effect{
    name: string;
    duration: number;
    damageOnTick: number;
    stun: boolean;
    constructor(Name: string, Duration: number, DamageOnTick: number, Stun: boolean){
        this.name = Name;
        this.duration = Duration;
        this.damageOnTick = DamageOnTick;
        this.stun = Stun;
    }
};
export const Freeze = new Effect("Freeze", 2, 0, true);
export const None = new Effect("None", 0, 0, false);