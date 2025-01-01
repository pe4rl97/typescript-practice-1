//use of interface
interface Person {
    name : string,
    age : number,
    getName() : string
}

class Employee implements Person {
    constructor(public employeeId: number, public name: string, public age: number) {
    }

    getName(): string {
        return this.name;
    }
}

const emp1 = new Employee(101, "Bob", 29);
console.log(emp1.employeeId);
console.log(emp1.getName());
console.log(emp1.age);