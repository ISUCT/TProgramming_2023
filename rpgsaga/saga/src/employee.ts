export class Employee {
    private theName: string;
    private theHireDate: string;
    private aPosition: string;
    private aSalary: number;
    private anEmail: string;
    private aPhoneNumber: string;


    static employeeCount = 0;
    constructor(name: string = 'Не указано', position: string = 'Не указана', hireDate: string = 'Не указана', email: string = 'Не указана', phoneNumber: string = 'Не указан', salary: number = 0) {
      this.theName = name;
      this.theHireDate = hireDate;
      this.aPosition = position;
      this.aSalary = salary; 
      this.anEmail = email;
      this.aPhoneNumber = phoneNumber;
      Employee.employeeCount += 1;
      
    }
    set salary(salary: number){
        this.aSalary = salary;
    }

    get salary(): number{
        return this.aSalary
    }

    set position(position: string){
        this.aPosition = position;
    }

    get position(): string{
        return this.aPosition;
    }

    set email(email: string){
        this.anEmail = email;
    }

    get email(): string{
        return this.anEmail;
    }

    set phoneNumber(phoneNumber: string){
        this.aPhoneNumber = phoneNumber;
    }

    get phoneNumber(): string{
        return this.aPhoneNumber;
    }
    get name(): string{
        return this.theName
    }

    get hireDate(): string{
        return this.theHireDate
    }

    getInfo(): string {
      return `ФИО: ${this.theName}; Должность: ${this.aPosition}; Дата приема на работу: ${this.theHireDate}; Заработная плата: ${this.aSalary} рублей; E-mail: ${this.anEmail}; Номер телефона: ${this.aPhoneNumber}.`
    }   

}
