// 3 4 5 6
// "string" , 'strigs'
// true / false
// let a = {};
// console.log(a);


//- to String

// 1)
console.log(typeof(String(null)));
// 2)
console.log(typeof(""+ false));

// - to Number
// 1)
console.log(typeof(Number("5")));
// 2)
console.log(typeof(+'5'));
// 3)
console.log(typeof(parseInt("15px", 10)));

let ans = +prompt("Hello?", '');

//0, "", null, undefined, NaN

 let switcher = null;

 if (switcher) {
    console.log("Working..")
 };

switcher = 1;

if (switcher) {
    console.log("Working..")
 };

// 2)
console.log(typeof(Boolean("5")));

//3)
console.log(typeof(!!"5"));
console.log( "1"[0]);
let y = 1; let x = y = 2; console.log(x);