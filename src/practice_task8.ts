const arr1 : string[] = ["Red", "Green", "Blue", "Orange"];
console.log(arr1);
arr1.push("Pink");
console.log(arr1);

arr1.shift();
console.log(arr1);

arr1.forEach((color) => console.log(color));

console.log("Index of Blue:", arr1.indexOf("Blue"));