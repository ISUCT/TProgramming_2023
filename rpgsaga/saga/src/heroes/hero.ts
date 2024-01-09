import { Messenger } from '../messenger';

export abstract class Hero {
  abstract heroName: string;
  usedAbility: boolean = false;
  isCanAttack: boolean = true;

  abstract useHeroAbility(enemy: Hero): void;

  constructor(public health: number, public power: number, public name: string, public messenger: Messenger) {}

  attack(enemy: Hero) {
    enemy.getDamage(this.power);
    this.sendDamageMessage(enemy);
  }

  getDamage(damage: number) {
    this.health = this.health - damage;
  }

  refresh() {
    this.usedAbility = false;
    this.isCanAttack = true;
  }

  sendDamageMessage(enemy: Hero) {
    this.messenger.sendMessage(
      `(${this.heroName}) ${this.name} наносит урон ${this.power} противнику (${enemy.heroName}) ${enemy.name}.`,
    );
  }

  sendDieMessage() {
    this.messenger.sendMessage(`(${this.heroName}) ${this.name} погибает.`);
  }
}
