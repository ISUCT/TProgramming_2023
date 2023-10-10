export class Television {
  static tvCount = 0;
  static channels: Array<Channel>;

  brand: string;
  model: string;
  channel: Channel;

  constructor(brand: string, model: string) {
    Television.tvCount += 1;
    this.brand = brand;
    this.model = model;
    this.channel = Television.channels[0];
  }
}

export class Channel {
  static chCount = 0;
  
}
