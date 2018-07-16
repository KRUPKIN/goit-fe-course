/*
  Документация API: https://github.com/trostinsky/users-api#users-api

  Просмотр всех записей: https://test-users-api.herokuapp.com/users/ 

  Написать функцию getUserByName, которая используя REST сервис 
  по адресу https://test-users-api.herokuapp.com/users/
  посылает запрос с name введенным в input.
 
  Результатом fetch будет ответ от сервера, 
  вывести содержимое всего ответа (id, name, age) 
  или 'Такого пользователя в списке нет!'.
*/

const input = document.querySelector("input");
const postBtn = document.querySelector(".js-post");
const result = document.querySelector(".result");
const container = document.querySelector(".container");
const url = "https://test-users-api.herokuapp.com/users/";
const answerNegative = "Такого пользователя в списке нет!"

postBtn.addEventListener("click", getUserByName);

function getUserByName(evt) {
  evt.preventDefault();

  const userInput = input.value;
  fetch(url)
  .then(response => {
    if (response.ok) 
      return response.json();
      throw new Error('error: ' + response.statusText);
  })
  .then(data => findUser(data.data))

  function findUser(dataArrey){
    const user = dataArrey.filter(user => user.name === userInput)
    console.log(user);
    if (user.length === 0) {
      result.textContent = answerNegative;
    }
    else {
      user.forEach(element => {
        const answer = document.createElement('p');
        answer.textContent = `${element.name}, ${element.age}, ${element.id}`
        container.append(answer);
      });
    }
  }
}

