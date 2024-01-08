class Employee{

    private data: Date;
    private name: string;
    private age: number;

    setData(data: Date): void{
        this.data = data;
    }

    hiring(name: string, age: number): void{
        this.data = new Date();
        this.name = name;
        this.age = age;
    }

    getData(): Date{
        return this.data;
    }

    constructor(name: string, age: number); 

    constructor(name: string, age: number, data?: Date) {
        if (data) {
            this.name = name;
            this.age = age;
            this.data = data;
        }
        else {
            this.hiring(name, age);
        }
    }


}

const employee = new Employee('Tom', 37);

const data = new Date();
employee.setData(data);
console.log(employee.getData());