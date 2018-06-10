'use strict';

// ПЕРВАЯ
/*
  Создать функцию-конструктор Account 
  с полями login, email и friendsCount. 
  
  Для функции-конструктора Account, создать 
  метод getAccountInfo(), который выводит 
  в консоль значения всех полей. Записать 
  метод в prototype.
  
  Обратите внимание, метод будет всего один, 
  в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными 
  значениями свойств, вывести их в консоль.
*/


// function Account (login, email, friendsCount) {
//   this.login = login;
//   this.email = email;
//   this.friendsCount = friendsCount;
// }

// Account.prototype.getAccountInf = function () {
//   console.log(`login: ${this.login}, email: ${this.email}, friendsCount: ${this.friendsCount}`)
// };

// const AccountOne = new Account('Ziman', 'ziman222@mail.ru', 20);

// AccountOne.getAccountInf();



// ВТОРАЯ
/*
  Добавить в prototype конструктора Array 
  метод getLastElem, который возвращает
  последний элемент массива на котором этот 
  метод вызвали, либо undefined если массив пустой.
*/




// Array.prototype.getLastElem = function() {
//   const idx = this.length - 1;
//   if (idx >= 0) {
//     return this[idx]
//   }
//   else {
//     return undefined
//   }
// };



//   // Например:
//   console.log(
//   [1, 2, 3].getLastElem()
//   );
//   // 3




// ТРЕТЬЯ
/*
  Создайте функцию-конструктор Clock со свойством 
  time и методом showTime(), которой выводит
  time в консоли.
  
  Создайте функцию-конструктор Timer, наследующую
  от Clock. Функция-конструктор Timer должна 
  иметь сообственное свойство interval и метод countTime().
*/

// // функция-конструктор Clock
// const Clock = function(time) {
//   this.time = time;
// };
// // метод showTime   
// Clock.prototype.showTime = function() {
//   console.log(`now is a ${this.time}`);
// };

// // функция-конструктор Timer
// const Timer = function(time, interval) {
// // додал ссылку на Time
//   Clock.call(this, time);

//   this.interval = interval;
// };

// Timer.prototype = Object.create(Clock.prototype);
// // Добавляю ссылку в конструктор
// Timer.prototype.constructor = Timer;

// Timer.prototype.countTime = function() {
//   console.log(`it is ${this.time}`)
// };

// const timer = new Timer('12:25', '14.30')

// console.log(timer);


// ЧЕТЫРЕ
/*
  Создать класс Account с полями login, 
  email и friendsCount. 
  
  Для класса Account, создать метод getAccountInfo(), 
  который выводит в консоль значения всех полей.
  
  Создать несколько экземпляров с разными 
  значениями свойств, вывести их в консоль.
*/

// class Account {
//   constructor(login, email, friendsCount){
//     this.login = login;
//     this.email = email;
//     this.friendsCount = friendsCount;
//   }
//  getAccountInfo() {
//     return `${this.login}, ${this.email}, ${this.friendsCount}`;
//   }
// }

// const ziman =  new Account ('ziman', 'zi@mail.eu', 20)

// console.log(ziman.getAccountInfo());



// ПЯТАЯ
/*
  Создайте класс Clock со свойством time и 
  методом showTime(), которой выводит time в консоли.
  
  Добавьте классу Clock статический метод convertTime(ms). 
  Он получает кол-во миллисекунд и возвращает дату с помощью Date.
  return new Date(ms)
  
  То есть будет возможность вызвать Clock.convertTime(111111) 
  и получить обратно дату.
  
  Создайте класс Timer, наследующий от Clock. 
  Класс Timer должен иметь сообственное свойство 
  interval и метод countTime().
*/

class Clock {
  constructor(time){
    this.time = time;
  }
  
  static convertTime(ms){
    return new Date(ms)
  }

  showTime() {
    return console.log(this.time);
  }
  
}