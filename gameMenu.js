'use strict';



window.onload=function() {
    const greeting = document.getElementsByClassName('greeting')[0]; // получаем первый элемент класса greeting

    greeting.addEventListener('click', () => { // назначим на событие клик фукцию описанную ниже


        greeting.hidden = true;//скроем элемент

    }, false); //false -  определяем где перехватываем событие






    const  sections = [ // определяем элементы меню + их надо подписать в html application
        ['login','Окно логина'],['profile','Мой профиль'],['about','Об игре'] // первый элемент - data-section; второй надпись на кнопке
    ];


const application = document.querySelector('#application');// ссылка на элемент  можно получать и так
const  nav = document.getElementById("navigation"); // ссылка на элемент              и так

    for (let section of sections){
        const button = document.createElement('input');
        button.setAttribute('type','button');
        button.setAttribute('data-section',section[0]);
        button.value=section[1];
        nav.appendChild(button); // вставляем созданный элемент
}


    const liveSectionsCollection = application.getElementsByTagName('section');// выбираем все пункты меню!




    nav.addEventListener('click', function(event){ // функция вывода одного выборного пункта меню и его вывода
    const  sectionID = event.target.getAttribute('data-section');// выбираем поле

        console.log(sectionID);// вывод в консоль браузера то, на что нажали (поле)
        console.log(  liveSectionsCollection);

        const liveSectionsArray = Array.from(liveSectionsCollection);// приводим к масиву (в нашей колеекции нет метода forEach)

        liveSectionsArray.forEach(function (sectionElement) {
            sectionElement.hidden = true;
            if (sectionElement.id==sectionID){// сравниваем то на что нажали со всеми section в nav
                sectionElement.hidden = false; // видно только тот, на который кликнули
                }
            });
        });






};



