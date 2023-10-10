export class Channel {
    static chCount = 0;
    name: string;
    id: number;
  
    constructor(name: string) {
      Channel.chCount += 1;
      this.name = name;
      this.id = Channel.chCount;
    }
  }
  
export class Television {
  static tvCount = 0;
  static channels: Array<Channel>;
  static noChannel = new Channel{
    name: "No Channels",
    id: 0};
  static tvAsciiParts: Array<string> = [
    `
            o
  o        /
   \`     /
    \`   /
     \` /
+--------------v-------------+
|  __________________      @ |
| /                  \`      |
| | You are watching | (\`)  |
| |`,
    `|       |
| |                  |  (-)  |
| |                  |       |
| \`                 / :|||: |
|  -ooo--------------  :|||: |
+----------------------------+
[]                    []
  `,
  ];
  // This TV has 18 white spaces to complete screen between parts
  brand: string;
  model: string;
  serialNumber: string;
  channel: Channel;

  constructor(brand: string, model: string, serialNumber: string) {
    Television.tvCount += 1;
    this.brand = brand;
    this.model = model;
    this.serialNumber = serialNumber;
    this.channel = Television.channels[0];
  }

  public printedTV(): string {
    let channelAscii = '';
    if (this.channel.name.length <= 18) {
      channelAscii =
        ' '.repeat((18 - this.channel.name.length) / 2) +
        this.channel.name +
        ' '.repeat((18 - this.channel.name.length - (18 - this.channel.name.length) / 2) / 2);
    }
    return Television.tvAsciiParts[0] + channelAscii + Television.tvAsciiParts[1];
  }

  public set channels(v: Array<Channel>) {
    Television.channels = v;
  }

  public set currentChannel(v: number) {
    this.channel = Television.channels[v + 1];
  }

  public nextChannel() {
    this.channel = Television.channels[this.channel.id + 1];
  }
  public prevChannel() {
    this.channel = Television.channels[this.channel.id - 1];
  }
}
