type User = {
    id: number,
    name: string,
    mobile: number,
    age: number,
    email: string,
    address?: string
};

const user1 : User = {
    id: 1,
    name: "John Doe",
    mobile: 9999999999,
    age: 26,
    email: "johndoe@email.com"
};

console.log(user1);