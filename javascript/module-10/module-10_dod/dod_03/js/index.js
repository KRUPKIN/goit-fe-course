/*
  Документация API: https://github.com/trostinsky/users-api#users-api

  Просмотр всех записей: https://test-users-api.herokuapp.com/users/ 

  Написать функцию fetchUsers, которая используя REST сервис 
  по адресу https://test-users-api.herokuapp.com/users/
  посылает get запрос и получает ответ.
  
  Результатом fetch будет массив объектов с полями.
  
  В элемент result поместить таблицу состоящую из 2-х
  столбцов след формата, где кол-во строк будет такое как
  и кол-во объектов пользователей в ответе:
  
    ID | NAME | AGE
    id | name | age  
    id | name | age  
*/

const getBtn = document.querySelector(".js-get");
const result = document.querySelector(".result");
const container = document.querySelector(".container")
const spiner = document.querySelector(".spinner-overlay");
const url = "https://test-users-api.herokuapp.com/users/";

getBtn.addEventListener("click", fetchUsers);

const toggleSpiner = () => spiner.classList.toggle('visible');

function fetchUsers(evt) {
  evt.preventDefault();
  toggleSpiner();
  setTimeout(() => {
    // создаю запрос на fetch
    fetch(url, {
      method: 'GET'
    })
      .then(response => {
        if(response.ok) 
        return response.json();
        throw new Error('error: ' + response.statusText);
      })
      // проверка
      // .then(data => console.log(data.data))
      .then(data => dataFormating(data.data))
      .catch(err => console.log(err));
      // запускаю функцию dataFormating которая переберет масив и создаст таблицу
        function dataFormating(arreyData){
          const tableBlock = document.createElement('div');
          tableBlock.classList.add('table-block');
          container.append(tableBlock);

          const table = document.createElement('table');
          table.classList.add('table');
          tableBlock.append(table);
          const row = document.createElement('tr');
          table.append(row);

          const titlecolumnNumber = document.createElement('th');
          titlecolumnNumber.textContent = 'NUMBER';
          const titlecolumnId = document.createElement('th');
          titlecolumnId.textContent = 'ID';
          const titlecolumnName = document.createElement('th');
          titlecolumnName.textContent = 'NAME';
          const titlecolumnAge = document.createElement('th');
          titlecolumnAge.textContent = 'AGE';
          row.append(titlecolumnNumber, titlecolumnId, titlecolumnName, titlecolumnAge);
          
          // ПРОВЕРКА
          // console.log(container)
        arreyData.forEach((element, index) => {
          const arreyRow = document.createElement('tr');
          table.append(arreyRow);
          const columnNumber = document.createElement('td');
          columnNumber.textContent = index + 1;      
          const columnId = document.createElement('td');
          columnId.textContent = element.id;
          const columnName = document.createElement('td');
          columnName.textContent = element.name;
          const columnAge = document.createElement('td');
          columnAge.textContent = element.age;   
          arreyRow.append(columnNumber, columnId, columnName, columnAge);   
        });
          console.log(container);
          toggleSpiner();
        }
}, 1000);
}



