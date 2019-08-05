'use strict'
// let money, time;
// function start() {
//     money = +prompt ("Ваш бюджет на месяц", "");
//     time = prompt ("Введите дату в формате YYYY-MM-DD", "");

//     while(isNaN(money) || money == "" || money == null) {
//         money = +prompt ("Ваш бюджет на месяц", "");
//         time = prompt ("Введите дату в формате YYYY-MM-DD", "");
//     };

// };

// start();

// let appData = {
//     "бюджет": money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: true,
//     chooseExpenses: function() {
//         for (let i = 0; i < 2; i++) {
//             let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//                 b = prompt ("Во сколько обойдется?", "");
//             if ( (typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
//                 && a != "" && b != "" && a.length < 50) {
//                 console.log("done");
//                 appData.expenses[a] = b;
//             } else {
        
//             }
//         }; 
//     },
//     detectDayBudget: function() {
//         appData.moneyPerDay = (appData['бюджет']/30).toFixed();
//         alert ("Ваш бюджет на 1 день: " + appData.moneyPerDay);
//     },
//     detectLevel: function() {
//         if (appData.moneyPerDay < 100) {
//             console.log("Минимальный уровень достатка");
//         } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//             console.log('Это средний уровень достатка')
//         } else if (appData.moneyPerDay > 2000) {
//             console.log("Высокий уровень достатка")
//         } else {
//             console.log("Произошла ошибка")
//         }
//     },
//     checkSavings: function() {
//         if(appData.savings == true){
//             let save = +prompt("Какова сумма накоплений?", ""),
//                 percent = +prompt("Под какой процент?");
            
//             appData.mothIncome = save/100/12*percent;
//             alert("Доход в месяц с вашего депозита: " + appData.mothIncome);
//             };
//     },
//     chooseOptExpenses: function() {
//         for (let i = 1; i <= 3; i++) {
//             appData.optionalExpenses[i] = prompt("Статья необязательных расходов?");
//         };
//     },
//     chooseIncome: function() {
//         let items = prompt("Что принесёт дополнительный доход? (Перечислить через запятую)", "");
//         while (items == null || items ==="") {
//             items = prompt("Что принесёт дополнительный доход? (Перечислить через запятую)", "");
//         };
//         if ( (typeof(items)) === "string" && (typeof(items)) != null && items != "" && items.length < 50) {
//             appData.income = items.split(", ");
//             appData.income.push(prompt("Может что-то ещё?"));
//             appData.income.sort();
//         } else {
//         };
//         let cons = [];
//         appData.income.forEach(function(item , i ) {
//             cons.push((i+1) + ": " + item)
//         });
//         alert("Способы доп. заработка: " + cons.join(", ") + "."); 
//     },
// };

// for (let key in appData) {
//     console.log("Наша программа включает в себя данные: " + key + ": " + appData[key]);
// };

let start = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value")[0],
    daybudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthsavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0],
    expensesItem = document.getElementsByClassName("expenses-item"),
    btn = document.getElementsByTagName("button"),
    expensesItemBtn = btn[0],
    optionalExpensesBtn = btn[1],
    countBudgetBtn = btn[2],
    optionalExpensesItem = document.querySelectorAll("optionalexpenses-item"),
    chooseIncome = document.querySelector(".choose-income"),
    savings = document.querySelector("#savings"),
    chooseSum = document.querySelector(".choose-sum"),
    choosePercent = document.querySelector(".choose-percent"),
    yearValue = document.querySelector(".year-value"),
    monthValue = document.querySelector(".month-value"),
    dayValue = document.querySelector(".day-value");
    
console.log(start);
console.log(budgetValue);
console.log(daybudgetValue);
console.log(levelValue);
console.log(expensesValue);
console.log(optionalexpensesValue);
console.log(incomeValue);
console.log(monthsavingsValue);
console.log(yearsavingsValue);
console.log(expensesItem);
console.log(btn);
console.log(expensesItemBtn);
console.log(optionalExpensesBtn);
console.log(countBudgetBtn);
console.log(optionalExpensesItem);
console.log(chooseIncome);
console.log(savings);
console.log(chooseSum);
console.log(choosePercent);
console.log(yearValue);
console.log(monthValue);
console.log(dayValue);


