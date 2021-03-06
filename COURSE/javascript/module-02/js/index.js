'use strict';

// ДОМАШКА MODULE-02
/*
  Написать следующий скрипт:
  
    - При загрузке страницы пользователю предлагается ввести через prompt число. 
      Число введенное пользователем записывается в массив чисел.
      
    - Операция ввода числа пользователем и сохранение в массив продолжается до
      тех пор, пока пользователь не нажмет Cancel в prompt. Используйте 
      цикл while или do...while.
      
    - Делать проверку того, что пользователь ввел именно число, а не произвольный 
      набор символов, не обязательно, но желательно. В случае некорректного ввода
      просто выдайте alert с текстом 'Было введено не число, попробуйте еще раз',
      при этом результат prompt записывать в массив чисел не нужно, после чего 
      снова пользователю предлагается ввести число в prompt.
      
    - После того как пользователь прекратил ввод нажав Cancel, необходимо взять 
      массив введенных чисел, сложить общую сумму всех элементов массива и 
      записать ее в переменную. Используйте цикл for или for...of.
      
    - Вывести alert с текстом `Общая сумма чисел равна ${сумма}`
*/

let userInput;
const numbers = [];
let total = 0;

// присмотревшись к условиям понял что это модификация доп. задания №8
// объявляю еще одну переменную, для того чтобы привести строку в число
let num;
// принял решение использовать цикл с постусловием (do ..... while)
// для корректного отображения в IE использовал в конце " , '' "
do {
  userInput = prompt('Пожалуйста, введите в поле число', '');
  // использовал оператор ветвления if, для того чтоб отсеять ненужную ботву которая может привестись к числу и попасть в массив
  if (userInput !== '' && userInput !== null) {
    // привожу данные в userInput в число
    num = Number(userInput);
    // console.log(typeof num); проверочка
    // провожу проверку на число (не знаю можно ли так, но мне показалось так правильно)
    if (!Number.isNaN(num)) {
      // записываю все в массив переменную numbers
      numbers.push(num);
    } else {
      alert('Было введено не число, попробуйте еще раз');
    }
  }
} while (
  // тут я придумал условия для повторения prompt-a
  userInput !== null
);
// принял решение использовать цикл со счётчиком (for) для перебора массива numbers
for (let i = 0; i < numbers.length; i += 1) {
  // суммировал данные массива (долго не мог понять как сделать и может быть и не понял бы если бы не let total = 0; )
  total += numbers[i];
}
// вот оно:
alert(`Общая сумма чисел равна ${total}`);
