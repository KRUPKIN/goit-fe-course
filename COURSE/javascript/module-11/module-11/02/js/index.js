'use strict'
/*
  К pen уже подключен Handlebars.
  
  Создайте шаблон поста указаного во вкладке HTML.
  Отрендерите список постов в DOM по данным из массива posts.
  
  Если в объекте поле isFav=true, в посте должна быть 
  разметка иконки избранного поста, в противном случае
  разметки иконки быть не должно.
  
  Используйте эту иконку для фона:
  https://image.flaticon.com/icons/svg/290/290413.svg
*/

const posts = [
  { title: "post 1", text: "text 1", isFav: true },
  { title: "post 2", text: "text 2", isFav: false },
  { title: "post 3", text: "text 3", isFav: true },
  { title: "post 4", text: "text 4", isFav: false }
];

const block = document.querySelector(".block")

const source = document.querySelector('.source').innerHTML.trim();
const template = Handlebars.compile(source);
const markup = template(posts);

block.insertAdjacentHTML('afterbegin', markup);

