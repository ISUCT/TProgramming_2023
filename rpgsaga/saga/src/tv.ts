import { Channel } from './channel';

export class Television {
  private static channels: Array<Channel>;
  private static noChannel = new Channel('No Channel');
  private static tvAsciiParts: Array<string> = [
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
  private readonly brand: string;
  private readonly model: string;
  private readonly serialNumber: string;

  private channel: Channel;

  constructor(brand: string, model: string, serialNumber: string, channels: Array<Channel>) {
    this.brand = brand;
    this.model = model;
    this.serialNumber = serialNumber;
    Television.channels = channels;
    this.channel = Television.noChannel;
  }

  public printTV(): string {
    let channelAscii = '';
    let name: string;
    if (this.channel.name.length <= 18) {
      name = this.channel.name;
    } else {
      name = this.channel.name.slice(18);
    }
    if (name.length % 2 === 0) {
      channelAscii = ' '.repeat((18 - name.length) / 2) + name + ' '.repeat((18 - name.length) / 2);
    } else {
      channelAscii = ' '.repeat((18 - name.length) / 2) + this.channel.name + ' '.repeat((18 - name.length) / 2 + 1);
    }

    return `${Television.tvAsciiParts[0] + channelAscii + Television.tvAsciiParts[1]} 
    ${this.brand} ${this.model}`;
  }

  public set channels(v: Array<Channel>) {
    Television.channels = v;
  }

  public set currentChannel(v: number) {
    try {
      if (v < Channel.chCount && v > 0) {
        this.channel = Television.channels[v - 1];
      } else {
        throw new Error('Unexpected channel number');
      }
    } catch (err) {
      if (err instanceof Error) {
        console.log(err.message);
      }
    }
  }

  public nextChannel(): string {
    if (this.channel.id === Channel.chCount) {
      this.channel = Television.channels[0];
    } else {
      this.channel = Television.channels[this.channel.id - 1 + 1];
    }
    return this.printTV();
  }

  public prevChannel(): string {
    if (this.channel.id === 1) {
      this.channel = Television.channels[Channel.chCount - 1];
    } else {
      this.channel = Television.channels[this.channel.id - 1 - 1];
    }
    return this.printTV();
  }
}
