export abstract class Player {
  public debuffs: string; // наложенный статус на противника

  constructor(
    public maxHealth: number,
    public strength: number,
    public name: string,
    public abilityName: string,
    public maxAbilityUsages: number,
  ) {
    this.maxHealth = maxHealth;
    this.currentHealth = maxHealth;
    this.strength = strength;
    this.name = name;
    this.abilityName = abilityName;
    this.maxAbilityUsages = maxAbilityUsages;
  }

  public currentHealth: number;
  public abilityLeft: number = this.maxAbilityUsages;


  public abstract ability(): [string, number];

  public attack(): [string, number] {
    return ['наносит урон', this.strength];
  }

  public getDamage(damage: number): boolean {
    this.currentHealth -= damage;
    return this.checkDeath();
  }

  public setDebuff(debuffName: string): void {
    this.debuffs = debuffName;
  }

  public checkStatus(): [string, number] {
    switch (this.debuffs) {
      case 'Огненная стрела':
        return ['Огненная стрела', 2.0];
      case 'Заворожение':
        this.debuffs = '';
        return ['Заворожение', 0.0];
      default:
        return [' ', 0.0];
    }
  }

  public checkDeath(): boolean {
    if (this.currentHealth <= 0) {
      return true;
    } else {
      return false;
    }
  }

  public update(): void {
    this.abilityLeft = this.maxAbilityUsages;
    this.currentHealth = this.maxHealth;
    this.debuffs = '';
  }
}

