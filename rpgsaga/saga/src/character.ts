import { MathHelper } from './mathHelper';
import { maxDexterity, names } from './constants';
import { maxHealth } from './constants';
import { maxStrength } from './constants';
import color from 'colorts';
import { resourceUsage } from 'process';

export class Character{
    private _health: number;
    get health(): number {
        return this._health;
    }

    private _strength: number;
    get strength(): number {
        return this._strength;
    }

    private _characterName: string;
    get characterName(): string {
        return this._characterName;
    }

    private _dexterity:number;
    get dexterity(): number {
        return this._dexterity;
    }

    constructor (){
        this.Generate();
    }

    private Generate(){
        this._health = MathHelper.genrateRandomNumber(1, maxHealth); 
        this._strength = MathHelper.genrateRandomNumber(1, maxStrength);
        this._dexterity = MathHelper.genrateRandomNumber(1, maxDexterity)
        this._characterName = this.SelectColorName(names[MathHelper.genrateRandomNumber(0, names.length - 1)]);
    }

    public checkInitiative(){
        return MathHelper.genrateRandomNumber(1, this._dexterity*10);
    }

    public checkDodge() {
        return MathHelper.genrateRandomNumber(1, this._dexterity*10);
    }

    public checkHit(){
        return MathHelper.genrateRandomNumber(1, this.strength*10);
    }

    public takeDamage(damage:number){
        this._health -= damage;
    }

    private SelectColorName(name:string):string
    {
        let result:string = "";
        switch (MathHelper.genrateRandomNumber(0,6)) {
            case 0:
                result = color(name).red.toString();
            break;
            case 1:
                result = color(name).green.toString();
            break;
            case 2:
                result = color(name).yellow.toString();
            break;
            case 3:
                result = color(name).blue.toString();
            break;
            case 4:
                result = color(name).magenta.toString();
            break;
            case 5:
                result = color(name).cyan.toString();
            break;
            default:
                result = name;
            break;
        }
        return result;
    }
}