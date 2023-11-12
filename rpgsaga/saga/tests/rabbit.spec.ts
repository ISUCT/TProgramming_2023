import { Rabbit } from '../src/rabbit';

describe('Testing rabbit constructor', () => {
    it('Rabbit should be created', () => {
      const first = new Rabbit(5, 'Dutch dwarf', 'black', 'Malebu');
      expect(first.age).toEqual(5);
      expect(first.breed).toEqual('Dutch dwarf');
      expect(first.color).toEqual('black');
      expect(first.rabName).toEqual('Malebu');
    });
    it('Rabbit with empty name', () => {
      const first = new Rabbit(5, 'Dutch dwarf', 'black');
      expect(first.age).toEqual(5);
      expect(first.breed).toEqual('Dutch dwarf');
      expect(first.color).toEqual('black');
      expect(first.rabName).toBeUndefined();
    });
    it('Rabbit age lower than bound', () => {
      const first = new Rabbit(0, 'Dutch dwarf', 'black');
      expect(first.age).toEqual(1);
      expect(first.breed).toEqual('Dutch dwarf');
      expect(first.color).toEqual('black');
      expect(first.rabName).toBeUndefined();
    });
    it('Rabbit age higher than bound', () => {
      const first = new Rabbit(14, 'Dutch dwarf', 'black');
      expect(first.age).toEqual(1);
      expect(first.breed).toEqual('Dutch dwarf');
      expect(first.color).toEqual('black');
      expect(first.rabName).toBeUndefined();
    });
  });

  describe('Testing rabbit methods', () => {
    it('Rabbit age set valid value', () => {
      const first = new Rabbit(10, 'black', 'Dutch dwarf');
      first.age = 5;
      expect(first.age).toEqual(5);
    });
    it('Rabbit age lower than valid value', () => {
      const first = new Rabbit(10, 'black', 'Dutch dwarf');
      first.age = 0;
      expect(first.age).toEqual(10);
    });
    it('Rabbit age higher than valid value', () => {
      const first = new Rabbit(10, 'black', 'Dutch dwarf');
      first.age = 20;
      expect(first.age).toEqual(10);
    });
  });