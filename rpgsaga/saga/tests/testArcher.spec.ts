import { Archer } from '../src/heroes/archerHero';
import { Warrior } from '../src/heroes/warriorHero';

describe('Archer Class', () => {
  let archer;

  beforeEach(() => {
    archer = new Archer('Dada');
  });

  it('test base constructor', () => {
    expect(archer.name).toBe('Dada');
    expect(archer.heroType).toBe('Archer');
    expect(archer.typeAttack).toBe('Shot');
    expect(archer.damageCaused).toBe(0);
    expect(archer.currentHealth).toBe(125);
    expect(archer.startHealth).toBe(125);
    expect(archer.isFrozen).toBe(false);
  });
  it('reset stats correctly', () => {
    archer.takeDamage(50);
    archer.useUltraAttack = true;

    archer.resetStats();

    expect(archer.currentHealth).toBe(125);
    expect(archer.useUltraAttack).toBe(false);
  });
  it('take damage correctly', () => {
    archer.takeDamage(25);
    expect(archer.currentHealth).toBe(100);
  });

  it('performAttack correctly', () => {
    const target = new Warrior('NetNet');
    const spyTakeDamage = jest.spyOn(target, 'takeDamage');

    archer.performAttack(target);

    expect(spyTakeDamage).toHaveBeenCalledWith(archer.damageCaused);
  });
});
