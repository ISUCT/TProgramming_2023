import { Wizard } from "../src/rpgsaga/wizard";
import { Knight } from "../src/rpgsaga/knight";
import { Archer } from "../src/rpgsaga/archer";

describe('testing Heroes', () => {
    it('Knight', () => {
        const knight1 = new Knight('knight1');
        const knight2 = new Knight('knight2');

        knight1.dealDamage(knight2)
        expect(knight2.curHealth).toBeLessThan(knight2.initialHealth)

        let damage1 = knight1.dealDamage(knight2)
        let damage2 = knight1.ability(knight2)
        expect(damage2).toBeGreaterThan(damage1)

    })

    it('Wizard', () => {
        const wizard1 = new Wizard('wiz1');
        const wizard2 = new Wizard('wiz2');

        wizard1.dealDamage(wizard2)
        expect(wizard2.curHealth).toBeLessThan(wizard2.initialHealth)

        wizard1.ability(wizard2)
        expect(wizard2.stunned).toEqual(true)
    })

    it('Archer', () => {
        const archer1 = new Archer('archer1');
        const archer2 = new Archer('archer2');

        archer1.dealDamage(archer2)
        expect(archer2.curHealth).toBeLessThan(archer2.initialHealth)

        let damageFire = archer1.ability(archer2)
        expect(damageFire).toEqual(0)
        expect(archer2.tickDamage).toEqual(1.5)

        let damageWithTick = archer1.dealDamage(archer2)
        expect(damageWithTick).toEqual(archer1.strength + 1.5)
    })
})