/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
const menuItem = document.querySelectorAll('.categories > li');

console.log(menuItem)

menuItem.forEach(element => {
  console.log(element.firstChild);
  console.log(element.firstElementChild.children.length);
});
