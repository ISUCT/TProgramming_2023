import { Logger } from "./logger";
import { Player } from "./player"

export class Knight extends Player {
    public step = 0;
    
    constructor(name: string, hp: number, strength: number) {
        super(name, hp, strength)
        this.specialAttackName = 'Super Strike';
    }

    public specialAttack() {
        this.strenght =  Math.floor(this.strenght * 1.3);
    }

    public burning(p: Player) {
        this.step++;
        this.hp -= 2;
        Logger.logBurningBehavior(p);
    }
}

export class Mage extends Player {
    public step = 0;

    constructor(name: string, hp: number, strength: number) {
        super(name, hp, strength)
        this.specialAttackName = 'Stun';
    }

    public specialAttack(beaten: Player) {
        beaten.stun = true;
    }

    public burning(p: Player) {
        Logger.logImmunity(p);
        this.step = 0;
    }
}

export class Archer extends Player {
    public isFireUsed: boolean;
    public step = 0;

    constructor(name: string, hp: number, strength: number) {
        super(name, hp, strength)
        this.specialAttackName = 'Fire Arrows';
        this.isFireUsed = false;
    }

    public specialAttack(p: Player) {
        if(!this.isFireUsed) {
           this.isFireUsed = true;
           p.step = 1; 
        }       
    }

    public burning(p: Player) {
        this.hp -= 2;
        this.step++;
        Logger.logBurningBehavior(p);
    }
}