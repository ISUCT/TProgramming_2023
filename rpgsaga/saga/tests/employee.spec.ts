import { Employee } from '../src/employee';

describe('Testing employee constructor', () => {
  it('Employee should be created', () => {
    const employee1 = new Employee('Буянов Никита Васильвич', 'PR-менеджер', '15 октября 2014', 'nbuynowov1986@tarkov.com', '+7915-323-00-00', 100000);
    expect(employee1.name).toEqual('Буянов Никита Васильвич');
    expect(employee1.position).toEqual('PR-менеджер');
    expect(employee1.hireDate).toEqual('15 октября 2014');
    expect(employee1.email).toEqual('nbuynowov1986@tarkov.com');
    expect(employee1.phoneNumber).toEqual('+7915-323-00-00');
    expect(employee1.salary).toEqual(100000);
  });
});

describe('Testing employee methods', () => {
  it('Employee new position value', () => {
    const employee1 = new Employee('Буянов Никита Васильвич', 'PR-менеджер', '15 октября 2014', 'nbuynowov1986@tarkov.com', '+7915-323-00-00', 100000);
    employee1.position = 'Аналитик';
    expect(employee1.position).toEqual('Аналитик');
  });
  it('Employee new email value', () => {
    const employee1 = new Employee('Буянов Никита Васильвич', 'PR-менеджер', '15 октября 2014', 'bober1986@tarkov.com', '+7915-323-00-00', 100000);
    employee1.email = 'nbuynowov1986@tarkov.com'
    expect(employee1.email).toEqual('nbuynowov1986@tarkov.com');
  });
  it('Employee new phone number value', () => {
    const employee1 = new Employee('Буянов Никита Васильвич', 'PR-менеджер', '15 октября 2014', 'bober1986@tarkov.com', '+7915-323-00-00', 100000);
    employee1.phoneNumber = '+7920-363-33-33';
    expect(employee1.phoneNumber).toEqual('+7920-363-33-33');
  });
  it('Employee new salary value', () => {
    const employee1 = new Employee('Буянов Никита Васильвич', 'PR-менеджер', '15 октября 2014', 'bober1986@tarkov.com', '+7915-323-00-00', 100000);
    employee1.salary = 2000000;
    expect(employee1.salary).toEqual(2000000);
  });
});
