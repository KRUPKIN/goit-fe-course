/*
  Напишите скрипт для создания списка ul.
  
  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.
    - Если пользователь вводит строки с тегами – пусть в списке 
      они показываются как обычный текст.
*/

do  { 
const userInput = prompt('' , );
const menu = document.querySelector('.menu')
const item = document.createElement('li');
item.textContent = userInput;
menu.append(item);
if (userInput === null)
  break

}
while (true);

console.log(document.body)