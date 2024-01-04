export class Player{
    private _name: string;
    private _dmg: number;
    private _hp: number;
    constructor(name: string, dmg: number, hp: number){
        this._name = name;
        this._dmg = dmg;
        this._hp = hp;
    }
    public get name(){
        return this._name
    }
    public get dmg(){
        return this._dmg
    }
    public get hp(){
        return this._hp
    }
    takeAbilityOnSelf(takenAbilityType: number, takenAbilityPower: number){
        switch(takenAbilityType) {
            case 0:{
                this._hp = this._hp - takenAbilityPower;
                break;      
            }
            case 1:{
                this._hp = this._hp + takenAbilityPower;
                break;      
            }
            default:{
                throw new Error(String(takenAbilityType));
            }
        }
    }
}