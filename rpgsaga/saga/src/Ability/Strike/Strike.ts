import { Ability } from "../Ability";

export class Strike implements Ability{
    name: "Удар";
    type: 0;
    power: 1;
    targetIsEnemy: true;
}