// Destructuring object
const user2 : User = {
    id: 2,
    name: "John Doe",
    mobile: 9999999999,
    age: 26,
    email: "johndoe@email.com",
};

const {id : userId , name : userName } = user2;
const {id, email } = user2;
console.log(`id: ${userId}, name: ${userName}`);

//Destructuring array
const numArr : number[] = [1,2,3,4,5];

const [one, two, , , five] = numArr;
console.log(`One: ${one}, Two: ${two}, Five: ${five}`);

const numArrMerged : number[] = [...numArr];
console.log(numArrMerged);

// Rest Parameter
function sum(...rest : number[]) : number {
    let sum = rest.reduce((acc, curr) => acc + curr, 0);
    return sum;
} 

console.log(sum(1, 2, 3, 4, 5));