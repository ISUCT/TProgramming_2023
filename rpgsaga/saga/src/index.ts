import { Employee } from './employee';

const employee1 = new Employee('Буянов Никита Васильвич', 'PR-менеджер', '15 октября 2014');

employee1.position = 'Аналитик';
employee1.salary = 100000;
employee1.email = 'nbuynowov1986@tarkov.com'

const employee2 = new Employee('Дмитриев Иван Иванович', 'Тестировщик', '26 ноября 2014');

employee2.position = 'Разработчики';
employee2.salary = 240000;
employee2.phoneNumber = '+7915-323-00-00'

const employee3 = new Employee(undefined, undefined, '15 октября 2014', 'nbuynowov1986@tarkov.com', '+7915-323-00-00', 100000);

console.log(employee1.getInfo())
console.log(employee2.getInfo())
console.log(employee3.getInfo())
console.log(`Количество сотрудников: ${Employee.employeeCount}`)