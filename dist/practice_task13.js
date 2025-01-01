"use strict";
class Employee {
    constructor(employeeId, name, age) {
        this.employeeId = employeeId;
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
const emp1 = new Employee(101, "Bob", 29);
console.log(emp1.employeeId);
console.log(emp1.getName());
console.log(emp1.age);
//# sourceMappingURL=practice_task13.js.map