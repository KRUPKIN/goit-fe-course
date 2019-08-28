'use strict';
// ПЕРВАЯ
/*  
  Написать функцию, getPx(str) 

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да, 
  возвращать только числовую составляющую, к примеру 10.
    
  Если была передана не строка, функция возвращает null.
*/

// const getPx = function(str) {
//   if (str === String(str)) {
//     return Number.parseFloat(str);
//   }
//   else {
//     return str = null;
//   }
//  };

// // Вызовы функции для проверки
// console.log( getPx("10px") === 10 ); // должно быть:  true
// console.log( getPx("10.5") === 10.5 ); // должно быть:  true
// console.log( getPx("0") === 0 ); // должно быть:  true
// console.log( getPx(-1) ); // должно быть:  null
// console.log( getPx(10) ); // должно быть:  null

// ВТОРАЯ
/*  

  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.   
  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр!
*/

// const findLongestWord = function(UserInput) {
//   let arr = UserInput.split(' ');
//   let longerWorld = 0;
//     for(let i = 0; i < arr.length; i += 1) {
//       if(arr[i].length > longerWorld) {
//         longerWorld = arr[i].length;
//       }
//     }
//     for(let i = 0; i < arr.length; i += 1) {
//       if(arr[i].length === longerWorld) {
//         longerWorld = arr[i]
//       }
//     }
//   let result = longerWorld;
//   return result;
// };

// // Вызовы функции для проверки
// console.log(
//   findLongestWord("The quick brown fox jumped over the lazy dog")
// ); // вернет 'jumped'

// console.log(
//   findLongestWord("Google do a roll")
// ); // вернет 'Google'

// console.log(
//   findLongestWord("May the force be with you")
// ); // вернет 'force'

// ТРЕТЬЯ
/*
  Создайте функцию titleCase(str), которая 
  получает строку и возвращает предоставленную строку 
  с первой буквой каждого слова, заглавными. 
  Остальные буквы слова должны быть не заглавными.
*/

// const titleCase = function (str) {
//   let arr = str.toLowerCase().split(' ');
//   for (let i = 0; i < arr.length; i +=1){
//     const elem = arr[i];
//     const firstLetter = elem[0].toUpperCase();
//     const elseLetter = elem.slice(1);
//     arr[i] = firstLetter + elseLetter;
//   };
// const result = arr.join(' ')
// return result;
// };

// // Вызовы функции для проверки
// console.log(
//   titleCase("I'm a little tea pot")
// );
// // вернет "I'm A Little Tea Pot"

// console.log(
//   titleCase("sHoRt AnD sToUt")
// ); // вернет "Short And Stout".

// console.log(
//   titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")
// ); // вернет "Here Is My Handle Here Is My Spout".

// ЧЕТВЕРТАЯ
/*  
  Создайте функцию findLargestNumber(numbers), 
  которая получает массив чисел numbers, и возвращает 
  самое большое число в массиве.
*/

// const findLargestNumber = function (numbers) {
//   let bigestWord = 0;
//     for (let i = 0; i < numbers.length; i += 1){
//       const elem = numbers[i];
//       if (elem > bigestWord){
//         bigestWord = elem
//       };
//   };
//   return  bigestWord;
// };

// // Вызовы функции для проверки
// console.log(
//   findLargestNumber([1, 2, 3])
// ); // вернет 3

// console.log(
//   findLargestNumber([27, 12, 18, 5])
// ); // вернет 27

// console.log(
//   findLargestNumber([31, 128, 14, 74])
// ); // вернет 128

// ПЯТАЯ
/*  
  Есть массив уникальных чисел uniqNumbers.
  
  Написать функцию, addUniqNumbers(...), 
  которая получает произвольное кол-во чисел как аргументы, 
  и добавляет в массив uniqNumbers только уникальные,
  а повторяющиеся игнорирует.
*/

// const uniqNumbers  = [2, 1, 4, 9];

// const addUniqNumbers = function() {
//   for (let i = 0; i < arguments.length; i += 1){
//     const elem = arguments[i];
//      if (!uniqNumbers.includes(elem)){
//        uniqNumbers.push(elem);
//      }
//   }
//   // console.log(numbers);
// };

// // Вызовы функции для проверки
// addUniqNumbers(1, 2, 3);
// console.log(
//   uniqNumbers
// ); // будет [2, 1, 4, 9, 3]

// addUniqNumbers(12, 2, 3, 19);
// console.log(
//   uniqNumbers
// ); // будет [2, 1, 4, 9, 3, 12, 19]

// addUniqNumbers(4, 5, 12, 3, 1, 2, 8);
// console.log(
//   uniqNumbers
// ); // будет [2, 1, 4, 9, 3, 12, 19, 5, 8]

// // ШЕСТАЯ

// /*
//   Создайте функцию removeFromArray(arr),
//   которая получает 1 параметр, исходный массив arr.

//   При вызове функции, первым аргументов всегда будет массив чисел,
//   за которым следуют один или несколько аргументов, тоже чисел.

//   Удалите все элементы из исходного массива,
//   которые имеют такое же значение, что и аргументы.
// */

// const removeFromArray = function (arr) {
//   for (let i = 1; i < arguments.length; i += 1){
//     let elem = arguments[i];
//      if (arr.includes(elem)){
//        let idx = arr.indexOf(elem);
//       //  console.log(arr.indexOf(elem));
//       arr.splice(idx, 1);
//       //  console.log(arr.splice(idx, 1));
//       // console.log(arr.indexOf(elem));
//      }
//   }
//   return arr;
// };

// // Вызовы функции для проверки
// console.log(
//   removeFromArray([1, 2, 3, 4, 5], 2, 4)
// ); // вернет [1, 3, 5]

// console.log(
//   removeFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
// ); // вернет [12, 8, 17]
