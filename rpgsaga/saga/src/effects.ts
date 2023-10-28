import { Effect } from "./character";

export class PoisonEffect extends Effect
{
    apply(): void
    {
        super.apply();
        this.target.healthPoints -= this.points;
    }
}

export class StunEffect extends Effect
{
    apply(): void
    {
        super.apply();
    }
}