import { Fighter } from '../src/index';
import { Game } from '../src/index';
import { Ranger } from '../src/index';

describe("RPG SAGA tests", () => {
it('Checking the quick class initialisation', () => {
    let w = new Fighter("Carolus");
    expect(w.name).toEqual("Carolus");
    expect(w.health).toEqual(12);
    expect(w.strength).toEqual(4);
    expect(w.combustionCondition).toEqual(0);
});
it('Checking the creation of a list of available methods', () => {
    let e = new Ranger("Aaron");
    const availableMethods = Object.getOwnPropertyNames(Ranger.prototype).filter(
        property =>
          typeof e[property] === 'function' &&
          property !== 'move' &&
          property !== 'fireArrows' &&
          property !== 'constructor',
      );
    expect(availableMethods).toEqual(['strike']);
});
it('Checking the alternative Game creation', () => {
    expect(() => new Game(0, 4, [])).toThrow(
      new Error(`Количество игроков во вручную поданном массиве должно соответствовать количеству прописанных в игре игроков`)
    );
});
it('Checking the basic Game creation', () => {
    let r = new Game(0, 4);
    expect(r.players.length).toEqual(4);
});
});