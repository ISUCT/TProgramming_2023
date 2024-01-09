import { Random } from '../../random/randomNum';
import { Warrior, Warrior_Shape } from '../../Classes/Warrior/Warrior';
import { Mage, Mage_Shape } from '../../Classes/Mage/Mage';
import { Archer, Archer_Shape } from '../../Classes/Archer/Archer';
import { Player } from '../player';
import { classes } from '../Grid-generator/Grid-generator';
//Shape
const A_Shape: Archer_Shape[] = [Archer_Shape.Hunter, Archer_Shape.Raider, Archer_Shape.Elemental_Mage];
const M_Shape: Mage_Shape[] = [Mage_Shape.Forbidden, Mage_Shape.Inquisitor, Mage_Shape.Occultist];
const W_Shape: Warrior_Shape[] = [Warrior_Shape.Juggernaut, Warrior_Shape.Marauder, Warrior_Shape.Slayer];
//names
const names: string[] = ['Sergey', 'Danilla', 'Nikola', 'Artem', 'Denis', 'Karina', 'Evgenia', 'Elena', 'Egor'];

export function generator(player_class: classes) {
  let player: Player;
  switch (player_class) {
    case classes.Archer:
      player = new Archer(A_Shape[Random(0, 2)], names[Random(0, 8)], Random(90, 110));
      break;
    case classes.Warrior:
      player = new Warrior(W_Shape[Random(0, 2)], names[Random(0, 8)], Random(110, 130));
      break;
    default:
      player = new Mage(M_Shape[Random(0, 2)], names[Random(0, 8)], Random(70, 90));
      break;
  }
  return player;
}
