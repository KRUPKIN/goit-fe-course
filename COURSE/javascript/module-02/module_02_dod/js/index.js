'use strict';

// ПЕРВАЯ
/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.
  
  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях 
  элементы массива.

const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

console.log(users); // 4

console.log(users[1]); // Poly
console.log(users[3]); // Chelsey
console.log(users[0]); // Mango
console.log(users[2]); // Ajax
*/

// ВТОРАЯ

/*
  Есть массив имен пользователей.
  Используя методы массива выполнить следующие операции.


const users = ["Mango", "Poly", "Ajax", "Chelsey"];

// Удалить из начала массива нулевой элемент и вывести в консоль результат.
console.log(users.shift());
console.log(users); // ["Poly", "Ajax", "Chelsey"]

// Удалить из конца массив последний элемент и вывести в консоль результат.
console.log(users.pop());
console.log(users); // ["Poly", "Ajax"]

// Добавить в начало массива любое имя
users.unshift('Delta');
console.log(users); // ["добавленое имя", "Poly", "Ajax"]

// Добавить в конец массива два любых имени за одну операцию
users.splice(3,0, 'Tanga', 'Foxtrot');
console.log(users); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]
*/

// ТРЕТЬЯ
/*
  Попросить пользователя ввести произвольную строку.
  
  Используя методы строки преобразовать ее в массив.
  Вывести в консоль длину массива.
  
  Используя цикл, перебрать массив и последовательно 
  вывести элементы массива в консоль.
*/

// let string;
// let arr;

// string = prompt('Введите пожалуйста Ваш вопрос...');

// // Составить массив из строки и записать в переменную arr
// console.log(arr = string.split(' '));

// // Вывести в консоли общую длину массива arr
// console.log(arr.length);

// // Используя цикл, вывести в консоль все индексы массива arr
// for (let i = 0; i < arr.length; i += 1){
//   console.log(i);
// }

// // Используя цикл, вывести в консоль все элементы массива arr
// for (let i = 0; i < arr.length; i += 1){
//   console.log(arr[i]);
// }

// // Используя цикл, bывести в консоли все пары индекс:значение массива arr
// for (let i = 0; i < arr.length; i += 1){
//   console.log(i, arr[i]);
// }

// ЧЕТВЕРТАЯ
/*
  Создайте игру угадай число.
  Есть массив чисел numbers, содержащий "верные" числа.
  
  Числа в массиве всегда идут по возрастанию, 
  1-5, 20-40, 2-100 и т.п.
  
  Просим пользователя ввести цифру от самого маленького,
  до самого большого элемента массива. Пусть prompt говорит
  "Введите цифру между x и y", где x и y соотвественно самый
  маленький и самый большой элемент массива.
  
  Но пользователь может ввести что угодно, 
  необходимо проверить что было введено.
  Преобразовать input в числовой тип и проверить число ли это.
  
  Если нет - выводим alert с сообщением о том,
  что было введено не число.
  
  Если да - проверить содержит ли в себе массив numbers это число.
  
  Если содержит - выводим alert с сообщением 
  'Поздравляем, Вы угадали!'.
  
  Есл не содержит - выводим alert с сообщением 
  'Сожалеем, Вы не угадали!'.


const numbers = [12, 15, 25, 37, 41];

// ПРОШУ ВВЕСТИ ЧИСЛО ОТ 1 до 50
let userChoise = prompt('Введите цифру между 1 и 50');

// ПОСРЕДСТВОМ ОБ*ЯВЛЕНИЯ ПЕРЕМЕННОЙ toNumberUserChoise перевожу значение userChoise в число.
let toNumberUserChoise = Number(userChoise);

// ПРОВЕРЯЮ ВАЛИДНОСТЬ userChoise:
// 1.ОБЯВЛЯЮ ПЕРЕМЕННУЮ isUserChoiseValid;
// 2.ПРОВЕРЯЮ ЧТОБ userChoise не имел значение null (выдаст при нажатии на CANCEL) userChoise !== null;
// 3.ОСУЩЕСТВЛЯЮ ПРОВЕРКу НА ЧИСЛО !Number.isNaN(userChoise).
// 4. ПРОВЕРЯЮ НАХОДИТЬСЯ ЛИ ЧИСЛО В СПЕКТРЕ


let isUserChoiseValid = userChoise !== null && !Number.isNaN(toNumberUserChoise) && userChoise >=0 && userChoise <= 50;

// console.log(isUserChoiseValid); ПРОВЕРОЧКА 1

let isVinerNumbers = numbers.includes(toNumberUserChoise);

// console.log(isVinerNumbers); ПРОВЕРОЧКА 2

if (isUserChoiseValid === false) { 
  alert('Не верный ввод!');
  } else if (isVinerNumbers === true) {
    alert('Поздравляем, Вы угадали!');
    } else {
      alert ('Сожалеем, Вы не угадали!');
    }
*/

// ПЯТАЯ
/*
  Напишите скрипт, который выбирает из массива numbers
  все числа, которые больше чем значение переменной num.
  В результате получается новый массив, только с подходящими
  числами.
*/

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newNumbers = [];
// for (let item of numbers) {
//   if (item > num) {
//     // console.log(item); Проверка
//   newNumbers.push(item);
//   }
// }
// console.log(newNumbers);

// ШЕСТАЯ
/*
  Написать скрипт, который проверяет произвольную строку 
  и находит самое длинное слово в строке. 
*/

// const string = "May the force be with you";
// let longestWord;
// let arr;
// // Используя метод split переводу строку в масив
// arr = string.split(' ');
// // console.log (arr); проверочка

// let longestLetterWord = 0;

// for (let i = 0; i < arr.length; i += 1){
//   // console.log(arr[i].length);проверочка
//   if (arr[i].length > longestLetterWord) {
//     longestLetterWord = arr[i].length
//   }
// }
// // console.log (longestLetterWord); проверочка
// // А теперь переберем масив и найдем слово с количеством букв longestLetterWord

// for (let i = 0; i < arr.length; i += 1){
//   if (arr[i].length === longestLetterWord) {
//     longestWord = arr[i];
//   }
// }
// console.log(longestWord); // 'force'

// СЕДЬМАЯ
/*
  Напишите цикл, который предлагает, через prompt,
  ввести число, большее 100. 
  
  Если посетитель ввёл другое число – 
  попросить ввести ещё раз, и так далее.

  Цикл должен спрашивать число пока либо 
  посетитель не введёт число, большее 100, 
  либо не нажмёт кнопку Cancel.
*/
// const maxNumber = 100;
// let userChoise;
// let numUserChoise;
// let isInRange;

// do {
//   userChoise = prompt(`Поджалуйста введите число больше ${maxNumber}!`);

//   numUserChoise = Number(userChoise);
//   isInRange = numUserChoise > maxNumber;
//   console.log(userChoise);
// }
// while (userChoise !== null && !isInRange);

// ВОСЬМАЯ

/*
  Напишите скрипт который:
  
  - Запрашивает по очереди числа при помощи prompt 
    и сохраняет их в массиве.
  
  - Заканчивает запрашивать числа, как только посетитель 
    введёт пустую строку, не число или нажмёт Cancel.
  
  - При этом ноль 0 не должен заканчивать ввод, 
    это разрешённое число.
  
  - Выводит сумму всех значений массива.
    "Сумма: <сумма всех значений в массиве>"
// */

// let userChoise;
// let num;
// let userChoiseList = [];
// let isUserChoiseValid;
// let sumOfList = 0;

// do {
//   userChoise = prompt('Введите число', '');
//   if (userChoise !== null && userChoise !== '') {
//     num = Number(userChoise);
//     if (num !== Number.isNaN(num)) {
//       userChoiseList.push(num);
//     }
//   }
// } while (
//   userChoise !== null &&
//   userChoise !== Number.isNaN(num) &&
//   userChoise !== ''
// );
// {
// }
// console.log(userChoiseList);

// for (let i = 0; i < userChoiseList.length; i += 1) {
//   console.log(userChoiseList[i]);
//   sumOfList += userChoiseList[i];
//   console.log(sumOfList);
// }
