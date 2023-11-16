import {Ability, Action, Attack, State} from "./actions"

enum Aff { Normal, Block, Resist, Reflect, Weak }
export enum ActionType { Fire, Ice, Electric, Normal, Support }

class AffinityList {
    Normal: Aff;
    Fire: Aff;
    Ice: Aff;
    Electric: Aff;

    constructor(aff: Aff[]){
        this.Normal = aff[0];
        this.Fire = aff[1];
        this.Ice = aff[2];
        this.Electric = aff[3];
    }
}

export abstract class Player {
    health: number;
    readonly maxHealth: number;
    readonly strength: number;
    readonly name: string;

    protected isBurned = false;
    protected isFrozenCounter = 0;

    protected currentAttack = 0;

    affinities: AffinityList

    constructor(health: number, strength: number, name: string, affinity: Aff[]) {
        this.health = health;
        this.maxHealth = health;
        this.strength = strength;
        this.name = name;
        this.affinities = new AffinityList(affinity)

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
