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

timer.id = setInterval(()=> timer.deltaTime, 100)

startBtn.addEventListener("click", startTimer)
function startTimer(){
  timer.startTime = Date.now();
  timer.id = setInterval(()=> {
    timer.deltaTime = Date.now();
    updateClockface(timer.deltaTime - timer.startTime)
  }, 100) 
}

stopBtn.addEventListener("click", stopTimer)
function stopTimer(){
  clearInterval(timer.id)
}


function updateClockface(time){
  const date = new Date(time)
  const minutes =  date.getMinutes() >= 10 ? date.getMinutes(): "0" + date.getMinutes()
  const seconds = date.getSeconds() >= 10 ? date.getSeconds(): "0" + date.getSeconds()
  const miliSeconds = parseInt(date.getMilliseconds()/100)
  const newTime = `${minutes}:${seconds}:${miliSeconds}`
  clockface.textContent = newTime;
}