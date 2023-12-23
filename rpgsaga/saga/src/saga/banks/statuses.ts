import { ActionType } from '../affinities';
import { Status } from '../statuses';

export const Statuses = {
  burn: new Status('Burn', ActionType.Fire, 2, 3, false),
  freeze: new Status('Freeze', ActionType.Ice, 0, 1, true),
};
