
import { Calculating_machine } from '../src/main';
import { HDD } from '../src/main';
import { massive7 } from '../src/main';

describe("Testing Calculating_machine and HDD", () => {
it('Test to check the test operation', () => {
    expect(Math.max(1, 5, 10)).toBe(10);
});
it("Computer should be created", () => {
    const pc = new Calculating_machine("Admin", 400);
    expect(pc.name).toEqual("Admin");
    expect(pc._device_energy_consumption).toEqual(400);
});
it("Is get working correctly?", () => {
    const hdd = new HDD("Patriot", 1024, 400, 500);
    expect(hdd.memory).toEqual(1024)
});
it("Memory cannot be negative", () => {
    expect(() => new HDD("Toshiba", -1024, 500, 500)).toThrow(Error)
})
it("toString should work", () => {
    const hdd = new HDD("Patriot", 1024, 400, 500);
    expect(hdd.toString()).toEqual(`HDD - Name: Patriot, Memory: 1024, Data transfer time per second: 400, Energy consumption: 500`)
})
it("Function massive7 should work", () => {
    const hdd = new HDD("Patriot", 1024, 400, 500);
    const pc = new Calculating_machine("Admin", 400);
    let expectation = massive7(pc, hdd)
    expect(expectation[1]).toEqual(`HDD - Name: Patriot, Memory: 1024, Data transfer time per second: 400, Energy consumption: 500`)
})
})