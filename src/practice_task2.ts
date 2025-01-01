const year : number = 2028;
// year = 2021; // Error: Because it is not mutable

let age2 : number = 28;
age2 = 21; // NO error: It is mutable

var movie_name : string = "Interstellar";
var movie_name : string = "Avengers";
let movie_name1 = 'abc';

const timeLeft : number = 10;
let a : number = 10;
{
    const timeLeft : number = 20;
    let a : number = 10;
    var b : number = 10.2;
    
}
console.log(b);

(function () : void {
    var c : number = 10;
    console.log(c);
})();
console.log(c); // var is function scoped