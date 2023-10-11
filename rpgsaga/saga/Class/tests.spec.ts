import { Dish } from "./dish";
import { Entertainment } from "./entertainment";

describe('Testing constructor', () => {
  it("Services should be created", () => {
    let name = "name";
    let price = 100;
    let mass = 80;
    let time = 30;
    const first = new Dish(name, price, mass);
    const second = new Entertainment(name, price, time);
    expect(first.name).toEqual(name);
    expect(first.price).toEqual(price);
    expect(first.mass).toEqual(mass);
    expect(second.name).toEqual(name);
    expect(second.price).toEqual(price);
    expect(second.time).toEqual(time);
  });
  it("Services with empty parameters", () => {
    let name = "name";
    let price = 100;
    const first = new Dish(name, price);
    const second = new Entertainment(name, price);
    expect(first.name).toEqual(name);
    expect(first.price).toEqual(price);
    expect(first.mass).toBeUndefined();
    expect(second.name).toEqual(name);
    expect(second.price).toEqual(price);
    expect(second.time).toBeUndefined();
  });
});
describe('Testing methods', () => {
    it("Trying to pay without enough money", () => {
      let name = "name";
      let money = 10;
      let moneyMemory = money;
      let price = 100;
      const first = new Dish(name, price);
      const second = new Entertainment(name, price);
      first.pay(money);
      second.pay(money);
      expect(money).toEqual(moneyMemory);
    });

});