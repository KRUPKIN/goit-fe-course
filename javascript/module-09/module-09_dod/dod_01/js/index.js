/*
  Дан массив цветов и кнопки "Start" и "Stop". Сделайте так, чтобы после
  нажатия кнопки "Start", каждую секунду body менял цвет фона на случайное 
  значение из массива. 

  При нажатии на кнопку "Stop", изменении цвета фона должно останавливаться.
*/

const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const buttonStart = document.querySelector('.js-start')
const buttonStop = document.querySelector('.js-stop')
const background = document.querySelector('body')
// background.style.backgroundColor = 'red'


buttonStart.addEventListener('click', changeBackgroundColor);
buttonStop.addEventListener('click', stopChangeBackgroundColor);

let timerId = null;
let isActive = false;

function changeBackgroundColor(){
  if(!isActive){
    isActive = true;
    timerId = setInterval(() => {
      background.style.backgroundColor = colors[Math.floor(Math.random()*(7 - 0) + 0)]
    }, 2000);
  }
};

function stopChangeBackgroundColor(){
  isActive = false;
  clearInterval(timerId);
};


console.log(Math.floor(Math.random()*(7 - 0) + 0));