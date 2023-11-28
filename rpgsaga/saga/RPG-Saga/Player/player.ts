export class Player{
 _name:string;
 _attack:number;
 _healthpool:number;
    constructor(Playername:string, Playerattack:number,Playerhealthpool:number){
        this._name = Playername;
        this._attack = Playerattack;
        this._healthpool = Playerhealthpool;
    }
}