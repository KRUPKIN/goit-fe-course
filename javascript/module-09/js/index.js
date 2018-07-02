/*
  Создайте скрипт приложения-секундомера.

  Добавьте следующий функционал:
  
  - При нажатии на кнопку button.js-start, запускается таймер, который считает время 
    со старта и до текущего момента времени, обновляя содержимое элемента p.js-time 
    новым значение времени в формате xx:xx.x (минуты:секунды.сотни_миллисекунд).
    
    🔔 Подсказка: так как необходимо отображать только сотни миллисекунд, интервал
                  достаточно повторять не чаще чем 1 раз в 100 мс.
    
  - Когда секундо      
  мер запущен, текст кнопки button.js-start меняется на 'Pause', 
    а функционал при клике превращается в оставновку секундомера без сброса 
    значений времени.
    
    🔔 Подсказка: вам понадобится буль который описывает состояние таймера активен/неактивен.
  
  - Если секундомер находится в состоянии паузы, текст на кнопке button.js-start
    меняется на 'Continue'. При следующем клике в нее, таймер продолжает отсчет времени, 
    как будто паузы небыло, а текст меняется на 'Pause'. То есть если во время нажатия 
    'Pause' прошло 6 секунд со старта, при нажатии 'Continue' 10 секунд спустя, секундомер 
    продолжит отсчет времени с 6 секунд и дальше, а не с 16. 
    
    🔔 Подсказка: сохраните время секундомера на момент паузы и используйте его 
                  при рассчете текущего времени после возобновления таймера отнимая
                  это значение от времени запуска таймера.
    
  - Если секундомер находится в активном состоянии или в состоянии паузы, кнопка 
    button.js-reset должна быть активна (на нее можно кликнуть), в противном случае
    disabled. Функционал при клике - остановка таймера и сброс всех полей в исходное состояние.
    
  - Функционал кнопки button.js-take-lap при клике - сохранение текущего времени секундомера 
    в массив и добавление в ul.js-laps нового li с сохраненным временем в формате xx:xx.x
*/

const startBtn = document.querySelector('.js-start');
const lapBtn = document.querySelector('.js-take-lap');
const resetBtn = document.querySelector('.js-reset');

const timeBoard = document.querySelector('.js-time');
const lapList = document.querySelector('.js-laps');

let timerActive = null;
let startTime = null;
let deltaTime = null;
let curentTime = null;
let lastTime;

let timer;
let lap;

startBtn.addEventListener('click', timerStart);
lapBtn.addEventListener('click', lapAdd);
resetBtn.addEventListener('click', timerReset);

resetBtn.setAttribute('disabled', 'disabled');
resetBtn.classList.add('disabled');

function timerStart(event){
  if(timerActive === null){
    resetBtn.classList.remove('disabled');
    resetBtn.removeAttribute('disabled');
    timerActive = true;
    startTime = Date.now();
    startBtn.textContent = 'Pause';

    timer = setInterval(() => {
      curentTime = Date.now();
      deltaTime = (curentTime - startTime);
      updateClockface(timeBoard, deltaTime);
    }, 100)
  }
  
  else if(timerActive === true){
    lastTime = deltaTime;
    timerActive = false;
    startBtn.textContent = 'Continue';
    clearInterval(timer);
  }

  else if(timerActive === false){
    
    timerActive = true;
    startBtn.textContent = 'Pause';
    startTime = Date.now();
    timer = setInterval(() => {
      curentTime = Date.now() + lastTime;
      deltaTime = (curentTime - startTime);
      updateClockface(timeBoard, deltaTime);
    }, 100)
  }
}

function lapAdd(){
  lap = document.createElement("li");
  lap.textContent = timeBoard.textContent;
  lapList.append(lap);
}

function timerReset(){
  clearInterval(timer);
  startBtn.textContent = 'Start';
  resetBtn.setAttribute('disabled', 'disabled');
  resetBtn.classList.add('disabled');
  timerActive = null;
  startTime = null;
  deltaTime = null;
  curentTime = null;
  const lapArrPseudo = document.querySelectorAll('li')
  lapArrPseudo.forEach((elem) => {
    elem.remove();
  })
  updateClockface(timeBoard, deltaTime);
}

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


/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Выполните домашнее задание используя класс с полями и методами.
  
  На вход класс Stopwatch принимает только ссылку на DOM-узел в котором будет 
  динамически создана вся разметка для секундомера.
  
  Должна быть возможность создать сколько угодно экземпляров секундоментов 
  на странице и все они будут работать независимо.
  
  К примеру:
  
  new Stopwatch(parentA);
  new Stopwatch(parentB);
  new Stopwatch(parentC);
  
  Где parent* это существующий DOM-узел. 
*/

