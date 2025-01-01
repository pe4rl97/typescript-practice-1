"use strict";
const year = 2028;
// year = 2021; // Error: Because it is not mutable
let age2 = 28;
age2 = 21; // NO error: It is mutable
var movie_name = "Interstellar";
var movie_name = "Avengers";
let movie_name1 = 'abc';
const timeLeft = 10;
let a = 10;
{
    const timeLeft = 20;
    let a = 10;
    var b = 10.2;
}
console.log(b);
(function () {
    var c = 10;
    console.log(c);
})();
console.log(c); // var is function scoped
//# sourceMappingURL=practice_task2.js.map