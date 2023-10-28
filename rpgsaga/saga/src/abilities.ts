import { Ability, Character,  } from "./character";

class PoisonArrow extends Ability
{
    execute(caster: Character, target: Character): void
    {
        super.execute(caster, target);

        caster.dealDamage(target, this.points);
        target.effects.push(this.effect);
    }   
}

class Stun extends Ability
{
    execute(caster: Character, target: Character): void
    {
        super.execute(caster, target);

        target.effects.push(this.effect);
    }
}

class Vampirism extends Ability
{
    private readonly percentage = 0.5;

    execute(caster: Character, target: Character): void
    {
        super.execute(caster, target);
        
        caster.dealDamage(target, this.points);
        caster.healthPoints += this.points * this.percentage;
        target.effects.push(this.effect);
    }
}
