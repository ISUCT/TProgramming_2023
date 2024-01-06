import { Archer, Knight, Mage } from '../src/heroes';

describe('testing Heroes', () => {
  it('Knight', () => {
    const knight = new Knight('knight');
    const baseStrength = knight.getStrength();

    knight.ability();

    expect(knight.getStrength()).toBeGreaterThan(baseStrength);
  });

  it('Mage', () => {
    const mage = new Mage('mage');
    const anotherHero = new Knight('knight');

    mage.ability(anotherHero);

    expect(anotherHero.stunned).toBe(true);

    const anotherHeroHealthBeforeFight = anotherHero.health;

    anotherHero.health = anotherHero.health - mage.getStrength();

    expect(anotherHero.health).toBeLessThan(anotherHeroHealthBeforeFight);
  });

  it('Archer', () => {
    const archer = new Archer('archer');
    const knight = new Knight('knight');
    const knight2 = new Knight('knight');

    archer.ability(knight);
    archer.ability(knight2);

    expect(knight.tickDamage).toBe(2);
    expect(knight2.tickDamage).toBe(0);
  });
});
