import { Main } from '../src/main';
import { Logger } from '../src/logger/logger';
import { HEROES, NAMES } from '../src/constants/config';

describe('Test game', () => {
  it('at the end  of the game there should be 1 hero left', () => {
    const game = new Main();
    game.startGame(4);
    expect(game.heroes.length).toBe(1);
  });
  it('if there are less than 2 heroes at the start of the game, the game will not start', () => {
    const game = new Main();
    const spyFewHeroes = jest.spyOn(Logger, 'fewHeroes');
    game.startGame(1);
    expect(spyFewHeroes).toHaveBeenCalled();
    // mock cleaning
    spyFewHeroes.mockRestore();
  });
  it('generate a hero with a valid name and type', () => {
    const game = new Main();
    const hero = game.generateHero();
    expect(NAMES).toContain(hero.name);
    expect(Object.values(HEROES)).toContain(hero.heroType);
  });
});
