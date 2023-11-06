import { Cat } from '../src/cat';

describe('Testing cat constructor', () => {
  it('Cat should be created', () => {
    const cat1 = new Cat(7, 'Кеша', 'Шотландский вислоухий', 5);
    expect(cat1.Age).toEqual(7);
    expect(cat1.Name).toEqual('Кеша');
    expect(cat1.Breed).toEqual('Шотландский вислоухий');
    expect(cat1.Weight).toEqual(5);
  });
});

describe('Testing cat methods', () => {
  it('Cat new age value', () => {
    const cat1 = new Cat(7, 'Кеша', 'Шотландский вислоухий', 5);
    cat1.Age = 7;
    expect(cat1.Age).toEqual(7);
  });
  it('Cat new name value', () => {
    const cat1 = new Cat(7, 'Кеша', 'Шотландский вислоухий', 5);
    cat1.Name = 'Кеша';
    expect(cat1.Name).toEqual('Кеша');
  });
  it('Cat new weight', () => {
    const cat1 = new Cat(7, 'Кеша', 'Шотландский вислоухий', 5);
    cat1.Weight = 5;
    expect(cat1.Weight).toEqual(5);
  });
  it('Cat new breed', () => {
    const cat1 = new Cat(7, 'Кеша', 'Шотландский вислоухий', 5);
    cat1.Breed = 'Шотландский вислоухий';
    expect(cat1.Breed).toEqual('Шотландский вислоухий');
  });
});
