export class Channel {
  static chCount = -1;
  public name: string;
  public id: number;

  constructor(name: string) {
    Channel.chCount += 1;
    this.name = name;
    this.id = Channel.chCount;
  }
}
