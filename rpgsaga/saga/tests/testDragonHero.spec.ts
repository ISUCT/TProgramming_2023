import { Dragon } from '../src/heroes/dragonHero';
import { Warrior } from '../src/heroes/warriorHero';

describe('Dragon Class', () => {
  let dragon;

  beforeEach(() => {
    dragon = new Dragon('Dada');
  });

  it('test base constructor', () => {
    expect(dragon.name).toBe('Dada');
    expect(dragon.heroType).toBe('Dragon');
    expect(dragon.typeAttack).toBe('Fire');
    expect(dragon.damageCaused).toBe(0);
    expect(dragon.currentHealth).toBe(175);
    expect(dragon.startHealth).toBe(175);
    expect(dragon.isFrozen).toBe(false);
  });
  it('reset stats correctly', () => {
    dragon.takeDamage(50);
    dragon.useUltraAttack = true;

    dragon.resetStats();

    expect(dragon.currentHealth).toBe(175);
    expect(dragon.useUltraAttack).toBe(false);
  });
  it('take damage correctly', () => {
    dragon.takeDamage(75);
    expect(dragon.currentHealth).toBe(100);
  });

  it('performAttack correctly', () => {
    const target = new Warrior('NetNet');
    const spyTakeDamage = jest.spyOn(target, 'takeDamage');

    dragon.performAttack(target);

    expect(spyTakeDamage).toHaveBeenCalledWith(dragon.damageCaused);
  });
});
