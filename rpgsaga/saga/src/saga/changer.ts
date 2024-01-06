import { Status } from './statuses';

export class Changer {
  public cancel: Status[];

  constructor(cancel: Status[]) {
    this.cancel = cancel;
  }
}
