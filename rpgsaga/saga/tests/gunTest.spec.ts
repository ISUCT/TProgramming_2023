import { Gun } from '../src/gun';

describe('Testing gun constructor', () => {
  it('gun must be create', () => {
    const first = new Gun('Пистолет 1', 15, 5.45);
    expect(first.model).toEqual('Пистолет 1');
    expect(first.bullets).toEqual(15);
    expect(first.caliber).toEqual(5.45);
  });
  it('Gun with empty caliber', () => {
    const first = new Gun('Пистолет 2', 10);
    expect(first.model).toEqual('Пистолет 2');
    expect(first.bullets).toEqual(10);
    expect(first.caliber).toBeUndefined();
  });
});

describe('Testing gun methods', () => {
  it('Gun set fullMagazine valid value', () => {
    const first = new Gun('Пистолет 3', 20, 3.62);
    expect(first.fullMagazin()).toEqual('magazine full');
  });
  it('Gun set medium value', () => {
    const first = new Gun('Пистолет 4', 13, 4.5);
    expect(first.fullMagazin()).toEqual('in magazine 13 bullets');
  });
  it('Gun set lower than valid value', () => {
    const first = new Gun('Пистолет 5', -1, 2.5);
    expect(first.fullMagazin()).toEqual('go recharge');
  });
  it('Gun must shot', () => {
    const first = new Gun('Пистолет 6', 10, 3.62);
    expect(first.shot()).toEqual('The Model Пистолет 6 pistol fired');
  });
  it('Gun must recharge', () => {
    const first = new Gun('Пистолет 7', 2, 3.62);
    expect(first.recharge()).toEqual('The magazine is being recharged');
  });
});
