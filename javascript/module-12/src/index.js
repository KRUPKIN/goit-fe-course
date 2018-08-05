'use strict'
/* 
Напишите приложение для хранения url веб-страниц в виде карточек-закладок. 

Реализуйте следующий функционал:
    - Используйте Gulp для сборки проекта, JS обработан транспайлером Babel, ресурсы оптимизированы
    
    - Для добавления новой закладки, в приложении есть форма с элементом input и кнопкой "Добавить"
    
    - В приложении есть список всех добавленных карточек-закладок, располагающийся под формой
    
    - Некоторые элементы интерфейса создаются динамически. Используйте шаблонизатор Handlebars для
    создания списка карточек. Форма уже есть в HTML при загрузке страницы.

    - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходят проверки:
        * на существование закладки с такой ссылкой в текущей коллекции закладок. Если такая закладка есть,
        всплывает диалоговое окно оповещающее пользователя о том, что такая закладка уже есть.
        * при условии валидной, еще не существующей в коллекции ссылки, карточка с такой ссылкой
        добавляется в коллекцию.
    
    - В интерфейсе, новые карточки добавляются наверх списка, а не вниз.
    
    - Каждая карточка-закладка содержит кнопку для удаления карточки из коллекции, при клике 
    на кнопку происходит удаление.
    
    - При повторном посещении страницы с одного и того же устройства и браузера, пользователь видит
    все карточки-закладки которые были во время последнего его посещения. Используйте localStorage
    
🔔 Оформление интерфейса произвольное
*/

/*
⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ

    - При добавлении ссылки в поле формы и нажатии на кнопку "Добавить", происходи проверка 
    на валидность введенной ссылки: если был введен невалидный url то должно всплывать 
    диалоговое окно, оповещающее пользователя о том, что это невалидный url. Используйте
    регулярные выражения для валидации url.
    
    - Каждая карточка содержит превью изображение и базовую информацию о странице по адресу закладки,
    для получения этой информации воспользуйтесь этим Rest API - https://www.linkpreview.net/
*/

import './styles.css';
import './test.scss';

import * as storage from './services/storage';
import articleTpl from './templates/article.hbs';

const gallery = document.querySelector('.link-list');

const presistedUrl = storage.get();
let linkArrey = presistedUrl ? presistedUrl : [];
    if(linkArrey !== 0){
        linkArrey.forEach(element => {
            creator(element);
        });
    }


// СОЗДАЕМ ФОРМУ + ОБРАБОТЧИК
const form = document.querySelector(".js-form");
form.addEventListener("submit", catchUserLink);


// ЛОВИМ ИНПУТ
function catchUserLink(evt){
    evt.preventDefault();

    const userLink = VALIDATOR.validate(form);
    const isOriginalLink = inspector(linkArrey, userLink);
    if (isOriginalLink !== undefined){
        linkArrey.push(isOriginalLink);
        storage.set(linkArrey);
        creator(isOriginalLink)
    }
    console.log(linkArrey);

};
// ПРОВЕРКА НА URL
    const VALIDATOR = {
        paterns: {
            url: /^(?:([a-z]+):(?:([a-z]*):)?\/\/)?(?:([^:@]*)(?::([^:@]*))?@)?((?:[a-z0-9_-]+\.)+[a-z]{2,}|localhost|(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])))(?::(\d+))?(?:([^:\?\#]+))?(?:\?([^\#]+))?(?:\#([^\s]+))?$/i,
        },
        
        validate(form){
            const input = (form.querySelector("input"));
            const inputName = input.name;
            const inputValue = input.value;
            const valid = this.isValid(inputName, inputValue);
            if(inputValue.length === 0){
                alert('Пожалуйста, введите url...')
            }
            else if (!valid){
                alert('Пожалуйста, введите коректный url...')
            }
            else{
                return inputValue;
            }
        },

        isValid(paternKey, value){
            return this.paterns[paternKey].test(value);
        },
    };
// ПРОВЕРКА НА ПОВТОР
    function inspector(arr, userLink){
        const link = arr.find(url => url.includes(userLink));
        if(link !== undefined){
            alert('Такая ссылочка уже есть(((')
        }
        else return userLink
    };
// СОЗДАНИЕ КАРТОЧКИ
    function creator(link){
        const article = articleTpl({url: link});
        gallery.insertAdjacentHTML('afterbegin', article);
        // СОЗДАЕМ КНОПКУ + ОБРАБОТЧИК
            const removeButton = document.querySelector('.remove-btn')
            removeButton.addEventListener('click', deleteLink);
    };
// УДАЛЕНИЕ КАРТОЧКИ
    function deleteLink(evt){
        const target = evt.target;
        const parent = target.parentNode;
        const elem = target.nextElementSibling.textContent;
        const unDeletedUrl = linkArrey.filter(url => url !== elem)
        console.log(unDeletedUrl);
        console.log(elem);
        console.log(target);
        console.log(parent);
        parent.remove();
        linkArrey = unDeletedUrl;
        storage.set(linkArrey);
    };

