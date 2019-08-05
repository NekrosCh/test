

let menuItem = document.getElementsByClassName("menu-item"),
    menu = document.querySelector(".menu"),
    title = document.getElementById("title"),
    adv = document.querySelector(".adv"),
    column = document.querySelector(".column");
    question = document.getElementById("prompt")


    menu.insertBefore(menuItem[1],menuItem[3]);
// menuItem[4]= document.createElement("li");
// menuItem[4].classList.add("menu-item");
// menuItem[4].innerHTML = "<li>Пятый элемент</li>";
menuItemFive=document.createElement("li");
menuItemFive.classList.add("menu-item");
menuItemFive.innerHTML = "Пятый элемент";
menu.appendChild(menuItemFive);
document.body.style.background = "url(../img/apple_true.jpg) center no-repeat";
title.textContent = "Мы продаем только подлинную технику Apple";
// column.removeChild(adv);
adv.remove();

question.textContent = prompt("Добро пожаловать! Каково ваше отношение к технике Apple?", "");


console.log(menu);