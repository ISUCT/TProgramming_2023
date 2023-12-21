class Person {
    public name: string
    public age: number

    constructor(name:string, age: number){
        this.name = name
        this.age = age
    }   
}

export class Employee extends Person {
    public salary: number
    public aPosition: string

    constructor(name: string, age: number, salary: number, position: string){
        super(name, age)
        this.salary = salary
        this.aPosition = position
    }

    set asalary(salary: number){
        if (salary < 0){
            throw new Error("Salary must be non-negative")
        }
        this.salary = salary
        
    }

    set position(position: string){
        this.aPosition = position
    }

    set a_age(age: number){
        if (age < 18){
            throw new Error("The person must be of legal age")
        }
        this.age = age
    }

    getInfo(): string {
        return `Name: ${this.name}; Age: ${this.age}; Position: ${this.aPosition}; Salary: ${this.salary} $`
    }
}