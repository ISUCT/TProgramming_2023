import { Warrior } from '../src/heroes/warriorHero';
import { Magician } from '../src/heroes/magicianHero';

describe('Magician Class', () => {
  let magician;

  beforeEach(() => {
    magician = new Magician('Dada');
  });

  it('test base constructor', () => {
    expect(magician.name).toBe('Dada');
    expect(magician.heroType).toBe('Magician');
    expect(['Poison', 'Ice', 'Electric']).toContain(magician.typeAttack);
    expect(magician.damageCaused).toBe(0);
    expect(magician.currentHealth).toBe(100);
    expect(magician.startHealth).toBe(100);
    expect(magician.isFrozen).toBe(false);
  });
  it('reset stats correctly', () => {
    magician.takeDamage(50);
    magician.useUltraAttack = true;

    magician.resetStats();

    expect(magician.currentHealth).toBe(100);
    expect(magician.useUltraAttack).toBe(false);
  });
  it('take damage correctly', () => {
    magician.takeDamage(10);
    expect(magician.currentHealth).toBe(90);
  });

  it('performAttack correctly', () => {
    const target = new Warrior('NetNet');
    const spyTakeDamage = jest.spyOn(target, 'takeDamage');

    magician.performAttack(target);

    expect(spyTakeDamage).toHaveBeenCalledWith(magician.damageCaused);
  });
});
