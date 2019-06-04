'use strict'

let money = prompt ("Ваш бюджет на месяц", "");
let time = prompt ("Введите дату в формате YYYY-MM-DD", "");
let appData = {
    "бюджет": money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let reqMoney = prompt ("Введите обязательную статью расходов в этом месяце");
appData.expenses[reqMoney] = prompt ("Во сколько обойдется?");

alert ("Ваш бюджет на 1 день: " + (money - appData.expenses[reqMoney])/30);
