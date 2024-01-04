import { BasicHero } from '../heroes/basicHero';
import { criticalDamage, DamageType } from '../constants/config';

export class Logger {
  static declarationHeroes(heroes: BasicHero[]) {
    console.log('В данном сражение примут участие благородные и неукротимые: ');
    heroes.forEach(hero => console.log(`\x1b[4m${hero.heroType} ${hero.name}\x1b[0m`));
  }

  static startMessage() {
    console.log('\x1b[42mБитва началась\x1b[0m');
  }

  static endMessage(target: BasicHero, hero: BasicHero) {
    console.log(
      `Драка закончена. \x1b[34m${hero.heroType}\x1b[0m одержал победу над \x1b[35m${target.heroType}\x1b[0m. У него осталось \x1b[32;1m${hero.currentHealth}\x1b[0m здоровья`,
    );
  }

  static winMassage(hero: BasicHero) {
    console.log();
    console.log(
      `👑 В ЖЕСТКОЙ МЯСОРУБКЕ ПОБЕДИЛ \x1b[41m${hero.heroType}\x1b[0m. ИМЯ \x1b[41m${hero.name}\x1b[0m ЗАПОМНЯТ НА МНОГИЕ ВЕКА 👑`,
    );
  }

  static dealDamage(damageInfo: number, typeAttack: string, typeHero: string, target: BasicHero) {
    if (typeAttack) {
      console.log(
        `Нанесено \x1b[31;1m${damageInfo}\x1b[0m урона типа ${typeAttack} персонажем \x1b[33m${typeHero}\x1b[0m по противнику \x1b[33m${
          target.heroType
        }\x1b[0m. У него осталось \x1b[32;1m${target.currentHealth - damageInfo}\x1b[0m здоровья`,
      );
    } else {
      console.log(`Неизвестный тип урона: ${typeAttack}`);
    }
  }
  static criticalAttack(typeHero: string, typeAttack: string) {
    const ultInfo = criticalDamage[DamageType[typeAttack]];
    if (typeAttack === DamageType.Physical || typeAttack === DamageType.Shot || typeAttack === DamageType.Electric) {
      console.log(`${typeHero} использовал ${ultInfo.ultName} и наносит дополнительный урон(${ultInfo.damage})`);
    } else if (typeAttack === DamageType.Fire || typeAttack === DamageType.Poison) {
      console.log(`${typeHero} использовал ${ultInfo.ultName}, теперь противник будет получать доп. урон каждый удар(${ultInfo.damage})`,);
    } else if (typeAttack === DamageType.Ice) {
      console.log(`${typeHero} использовал ${ultInfo.ultName} и заморозил противинка`);
    }
  }

  static roundCount(count: number) {
    console.log();
    console.log(`---------------------- Раунд ${count} ----------------------`);
  }

  static fewHeroes() {
    console.log('Мало желающих... Слабака...');
  }
}
