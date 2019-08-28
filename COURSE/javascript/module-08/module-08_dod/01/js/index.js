/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

const button = document.querySelector('.button')


button.addEventListener('click', () => {
button.textContent = +button.textContent + 1;
});