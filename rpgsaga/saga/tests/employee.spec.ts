import { Employee } from '../src/employee';

describe('Testing employee constructor', () => {
  it('Employee should be created', () => {
    const employee1 = new Employee('Буянов Никита Васильвич', 45, 200000, 'Уборщик')
    expect(employee1.name).toEqual('Буянов Никита Васильвич');
    expect(employee1.position).toEqual('Уборщик');
    expect(employee1.salary).toEqual(20000);
    expect(employee1.a_age).toEqual(45);
  });
});

describe('Testing employee methods', () => {
  it('Employee new position value', () => {
    const employee1 = new Employee('Буянов Никита Васильвич', 45, 200000, 'Аналитик');
    employee1.position = 'Аналитик';
    expect(employee1.position).toEqual('Аналитик');
  });
  it('Employee new age value', () => {
    const employee1 = new Employee('Буянов Никита Васильвич', 45, 200000, 'Аналитик');
    employee1.age = 22
    expect(employee1.age).toEqual(45);
  });
  it('Employee new salary value', () => {
    const employee1 = new Employee('Буянов Никита Васильвич', 45, 200000, 'Аналитик');
    employee1.salary = 15;
    expect(employee1.salary).toEqual(15);
  });
});
