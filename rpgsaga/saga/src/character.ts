import { MathHelper } from './mathHelper';
import { names } from './constants';
import color from 'colorts';

export class Character{
    className: string = "";

    private _health: number;
    get health(): number {
        return this._health;
    }
    protected _minHealth = 50;
    protected _maxHealth = 100;

    private _strength: number;
    get strength(): number {
        return this._strength;
    }
    protected _minStrength = 50;
    protected _maxStrength = 100;

    private _characterName: string;
    get characterName(): string {
        return this._characterName;
    }

    private _dexterity:number;
    get dexterity(): number {
        return this._dexterity;
    }
    protected _minDexterity = 50;
    protected _maxDexterity = 100;

    constructor (){
        this.Generate();
    }

    private Generate(){
        this._health = MathHelper.genrateRandomNumber(this._minHealth, this._maxHealth); 
        this._strength = MathHelper.genrateRandomNumber(this._minStrength, this._maxStrength);
        this._dexterity = MathHelper.genrateRandomNumber(this._minDexterity, this._maxDexterity)
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