'use strict'

let money = +prompt ("Ваш бюджет на месяц", "");
let time = prompt ("Введите дату в формате YYYY-MM-DD", "");
let appData = {
    "бюджет": money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

 for (let i = 0; i < 2; i++) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt ("Во сколько обойдется?", "");
    if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
        && a != "" && b != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {

    }
};
// let i=0;
// while (i < 2) { 
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");
//     if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
//         && a != "" && b != "" && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//     };
//     i++
// }

//  do { 
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");
//     if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
//         && a != "" && b != "" && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//     };
//     i++
// } while (i < 2);

appData.moneyPerDay = appData['бюджет']/30;

alert ("Ваш бюджет на 1 день: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Это средний уровень достатка')
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка")
} else {
    console.log("Произошла ошибка")
}
