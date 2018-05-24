'user strict';
// ПЕРВАЯ
/*
    1. Используя метод map, составьте массив 
       значений поля name гостей, в результате
       получится ['Mango', 'Poly', 'Ajax', 'Chelsey']
       
    2. Напишите функию getPropValues(arr, prop), принимающую 
      параметры arr - массив, и prop - имя ключа в объекте. 
      Функция должна возвращать массив всех значений этого ключа из arr.
*/

const guests = [
  {name: 'Mango', age: 20, isActive: true},
  {name: 'Poly', age: 18, isActive: false},
  {name: 'Ajax', age: 30, isActive: true},
  {name: 'Chelsey', age: 45, isActive: false}
]


const getPropValues = (arr, name) => arr.map(guest => guest[name]);

// Вызовы функции для проверки
console.log(
  getPropValues(guests, 'name')
); // ['Mango', 'Poly', 'Ajax', 'Chelsey']

console.log(
  getPropValues(guests, 'age')
); // [20, 18, 30, 45]

console.log(
  getPropValues(guests, 'isActive')
); // [true, false, true, false]

// const arr = guests.map(arr => arr.name);
// console.log(arr);
// const callback = guests.map(arr => arr[name]);
// console.log(callback);


const getPropValues = function(arr, name) {
  return arr.map(guest => guest[name]);
}
