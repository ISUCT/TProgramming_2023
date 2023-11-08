import {Ability, Action, Attack, State} from "./actions"

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
        return new ActionResult(this.strength, false, false, new Attack());
    }

    public ability(): ActionResult {
        // when no ability, return null
        return new ActionResult(0, false, false, new Ability('debug ability'));
    }

    public act(): ActionResult {
        if (this.isFrozenCounter === 0) {
            if (randomBool() === 0) {
                return this.attack();
            } else {
                return this.ability();
            }
        } else{
            return new ActionResult(0,false,false, new State("frozen"))
        }
    }
    public passTurn(input: ActionResult): StateChange {
        const res = new StateChange(0, false,false, new State(""))
        this.health -= input.damage;
        if (this.isFrozenCounter === 0) {
            if (input.setEffectFreeze) {
                this.isFrozenCounter = 1;
            }
        } else {
            this.isFrozenCounter -= 1;
            res.isFrosenCancelled = true;
            res.action = new State("unfrozen")
        }
        if (this.isBurned) {
            this.health -= 2;
        } else {
            this.isBurned = input.setEffectBurn;
        }
        return res;
    }

    fullHeal(){
        this.health = this.maxHealth;
    }
}

export class ActionResult {
    damage: number;
    setEffectFreeze: boolean;
    setEffectBurn: boolean;
    action: Action;

    constructor(damage: number, burn: boolean, freeze: boolean, action: Action) {
        this.damage = damage;
        this.setEffectFreeze = freeze;
        this.setEffectBurn = burn;
        this.action = action;
    }
}

export class StateChange{
    isBurnedCancelled: boolean;
    isFrosenCancelled: boolean;
    pointsHealed: number;
    action : Action;

    constructor(hpAdded: number, burn: boolean, frozen: boolean, action: Action){
        this.pointsHealed = hpAdded;
        this.isBurnedCancelled = burn;
        this.isFrosenCancelled = frozen;
        this.action = action;
    }
}

export function randomBool(): number {
    return Math.random() >= 0.5 ? 1 : 0;
}
