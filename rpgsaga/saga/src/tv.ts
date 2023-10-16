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

export class Television {
  static tvCount = 0;
  static channels: Array<Channel>;
  static noChannel = new Channel('No Channel');
  static tvAsciiParts: Array<string> = [
    `
           o
  o       /
   \\     /
    \\   /
     \\ /
+--------------v-------------+
|  __________________      @ |
| /                  \\       |
| | You are watching | (\\)   |
| |`,
    `|       |
| |                  |  (-)  |
| |                  |       |
| \\                  / :|||: |
|  -ooo--------------  :|||: |
+----------------------------+
[]                    []`,
  ];
  // This TV has 18 white spaces to complete screen between parts
  brand: string;
  model: string;
  serialNumber: string;
  channel: Channel;

  constructor(brand: string, model: string, serialNumber: string, channels: Array<Channel>) {
    Television.tvCount += 1;
    this.brand = brand;
    this.model = model;
    this.serialNumber = serialNumber;
    Television.channels = channels;
    this.channel = Television.noChannel;
  }

  public printedTV(): string {
    let channelAscii = '';
    if (this.channel.name.length <= 18) {
      if (this.channel.name.length % 2 === 0) {
        channelAscii =
          ' '.repeat((18 - this.channel.name.length) / 2) +
          this.channel.name +
          ' '.repeat((18 - this.channel.name.length) / 2);
      } else {
        channelAscii =
          ' '.repeat((18 - this.channel.name.length) / 2) +
          this.channel.name +
          ' '.repeat((18 - this.channel.name.length) / 2 + 1);
      }
    }
    return `${Television.tvAsciiParts[0] + channelAscii + Television.tvAsciiParts[1]} 
    ${this.brand} ${this.model}`;
  }

  public set channels(v: Array<Channel>) {
    Television.channels = v;
  }

  public set currentChannel(v: number) {
    if (v < Channel.chCount) {
      this.channel = Television.channels[v + 1];
    }
  }

  public nextChannel(): string {
    if (this.channel.id === Channel.chCount) {
      this.channel = Television.channels[0];
    } else {
      this.channel = Television.channels[this.channel.id - 1 + 1];
    }
    return this.printedTV();
  }
  public prevChannel(): string {
    if (this.channel.id === 1) {
      this.channel = Television.channels[Channel.chCount - 1];
    } else {
      this.channel = Television.channels[this.channel.id - 1 - 1];
    }
    return this.printedTV();
  }
}
