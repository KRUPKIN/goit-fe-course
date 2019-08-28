/* 
  Время состоит из: 
    часов(hours)
    минут (minutes)
    секунд(seconds).
  
  Время должно всегда выводиться в формате xx/xx/xx.
  Например: 01:12:04 или 14:03:45
  
  Составляющие времени не гарантированно состоят из 2-х цифр!
  
  Напишите скрипт который проверяет каждую составляющую
  и добавлят 0 если необходимо.
*/

let hours = 7;
let minutes = 3;
let seconds = 42;

if (hours <= 10) { hours = '0' + hours }
if (minutes <= 10) { minutes = '0' + minutes }

let time = `${hours}:${minutes}:${seconds}`;

console.log('Time is: ', time);