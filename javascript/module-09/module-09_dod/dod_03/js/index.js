/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 1.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const stopBtn = document.querySelector(".js-timer-stop");

const timer = {
  startTime: null,
  deltaTime: null,
  id: null
};

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer)

function startTimer(event){
    timer.startTime = Date.now();
    
    if(!timer.id){
      timer.id = true;
      timer.id = setInterval(() => {
        const curentTime = Date.now();
        timer.deltaTime = curentTime - timer.startTime;
        updateClockface(clockface, timer.deltaTime);
      }, 100)
     };
  setActiveBtn(event.target);
}


function stopTimer(event){
  clearInterval(timer.id);
  timer.startTime = null;
  timer.deltaTime = null;
  timer.id = null;
  updateClockface(clockface, timer.deltaTime);
  setActiveBtn(event.target);
}

// Вспомогательные функции

// Обновляет поле счетчика новым значением при вызове
// аргумент time это кол-во миллисекунд

function updateClockface(elem, time) {
    elem.textContent = getFormattedTime(time);
}

function getFormattedTime(time) {
  let date = new Date(time)
  let minutes = date.getMinutes();
    if(minutes < 10){
      minutes = '0' + minutes;
    }
  let seconds = date.getSeconds();
    if(seconds < 10){
      seconds = '0' + seconds;
    };
  const milliseconds = Number.parseInt(date.getMilliseconds()/100);
    return `${minutes}:${seconds}.${milliseconds}`;
  }


// Подсветка активной кнопки

function setActiveBtn(target) {
  if(target.classList.contains('active')) {
    return;
  }
  
  startBtn.classList.remove('active');
  stopBtn.classList.remove('active');
  
  target.classList.add('active');
}
