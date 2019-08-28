'use strict'
/*
Напишите функцию validate которая проверяет поля формы 
  firstname и lastname и возвращает результат в виде 
  обьекта со свойствами 'first name' и 'last name'.
  
  Кроме того, формат объекта: в свойства записывается буль-флаг 
  уведомляющий о статусе прохождения валидации для каждого поля.
  {
    'first name': true или false,
    'last name': true или false,
  }
  
  Критерии валидации:
  1)Имя. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.
  
  2)Фамилия. Допускается не более 2-х слов, разделенных пробелами
  или дефисом. Слова должны состоять только из букв.
  
  При клике на кнопку submit должна происходить проверка.
  Результат проверки, объект, выводить в консоль.
*/

const firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const submitBtn = document.getElementById("submit-btn");
const inputs = document.querySelector("input");

submitBtn.addEventListener("click", validate);

const VALIDATOR = {
  paterns: {
    // можно было обойтись и одним патерном но для гибкости настроек поставил и второй
    first_name: /^[a-zA-Z][a-zA-Z0-9- ]{1,20}$/,
    last_name: /^[a-zA-Z][a-zA-Z0-9- ]{1,20}$/,
  },
  validate(arr){
    const results = arr.reduce((acc, { id, value }) => {
      const valid = this.isValid(id, value);
      acc[id] = valid;
      console.group('group');
      console.log('name:', id);
      console.log('value:', value);
      console.log('valid:', valid);
      console.groupEnd('group');
      return acc;
    }, {})
    console.log(results);
  },
  isValid(paternKey, value){
    return this.paterns[paternKey].test(value);
  },
};

function validate(evt) {
  evt.preventDefault();
  const inputsArrey = [];
  inputsArrey.push(firstname, lastname)
  VALIDATOR.validate(inputsArrey);
}
