"use strict";
// Destructuring object
const user2 = {
    id: 2,
    name: "John Doe",
    mobile: 9999999999,
    age: 26,
    email: "johndoe@email.com",
};
const { id: userId, name: userName } = user2;
console.log(`id: ${userId}, name: ${userName}`);
//Destructuring array
const numArr = [1, 2, 3, 4, 5];
const [one, two, , , , , five] = numArr;
console.log(`One: ${one}, Two: ${two}, Five: ${five}`);
const numArrMerged = [...numArr, ...numArr];
console.log(numArrMerged);
// Rest Parameter
function sum(...rest) {
    let sum = rest.reduce((acc, curr) => acc + curr, 0);
    return sum;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
//# sourceMappingURL=practice_tasks11.js.map