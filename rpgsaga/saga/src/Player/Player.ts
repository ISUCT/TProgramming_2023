export class Player{
    readonly name: string;
    readonly dmg: number;
    readonly hp: number;
    constructor(name: string, dmg: number, hp: number){
        this.name = name;
        this.dmg = dmg;
        this.hp = hp;
    }
}