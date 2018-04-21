/* 
  В переменную num записывается случайное число
  
  Используя ветвления запишите в переменную type
  строку "even" если num четное, и "odd" если не четное.
*/

const num = Number.parseInt(Math.random() * 100);

let type;

if (num % 2 === 0) { type = 'odd' }
else { type = 'even' }

console.log(`${num} is ${type}`);