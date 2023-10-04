import { MathHelper } from './mathHelper';
import { fireDamage, names } from './constants';
import color from 'colorts';
import { Logger } from './logger';

export class Character {
    className: string = "";
    private _isBurn:boolean = false;
    get isBurn(): boolean {
        return this._isBurn;
    }

    protected isStunned: boolean = false;
    private _health: number;
    get health(): number {
        return this._health;
    }
    protected _minHealth: number = 5;
    protected _maxHealth: number = 10;

    private _strength: number;
    get strength(): number {
        return this._strength;
    }
    protected _minStrength: number = 5;
    protected _maxStrength: number = 10;

    private _characterName: string;
    get characterName(): string {
        return this._characterName;
    }

    private _dexterity: number;
    get dexterity(): number {
        return this._dexterity;
    }
    protected _minDexterity: number = 5;
    protected _maxDexterity: number = 10;

    protected _mana: number = 0;
    get mana(): number {
        return this._mana;
    }

    private _manaRegeneration: number;
    get manaRegeneration(): number {
        return this._manaRegeneration;
    }
    protected _minManaRegeneration: number = 8;
    protected _maxManaRegeneration: number = 10;

    private _classSkillCost: number = 0;
    get classSkillCost(): number {
        return this._classSkillCost;
    }
    protected _minClassSkillCost: number = 15;
    protected _maxClassSkillCost: number = 20;

    constructor() {
        this.Generate();
    }

    public Stun() {
        this.isStunned = true;
    }

    private Generate() {
        this._health = MathHelper.genrateRandomNumber(this._minHealth, this._maxHealth);
        this._strength = MathHelper.genrateRandomNumber(this._minStrength, this._maxStrength);
        this._dexterity = MathHelper.genrateRandomNumber(this._minDexterity, this._maxDexterity);
        this._characterName = this.SelectColorName(names[MathHelper.genrateRandomNumber(0, names.length - 1)]);
        this._manaRegeneration = MathHelper.genrateRandomNumber(this._minManaRegeneration, this._maxManaRegeneration);
        this._classSkillCost = MathHelper.genrateRandomNumber(this._minClassSkillCost, this._maxClassSkillCost);
    }

    public checkInitiative() {
        return MathHelper.genrateRandomNumber(1, this._dexterity * 10);
    }

    public checkDexterity() {
        return MathHelper.genrateRandomNumber(1, this._dexterity * 10);
    }

    public checkHit() {
        return MathHelper.genrateRandomNumber(1, this.strength * 10);
    }

    public takeDamage(damage: number) {
        this._health -= damage;
    }

    private SelectColorName(name: string): string {
        let result: string = "";
        switch (MathHelper.genrateRandomNumber(0, 6)) {
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

    startBurn(){
        this._isBurn = true;
    }

    endBurn(){
        this._isBurn = false;
    }

    characterTurn(enemy:Character){
        this.attack(enemy);
        this.processEffects();
    }

    protected attack(enemy: Character) {
        if (!this.isStunned) {
            Logger.startAttackMessage(this);

            let hitStrength = this.checkDexterity();
            let dodgeStrength = enemy.checkDexterity();

            if (hitStrength > dodgeStrength) {
                let damage = this.checkHit();
                enemy.takeDamage(damage);
                Logger.successAttackMessage(this, hitStrength, enemy, dodgeStrength, damage)
            }
            else {
                Logger.failedAttackMessage(this, hitStrength, enemy, dodgeStrength)
            }
        }
    }

    hillHP(){
        this._health += 100;
    }

    protected processEffects(){
        if(this._isBurn)
        {
            this._health -= fireDamage;
            Logger.CharacterBurn(this, fireDamage);
        }

        if(this.isStunned)
        {
            this.isStunned = false;
        }

        this._mana += this._manaRegeneration;
    }
}