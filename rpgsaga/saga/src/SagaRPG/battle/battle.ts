import { Player } from '../Player/player';
import { Grid_generator } from '../Player/Grid-generator/Grid-generator';
import { Logger } from '../Logger/logger';
import { Random } from '../random/randomNum';
export class battle {
  static Start(player_quantity): void {
    let grid: Player[] = Grid_generator(player_quantity);
    battle.Play(grid);
  }
  static Play(grid: Player[]): void {
    let length = grid.length;
    for (let index = 1; index < length; index++) {
        Logger.WritebattleNumber(index);
        battle.Playround(grid, length);
    }
    Logger.WriteWinner(grid[0])
  }
  static Playround(grid: Player[], length): void {
    let RoundMembers = [grid[0], grid[1]];
    Logger.WritebattleMembers(RoundMembers);
    let winner = battle.Playbattle(RoundMembers);
    grid.push(winner)
    grid.splice(0,2)
  }
  static Playbattle(RoundMembers): Player {
    for (let index = 0; true; index++) {
      let PlayerMode = RoundMembers[index % 2].DeathOrAlive();
      if (PlayerMode) {
        return RoundMembers[(index % 2) + 1];
      }
      let MoveAction = battle.PlayerAction(RoundMembers[index % 2]);
      PlayerMode = RoundMembers[(index + 1) % 2].getDamage(MoveAction);
      Logger.WriteAction(RoundMembers[index % 2], RoundMembers[(index + 1) % 2], MoveAction);
      if (PlayerMode) {
        Logger.WriteDeath(RoundMembers[(index + 1) % 2]);
        RoundMembers[index % 2].restore();
        return RoundMembers[index % 2];
      }
    }
  }

  static PlayerAction(player): void {
    return player.attack();
  }
}
