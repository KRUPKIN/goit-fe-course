/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

function getFormattedTime(time){
  const date = new Date(time)
  const minutes =  date.getMinutes() > 10 ? date.getMinutes(): "0" + date.getMinutes()
  const seconds = date.getSeconds() > 10 ? date.getSeconds(): "0" + date.getSeconds()
  const miliSeconds = parseInt(date.getMilliseconds()/100)
  const newTime = `${minutes}:${seconds}:${miliSeconds}`
  return newTime;
}

console.log(
  getFormattedTime(1523621052858)
); // 04:12.8

console.log(
  getFormattedTime(1523621161159)
); // 06:01.1

console.log(
  getFormattedTime(1523621244239)
); // 07:24.2
 

 