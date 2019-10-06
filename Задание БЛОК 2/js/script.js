window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        };

    };

    hideTabContent(1);
    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');

        };


    };

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                };

            };

        };


    });


    // Таймер

    let deadline = '2019-09-10';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor(((t/(1000*60*60))-3));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        }
    };

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        
        function updateClock() {
            let t = getTimeRemaining(endtime);

            function addZero(num) {
                    if(num <= 9) {
                            return '0' + num;
                    } else return num;

            };

            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
          

            if(t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            };
        };

    };
    setClock('timer', deadline);


    // Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        btnDescription = document.querySelectorAll('.description-btn');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

     for (let i = 0; i < btnDescription.length; i++) {
        btnDescription[i].addEventListener('click', function() {
            overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
        });
     };

     //Form

    //  let message = {
    //     loading: 'Загрузка...',
    //     success: 'Спасибо! Скоро мы с вами свяжемся!',
    //     failure: 'Что-то пошло не так...'

    //  };

    // let form = document.getElementsByTagName("form"),
    //     input = form.getElementsByTagName('input'),
    //     statusMessage = document.createElement('div');
    //     // formContact = document.getElementById('form'),
    //     // inputContact = formContact.getElementsByTagName('input'); 


    //     statusMessage.classList.add('status');

    
    // for (let i=0; i < form.length; i++) {
    // form[i].addEventListener('submit', function (event) {
    //     event.preventDefault();
    //     form[i].appendChild(statusMessage);

    //     let request = new XMLHttpRequest();
    //     request.open('POST', 'server.php');
    //     //request.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded'); для отправки запроса в обычном формате
    //     request.setRequestHeader( 'Content-Type','application/json; charset=utf-8'); //json format


    //     let formData = new FormData(form[i]);
        

    //     let obj = {};                               // для отправки в JSON формате необходимо превратить объект формдата в обычный объект
    //     formData.forEach(function(value, key) {
    //         obj[key] = value;
    //     });
        
    //     let json = JSON.stringify(obj);

    //     //request.send(formData); для отправки в обычной форме
    //     request.send(json);

    //     request.addEventListener('readystatechange', function() {
    //         if (request.readyState < 4) {
    //             statusMessage.innerHTML = message.loading;
    //         } else if(request.readyState === 4 && request.status == 200) {
    //             statusMessage.innerHTML = message.success;
    //         } else {
    //             statusMessage.innerHTML = message.failure;
    //         }

    //     });

    //     for (let i=0; i < input.length; i++) {

    //         input[i].value = '';
    //     }
    // });
    // };


     // мой варинат в JSON формате, не до конца рабочий - "Почему что пишет , что загружается, хотя вроде всё выполнилось"
    // formContact.addEventListener('submit', function(event) {

    //     event.preventDefault();
    //     formContact.appendChild(statusMessage);

    //     let myReq = new XMLHttpRequest();
    //     myReq.open('POST', 'server.php');
    //     myReq.setRequestHeader( 'Content-Type','application/json; charset=utf-8');

    //     let formContData = new FormData(formContact);
        
    //     let obj = {};                               
    //     formContData.forEach(function(value, key) {
    //         obj[key] = value;
    //     });
        
    //     let json = JSON.stringify(obj);

    //     myReq.send(json);

    //     myReq.addEventListener('readystatechange', function() {
    //         if (myReq.readyState < 4) {
    //             statusMessage.innerHTML = message.loading;
    //         } else if(myReq.readyState === 4 && request.status == 200) {
    //             statusMessage.innerHTML = message.success;
    //         } else {
    //             statusMessage.innerHTML = message.failure;
    //         }

    //     });

    //     for (let i=0; i < inputContact.length; i++) {

    //         inputContact[i].value = '';
    //     };

    // });



    // Рабочий вариант из комментариев в обычном формате;

    let message = {
            loading: 'Загрузка...',
            success: 'Спасибо! Скоро свяжемся с вами!',
            failure: 'Что-то пошло не так...'
        };
 
        let form = document.getElementsByClassName('main-form')[0],
            formBottom =document.getElementById('form'),
            input = document.getElementsByTagName('input'),
            statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
 
    function sendForm(elem){

        elem.addEventListener('submit', function(event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
            let formData = new FormData(elem);
            
            function postData (data) {
            return new Promise(function(resolve,reject) {
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
 
 
            request.addEventListener('readystatechange', function() {
                if (request.readyState < 4) {
                   resolve();
                } else if (request.readyState === 4 && request.status == 200) {
                    resolve();
                } else {
                    reject();
                }
            });
 
            request.send(data);
        
            });
            }
        

        function clearInput () {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        postData(formData)
            .then(()=> statusMessage.innerHTML = message.loading)
            .then(()=> statusMessage.innerHTML = message.success)
            .catch(()=> statusMessage.innerHTML = message.failure)
            .then(clearInput);
            
    
    });
}

sendForm(form);
sendForm(formBottom);
     
});