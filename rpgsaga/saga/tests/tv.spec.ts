import { Television } from '../src/tv';
import { Channel } from '../src/channel';

const channels: Array<Channel> = [
  new Channel('Первый канал'),
  new Channel('Россия 1'),
  new Channel('ТВЦ'),
  new Channel('2х2'),
  new Channel('Cartoon Network'),
];

describe('Testing printing TV ASCII', () => {
  it('should return accurate TV image', () => {
    const tv = new Television('CoolTV', 'N200', 'DVG01901948', channels);
    expect(tv.printTV()).toEqual(
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
| |    No Channel    |       |
| |                  |  (-)  |
| |                  |       |
| \\                  / :|||: |
|  -ooo--------------  :|||: |
+----------------------------+
[]                    [] 
    CoolTV N200`,
    );
  });
});

describe('Testing set channel', () => {
  it('should return channel of certain number', () => {
    const tv = new Television('CoolTV', 'N200', 'DVG01901948', channels);
    tv.currentChannel = 1;
    expect(tv.printTV()).toEqual(
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
| |   Первый канал   |       |
| |                  |  (-)  |
| |                  |       |
| \\                  / :|||: |
|  -ooo--------------  :|||: |
+----------------------------+
[]                    [] 
    CoolTV N200`,
    );
  });
  it('should return next channel', () => {
    const tv = new Television('CoolTV', 'N200', 'DVG01901948', channels);
    tv.currentChannel = 1;
    tv.nextChannel();
    expect(tv.printTV()).toEqual(
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
| |     Россия 1     |       |
| |                  |  (-)  |
| |                  |       |
| \\                  / :|||: |
|  -ooo--------------  :|||: |
+----------------------------+
[]                    [] 
    CoolTV N200`,
    );
  });
  it('should return previous channel', () => {
    const tv = new Television('CoolTV', 'N200', 'DVG01901948', channels);
    tv.currentChannel = 2;
    tv.prevChannel();
    expect(tv.printTV()).toEqual(
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
| |   Первый канал   |       |
| |                  |  (-)  |
| |                  |       |
| \\                  / :|||: |
|  -ooo--------------  :|||: |
+----------------------------+
[]                    [] 
    CoolTV N200`,
    );
  });
  it('should return last channel if switching to previous channel on first channel', () => {
    const tv = new Television('CoolTV', 'N200', 'DVG01901948', channels);
    tv.currentChannel = 1;
    tv.prevChannel();
    expect(tv.printTV()).toEqual(
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
| | Cartoon Network  |       |
| |                  |  (-)  |
| |                  |       |
| \\                  / :|||: |
|  -ooo--------------  :|||: |
+----------------------------+
[]                    [] 
    CoolTV N200`,
    );
  });
  it('should return first channel if switching to next channel on last channel', () => {
    const tv = new Television('CoolTV', 'N200', 'DVG01901948', channels);
    tv.currentChannel = channels.length;
    tv.nextChannel();
    expect(tv.printTV()).toEqual(
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
| |   Первый канал   |       |
| |                  |  (-)  |
| |                  |       |
| \\                  / :|||: |
|  -ooo--------------  :|||: |
+----------------------------+
[]                    [] 
    CoolTV N200`,
    );
  });
});
