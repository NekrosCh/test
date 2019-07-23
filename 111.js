// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };
// console.log(options.name);
// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool;

// console.log(options);

// for (let key in options) {
//     console.log("Свойство " + key + " имеет значение " + options[key]);
// };

// console.log(Object.keys(options).length);

// let arr = ["first", 2, 3, "four", 5];

// //for(let i=0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// 

// let ans = prompt("",""),
//     arr = [];

// arr = ans.split(",");

// console.log(arr);

// let arr = ["awdwd", "wdwffd", "dsgsdg", "dsgsdg"],
//     i = arr.join(", ");

// console.log(i);

let arr = [1, 15, 4];
    i = arr.sort(compareNum);

function compareNum(a,b) {
    return a-b;
}
    console.log(i);

let soldier = {
    health: 400,
    armor: 100,
};

let john = {
    health: 100
};

john.__proto__ = soldier;
console.log(john);
console.log(john.armor);
