import { Archer, Knight, Wizard } from '../src/heroes'

describe('testing Heroes', () => {
    it('Knight', () => {
        const knight1 = new Knight('knight1');
        const knight2 = new Knight('knight2');

        knight1.dealDmg(knight2)
        expect(knight2.health).toBeLessThan(knight2.full_health)

        let damage1 = knight1.dealDmg(knight2)
        let damage2 = knight1.ability(knight2)
        expect(damage2).toBeGreaterThan(damage1)

    })

    it('Wizard', () => {
        const wizard1 = new Wizard('wiz1');
        const wizard2 = new Wizard('wiz2');

        wizard1.dealDmg(wizard2)
        expect(wizard2.health).toBeLessThan(wizard2.full_health)

        wizard1.ability(wizard2)
        expect(wizard2.stunned).toEqual(true)
    })

    it('Archer', () => {
        const archer1 = new Archer('archer1');
        const archer2 = new Archer('archer2');

        archer1.dealDmg(archer2)
        expect(archer2.health).toBeLessThan(archer2.full_health)

        let damageFire = archer1.ability(archer2)
        expect(damageFire).toEqual(0)
        expect(archer2.tickDamage).toEqual(2)

        let damageWithTick = archer1.dealDmg(archer2)
        expect(damageWithTick).toEqual(archer1.strength + 2)
    })
})
