import { heroClasses, HEROES, NAMES } from './constants/config';
import { BasicHero } from './heroes/basicHero';
import { Logger } from './logger/logger';

export class Main {
  heroes: BasicHero[] = [];

  generateHero() {
    const name = NAMES[Math.floor(Math.random() * NAMES.length)];

    const types = Object.values(HEROES);
    const randomType = types[Math.floor(Math.random() * types.length)];

    const HeroClass = heroClasses[randomType];

    if (!HeroClass) {
      throw new Error(`Unknown hero type: ${randomType}`);
    }

    return new HeroClass(name);
  }

  startGame(heroCounter: number) {
    for (let i = 0; i < heroCounter; i++) {
      this.heroes.push(this.generateHero());
    }

    if (this.heroes.length < 2) {
      Logger.fewHeroes();
      return;
    }

    this.fighting();
  }

  fighting() {
    Logger.declarationHeroes(this.heroes);
    Logger.startMessage();
    let round = 0;

    while (this.heroes.length > 1) {
      round++;
      Logger.roundCount(round);

      const [hero1, hero2] = this.getRandomHeroes();
      hero1.resetStats();
      hero2.resetStats();

      while (hero1.currentHealth >= 0 && hero2.currentHealth >= 0) {
        hero1.performAttack(hero2);
        if (hero2.currentHealth > 0 && !hero2.isFrozen) {
          hero2.performAttack(hero1);
        }

        if (hero1.currentHealth <= 0) {
          Logger.endMessage(hero1, hero2);
          this.heroes = this.heroes.filter(hero => hero.currentHealth >= 0);
        }
        if (hero2.currentHealth <= 0) {
          Logger.endMessage(hero2, hero1);
          this.heroes = this.heroes.filter(hero => hero.currentHealth >= 0);
        }
      }
    }

    Logger.winMassage(this.heroes[0]);
  }

  getRandomHeroes(): BasicHero[] {
    const duelists: BasicHero[] = [];
    let randomHero1;
    let randomHero2;

    if (this.heroes.length === 2) {
      randomHero1 = 0;
      randomHero2 = 1;
    } else {
      randomHero1 = Math.floor(Math.random() * this.heroes.length);
      randomHero2 = Math.floor(Math.random() * this.heroes.length);

      // get hero2
      while (randomHero2 === randomHero1) {
        randomHero2 = Math.floor(Math.random() * this.heroes.length);
      }
    }

    duelists.push(this.heroes[randomHero1]);
    duelists.push(this.heroes[randomHero2]);

    return duelists;
  }
}
