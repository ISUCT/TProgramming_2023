import { Random } from "../../random/randomNum";
import { generator} from "../Player_generator/Player_generator";
import { Player } from "../player";

//classes
export enum classes {
    Archer = 'Archer',
    Warrior = 'Warrior',
    Mage = 'Mage',
  }
const classes_array: Array<classes> = [classes.Archer, classes.Warrior, classes.Mage];

 export function Grid_generator(player_quantity):Player[]{
    let player_grid:Player[] = []
    for (let index = 0; index < player_quantity; index++) { 
        player_grid.push(generator(classes_array[Random(0,2)]))
    }
    return player_grid
}