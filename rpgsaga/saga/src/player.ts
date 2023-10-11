import { Logger } from './logger';
import { randomNumber } from './game';

export abstract class Player {
  // промежуток случайных характериситик (для всех персонажей)

  public static healthMax = 470;
  public static healthMin = 420;
  public static damageMax = 72;
  public static damageMin = 62;

  // характеристики отдельного персонажа

  public maxHealth: number;
  public health: number;
  public power: number;
  public name: string;
  public armor: number;
  public isAlive = true;
  public isFrozen = false;
  public isOnFire = false;
  public firePower = 0;

  // классовые характеристики

  public abstract abilityName: string;
  public abstract abilityDescription: string;
  public abstract abilityPower: number;
  public abstract maxMana: number;
  public abstract mana: number;
  public abstract className: string;

  constructor(hitpoints: number, attack: number, armor: number, playerName: string) {
    this.maxHealth = hitpoints;
    this.health = this.maxHealth;
    this.power = attack;
    this.name = playerName;
    this.armor = armor;
  }

  // выбор действия юнита в его ход

  chooseAction(defender: Player) {
    if (this.isOnFire) {
      this.getFireDamage(defender); // урон от огня получает именно атакующий от Защитника, который его поджег
    }
    if (!this.deathChecker(this)) {
      if (this.isFrozen) {
        // пропуск хода если юнит заморожен
        Logger.frozenLog(this);
        this.isFrozen = false;
      } else {
        if (randomNumber(0, 2) === 0 && this.mana > 0) {
          // использовать абилку или атаку
          this.mana -= 1;
          this.useAbility(defender);
        } else {
          this.attack(defender);
        }
      }
    }
  }

  attack(defender: Player): void {
    Logger.nextLog();
    const damage = Math.ceil(this.power + 0.2 * this.power * (Math.random() - 0.5)) - defender.armor;
    defender.health -= damage;
    Logger.attackLog(this, defender, damage);
    if (!this.deathChecker(defender)) {
      Logger.hpLog(defender);
    }
  }

  // восстановление после боя

  winnerRegenerate(): void {
    Logger.winLog(this);
    this.health = this.maxHealth;
    this.mana = this.maxMana;
    this.isFrozen = false;
    this.isOnFire = false;
  }

  abstract useAbility(defender: Player): void;

  getFireDamage(attacker: Player): void {
    this.health -= attacker.firePower;
    Logger.fireLog(this, attacker.firePower);
  }

  deathChecker(player: Player): boolean {
    if (player.health <= 0) {
      Logger.deathLog(player);
      player.isAlive = false;
      return true;
    }
    return false;
  }
}
