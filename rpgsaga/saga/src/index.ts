import { Employee } from "./employee";

const employee1 = new Employee('Буянов Никита Васильевич', 45, 200000, 'Главный разработчик')

employee1.a_age = 19
employee1.asalary = 5222
console.log(employee1.getInfo())