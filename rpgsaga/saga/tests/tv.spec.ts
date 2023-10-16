import { Television, Channel } from '../src/tv';

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
    expect(tv.printedTV()).toEqual(
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
