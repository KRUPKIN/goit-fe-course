/*
  Дан спан и кнопки +1, -1, которые будут увеличивать 
  и уменьшать на 1 значение спана. Сделайте так, чтобы 
  это значение не могло стать меньше нуля.
*/


const buttonToUp = document.querySelector('.js-add');
const buttonToDown = document.querySelector('.js-sub');
const display = document.querySelector('.js-value');


const goToDown = function() {
  if (+display.textContent <=  0)
  return
  else
  return display.textContent = +display.textContent - 1;
}

const goToUp = function() {
  return display.textContent = +display.textContent + 1;
}



buttonToDown.addEventListener('click', goToDown)
buttonToUp.addEventListener('click', goToUp)