import { Warrior } from '../src/heroes/warriorHero';

describe('Warrior Class', () => {
  let warrior;

  beforeEach(() => {
    warrior = new Warrior('Dada');
  });

  it('test base constructor', () => {
    expect(warrior.name).toBe('Dada');
    expect(warrior.heroType).toBe('Warrior');
    expect(warrior.typeAttack).toBe('Physical');
    expect(warrior.damageCaused).toBe(0);
    expect(warrior.currentHealth).toBe(150);
    expect(warrior.startHealth).toBe(150);
    expect(warrior.isFrozen).toBe(false);
  });
  it('reset stats correctly', () => {
    warrior.takeDamage(50);
    warrior.useUltraAttack = true;

    warrior.resetStats();

    expect(warrior.currentHealth).toBe(150);
    expect(warrior.useUltraAttack).toBe(false);
  });
  it('take damage correctly', () => {
    warrior.takeDamage(50);
    expect(warrior.currentHealth).toBe(100);
  });

  it('performAttack correctly', () => {
    const target = new Warrior('NetNet');
    const spyTakeDamage = jest.spyOn(target, 'takeDamage');

    warrior.performAttack(target);

    expect(spyTakeDamage).toHaveBeenCalledWith(warrior.damageCaused);
  });
});
