/*
  Написать функцию fetchUserData, которая использует
  apiUrl + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://api.github.com/users/имя-пользователя
    
  Документация по Git API:
    https://developer.github.com/v3/
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Avatar: аватартка 
    Username: логин
    Bio: описание профиля
    Public repos: кол-во открытых репозиториев
  
  Все необходимые данные есть в ответе от API.
*/

const input = document.querySelector("input");
const submitBtn = document.querySelector("#js-submit");
const result = document.querySelector(".result");
const apiUrl = "https://api.github.com/users/";

submitBtn.addEventListener("click", fetchUserData);

function fetchUserData(evt) {
  evt.preventDefault();
 // toggleSpiner();
  const userName = input.value;
  const url = apiUrl+userName;

  return fetch(url)
  .then(response => {
      if(response) 
      return response.json();
      throw new Error('error: ' + response.statusText);
    })

    // .then(data => dataUpdate(data))
    .then(data => formatData(data))
    .catch(err => console.log(err));
      function formatData(data) {
        alert(`
        Avatar: ${data.avatar_url}
        Username: ${data.login}
        Bio: ${data.bio}
        Public repos: ${data.public_repos}
        `)
      }
}


