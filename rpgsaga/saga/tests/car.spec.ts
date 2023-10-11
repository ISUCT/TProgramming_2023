import { Car } from "../src/car";

describe(`Testing car constructor`, ()=>{
    it(`Car must be created`, ()=>{
        const car1 = new Car(2000, 120, `Toyota`);
        expect(car1.year).toEqual(2000);
        expect(car1.speed).toEqual(120);
        expect(car1.name).toEqual(`Toyota`);
    });
    it(`Car without a name`, ()=>{
        const car1 = new Car(2000, 120);
        expect(car1.year).toEqual(2000);
        expect(car1.speed).toEqual(120);
        expect(car1.name).toBeUndefined(); 
    });
    it('Car speed lower than bound', () => {
        const car1 = new Car(2000, -120);
        expect(car1.year).toEqual(2000);
        expect(car1.speed).toEqual(-120);
        expect(car1.name).toBeUndefined(); 
      });
      it('Car speed higher than bound', () => {
        const car1 = new Car(2000, 200);
        expect(car1.year).toEqual(2000);
        expect(car1.speed).toEqual(200);
        expect(car1.name).toBeUndefined(); 
      });
});
describe(`Car methods test`,()=>{
  it(`Set valid car speed`,()=>{
    const car1 = new Car(2000, 170,`Toyota`);
    car1.speed = 100;
    expect(car1.speed).toEqual(100);
  });
  it(`Set too low car speed`, ()=>{
    const car1 = new Car(2000, 170,`Toyota`);
    car1.speed = -100;
    expect(car1.speed).toEqual(100);
  });
  it(`Set too high car speed`, ()=>{
    const car1 = new Car(2000, 170,`Toyota`);
    car1.speed = 200;
    expect(car1.speed).toEqual(100);
  });
});