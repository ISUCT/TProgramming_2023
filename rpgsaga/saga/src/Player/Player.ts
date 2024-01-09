import { Ability } from "../Ability/Ability";
import { Effect } from "../Ability/Effect";

export abstract class Player{
    private _name: string;
    private _dmg: number;
    private _hp: number;
    readonly abilities: Ability[];
    private effectOnSelf: Effect;
    constructor(name: string, dmg: number, hp: number, effectOnSelf: Effect){
        this._name = name;
        this._dmg = dmg;
        this._hp = hp;
        this.effectOnSelf = effectOnSelf;
    }
    public get name(){
        return this._name;
    }
    public get dmg(){
        return this._dmg;
    }
    public get hp(){
        return this._hp;
    }
    public get effect(){
        return this.effectOnSelf;
    }
    takeAbilityOnSelf(ability: Ability, dmgOpponent: number){
        switch(ability.type) {
            case 0:{
                this._hp = this._hp - ability.power*dmgOpponent;
                if (this.effectOnSelf.duration <= 0){
                    this.effectOnSelf = {...ability.effect};
                } 
                break;      
            }
            case 1:{
                this._hp = this._hp + ability.power;
                break;      
            }
            default:{
                throw new Error(String(ability.type));
            }
        }
    }
    isStunned(){
        if (this.effectOnSelf.stun){
            return true;
        }
    }
}