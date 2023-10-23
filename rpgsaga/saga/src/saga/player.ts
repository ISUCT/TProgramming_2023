export abstract class Player {
    health: number;
    readonly maxHealth: number;
    readonly strength: number;
    readonly name: string;

    protected isBurned = false;
    protected isFrozenCounter = 0;

    protected currentAttack = 0;

    constructor(health: number, strength: number, name: string) {
        this.health = health;
        this.maxHealth = health;
        this.strength = strength;
        this.name = name;
    }

    public attack(): ActionResult {
        return new ActionResult(this.strength, false, false, 'default attack');
    }

    public ability(): ActionResult {
        // when no ability, return null
        return new ActionResult(0, false, false, 'debug ability');
    }

    public act(): ActionResult {
        if (this.isFrozenCounter === 0) {
            if (randomBool() === 0) {
                return this.attack();
            } else {
                return this.ability();
            }
        } else{
            return new ActionResult(0,false,false, "frozen")
        }
    }
    public passTurn(input: ActionResult) {
        this.health -= input.damage;
        if (this.isFrozenCounter === 0) {
            if (input.setEffectFreeze) {
                this.isFrozenCounter = 1;
            }
        } else {
            this.isFrozenCounter -= 1;
        }
        if (this.isBurned) {
            this.health -= 2;
        } else {
            this.isBurned = input.setEffectBurn;
        }
    }

    fullHeal(){
        this.health = this.maxHealth;
    }
}

export class ActionResult {
    damage: number;
    setEffectFreeze: boolean;
    setEffectBurn: boolean;
    actionName = '';

    constructor(damage: number, burn: boolean, freeze: boolean, name: string) {
        this.damage = damage;
        this.setEffectFreeze = freeze;
        this.setEffectBurn = burn;
        this.actionName = name;
    }
}

export function randomBool(): number {
    return Math.random() >= 0.5 ? 1 : 0;
}
