import { Gun } from '../src/gun';

describe('Testing gun constructor', () => {
  it('Gun must be create', () => {
    const first = new Gun('Пистолет 1', 15, 5);
    expect(first.model).toEqual('Пистолет 1');
    expect(first.magazine).toEqual(15);
    expect(first.bullets).toEqual(5);
  });

  it('Gun with empty string of bullets', () => {
    const first = new Gun('Пистолет 2', 10);
    expect(first.model).toEqual('Пистолет 2');
    expect(first.magazine).toEqual(10);
    expect(first.bullets).toEqual(10);
  });
  it('Number of bullets lower than bound', () => {
    const first = new Gun('Пистолет 3', 10, -5);
    expect(first.model).toEqual('Пистолет 3');
    expect(first.magazine).toEqual(10);
    expect(first.bullets).toEqual(10);
  });
  it('Number of bullets higher than bound', () => {
    const first = new Gun('Пистолет 4', 10, 15);
    expect(first.model).toEqual('Пистолет 4');
    expect(first.magazine).toEqual(10);
    expect(first.bullets).toEqual(10);
  });

  it('Magazine lower than bound', () => {
    const first = new Gun('Пистолет 5', -5, 15);
    expect(first.model).toEqual('Пистолет 5');
    expect(first.magazine).toEqual(20);
    expect(first.bullets).toEqual(15);
  });
  it('Magazine highed than bound', () => {
    const first = new Gun('Пистолет 6', 35, 15);
    expect(first.model).toEqual('Пистолет 6');
    expect(first.magazine).toEqual(20);
    expect(first.bullets).toEqual(15);
  });
});

describe('Testing gun methods', () => {
  it('The gun is firing', () => {
    const first = new Gun('Пистолет 7', 20, 20);
    expect(first.shot()).toEqual('The gun Пистолет 7 fired 1 times');
  });
  it('The gun fires several times', () => {
    const first = new Gun('Пистолет 8', 10, 10);
    expect(first.shot()).toEqual('The gun Пистолет 8 fired 1 times');
    expect(first.shot()).toEqual('The gun Пистолет 8 fired 2 times');
    expect(first.shot()).toEqual('The gun Пистолет 8 fired 3 times');
    expect(first.shot()).toEqual('The gun Пистолет 8 fired 4 times');
  });
  it('The gun ran out of ammo', () => {
    const first = new Gun('Пистолет 9', 20, 1);
    expect(first.shot()).toEqual('The gun Пистолет 9 fired 1 times');
    expect(first.shot()).toEqual('You are out of ammo. Recharge');
  });
  it('Reloading the gun', () => {
    const first = new Gun('Пистолет 10', 20, 1);
    expect(first.recharge()).toEqual('The magazine is being recharged');
    expect(first.bullets).toEqual(20);
  });
});
