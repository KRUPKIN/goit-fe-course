/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Используйте делегирование.
*/
const menuList = document.querySelector('.list');

menuList.addEventListener('click', deleteMenuItem);

function deleteMenuItem(event) {
const target = event.target;
const nodeName = target.nodeName;
const parent = target.parentNode;
if (nodeName !== 'BUTTON')return
parent.remove();
};

