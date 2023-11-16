import {Character} from "./character";

interface IAbility
{
    execute(caster: Character, target: Character): void;
}

export class AttackAbility implements IAbility
{
    private points: number;

    // public activationFunction: Function;

    constructor(points: number)
    {
        this.points = points;
    }

    execute(caster: Character, target: Character): void
    {
        console.log(`${caster.name} (${caster.class}) attacked ${target.name} (${target.class}) and dealt ${this.points}!`);
        target.receiveDamage(this.points);
    }
}
