/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Send" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в абзац с классом .result
*/
const result = document.querySelector('.result');
const form = document.querySelector('.question-form');
const options = document.querySelector('.options');



form.addEventListener('submit', formSubmit)

function formSubmit(event) {
event.preventDefault()
const input = options.querySelector('input[name=option]:checked');

result.textContent = 'Result: ' + input['value'];
}

