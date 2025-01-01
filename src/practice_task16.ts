// if else-if ternary operator
const salary : number = 50000;
const salarySlab = (salary >= 100000) ? "High Salary" : (salary >= 50000) ? "Average Salary" : "Low Salary";
console.log(salarySlab);

// Declaring array of objects
interface employeeDetails {
    name : string,
    age : number,
    salary: number
};

// use of some and every
const arr : number[] = [1,2,3,4,5,6,7,8,9,10];
const even : boolean = arr.some((num) => num % 2 === 0);
console.log("Has Even Numbers :", even);
const greaterThanZero : boolean = arr.every((num) => num > 0);
console.log("Greater than zero :", greaterThanZero);

const employees: employeeDetails[] = [{
    name: "Aakash",
    age: 28,
    salary: 30000
}, {
    name: "Bhavesh",
    age: 32,
    salary: 50000
}, {
    name: "Chirag",
    age: 35,
    salary: 50000
}, {
    name: "Fenil",
    age: 29,
    salary: 30000
}, {
    name: "Hiren",
    age: 25,
    salary: 30000
}, {
    name: "Aakash",
    age: 44,
    salary: 80000,
    address: {
        city:
    }
}, 
];



// map on array of Objects
const employeesAfterIncrement: employeeDetails[] = employees.map((employee) => ({...employee, salary: employee.salary + 2000}));
console.log(employeesAfterIncrement)

// conditional map
const employeesAfterConditionalIncrement: employeeDetails[] = employees.map((employee) => ({...employee, 
    salary: (employee.age > 30) ? employee.salary + 3000 : employee.salary}));
console.log(employeesAfterConditionalIncrement);

console.log("Hello");