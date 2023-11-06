import { Cat } from './cat';

const Cat1 = new Cat (7, 'Кеша', 'Шотландский вислоухий');
Cat1.Age = 7;
Cat1.Weight = 5;
Cat1.Breed = 'Шотландский вислоухий';

const Cat2 = new Cat (undefined, 'Кисик', 'Британский');
Cat2.Age = 6;
Cat2.Weight = 7;
Cat2.Breed = 'Британский';

const Cat3 = new Cat (15, 'Юми', 'Русский голубой');
Cat2.Age = 3;
Cat2.Weight = 4;
Cat2.Breed = 'Русский голубой';

console.log(Cat1.getInfo())
console.log(Cat2.getInfo())
console.log(Cat3.getInfo())
