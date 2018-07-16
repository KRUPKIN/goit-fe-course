'use strict';
/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.

  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/


// создаю переменные для кнопок
const buttonGet = document.querySelector(".js-get");
const buttonDel = document.querySelector(".js-del");
const buttonAdd = document.querySelector(".js-add");
const buttonGetAll = document.querySelector(".js-get_all");
const buttonUpdate = document.querySelector(".js-update");

// создаю переменные для нужных блоков
const container = document.querySelector(".container")
const result = document.querySelector(".result");
const spiner = document.querySelector(".spinner-overlay");
const url = "https://test-users-api.herokuapp.com/users/";

// создаю переменные для нужных интпутов
const inputGetDel = document.querySelector(".input-get-del");
const inputAdd = document.querySelector(".input-add");
// добавляю слушетели

buttonGetAll.addEventListener("click", fetchAllUsers);
buttonGet.addEventListener("click", fetchUserById);
buttonDel.addEventListener("click", fetchDellUserById);
buttonAdd.addEventListener("click", fetchAddUserById);
buttonUpdate.addEventListener("click", fetchUpdateUserById);

let tableBlock;
let userInputGetDel;


// добавил функцию вызова спинера
const toggleSpiner = () => spiner.classList.toggle('visible');

// функция для отобрадения всех юзеров
function fetchAllUsers(evt) {
  evt.preventDefault();
  if(tableBlock){
    tableBlock.remove();
    }
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
        toggleSpiner();
}, 2000);
}

// Функция для отбора по ID
function fetchUserById(evt) {
  evt.preventDefault();
    if(tableBlock){
      tableBlock.remove();
    }
  const userInput = inputGetDel.value;
    if(userInput === ""){
      alert('Введите ID пользователя!!!')
    }
    else{
      toggleSpiner();
      setTimeout(() => {
        // создаю запрос на fetch
        fetch(`${url}${userInput}`, {
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
          .catch(err => dataError(err));
          // запускаю функцию dataFormating которая переберет масив и создаст таблицу
            toggleSpiner();
      }, 2000);
    }
  } 

// Функция для отбора и удаления по ID
function fetchDellUserById(evt) {
    evt.preventDefault();
      if(tableBlock){
        tableBlock.remove();
      }
    const userInput = inputGetDel.value;
    userInputGetDel = userInput;
      if(userInput === ""){
        alert('Введите ID пользователя!!!')
      }
      else{
        toggleSpiner();
        setTimeout(() => {
          // создаю запрос на fetch
          fetch(`${url}${userInput}`, {
            method: 'GET'
          })
            .then(response => {
              if(response.ok) 
              return response.json();
              throw new Error('error: ' + response.statusText);
            })
            // проверка
            // .then(data => console.log(data.data))
            .then(data => {
              dataFormating(data.data)
              delConfirm();})
            .catch(err => dataError(err));
              toggleSpiner();
        }, 2000);
  
      }
  } 

// Функция для обновления по ID
function fetchUpdateUserById(evt) {
  evt.preventDefault();
    if(tableBlock){
      tableBlock.remove();
    }
  const userInput = inputGetDel.value;
  userInputGetDel = userInput;
    if(userInput === ""){
      alert('Введите ID пользователя!!!')
    }
    else{
      toggleSpiner();
      setTimeout(() => {
        // создаю запрос на fetch
        fetch(`${url}${userInput}`, {
          method: 'GET'
        })
          .then(response => {
            if(response.ok) 
            return response.json();
            throw new Error('error: ' + response.statusText);
          })
          // проверка
          // .then(data => console.log(data.data))
          .then(data => {
            dataFormating(data.data)
            updateConfirm(userInput);})
          .catch(err => dataError(err));
            toggleSpiner();
      }, 2000);

    }
} 

// Функция для добавления
function fetchAddUserById(evt) {
  evt.preventDefault();
    if(tableBlock){
      tableBlock.remove();
    }
  const userInput = inputAdd.value;
  const inputObj = inputFormating(userInput);
    if(userInput === ""){
      alert('Введите user name\\age!!!')
    }
    else{
      toggleSpiner();
      setTimeout(() => {
        // создаю запрос на fetch
         fetch('https://test-users-api.herokuapp.com/users', {
          method: 'POST',
          body: JSON.stringify(inputObj),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
          })
          .then(response => {
            if(response.ok) 
            return response.json();
            throw new Error('error: ' + response.statusText);
          })
          // проверка
          .then(data => console.log(data))
          .catch(err => console.log(err));
      alert(`Пользователь успешно добавлен!`);
      toggleSpiner();   
      }, 2000);
    }
} 

// форматирование инпута
function inputFormating(userInput){
  const inputArr = userInput.split("\\")
  const inputObj = {
    name: inputArr[0],
    age: inputArr[1]
  };
  return inputObj
}

// Удаление пользователя
function delConfirm(){
  const confirmBlock = document.createElement('div');
  confirmBlock.classList.add('confirm-block');
  tableBlock.append(confirmBlock); 

  const confirmText = document.createElement('p');
  confirmText.classList.add('confirm-text');
  confirmText.textContent = 'Do you realy wont to delete this user?';


  const allowedButton = document.createElement('button');
  allowedButton.classList.add('mdc-btn', 'mdc-btn-red');
  allowedButton.textContent = 'OK';
  const denyButton = document.createElement('button');
  denyButton.classList.add('mdc-btn');
  denyButton.textContent = 'CANCEL';
  confirmBlock.append(confirmText, allowedButton, denyButton);
  console.log(tableBlock);


    allowedButton.addEventListener("click", fetchDellThisUser);
      function fetchDellThisUser(evt) {
      evt.preventDefault();
        if(tableBlock){
          tableBlock.remove();
        }
          toggleSpiner();
          setTimeout(() => {
            // создаю запрос на fetch
            fetch(`${url}${userInputGetDel}`, {
              method: 'DELETE'
            })
              .then(response => {
                if(response.ok) 
                return response.json();
                throw new Error('error: ' + response.statusText);
              })
              // проверка
              // .then(data => console.log(data.data))
              .then(data => {
                console.log(data);
                alert(`обьект с id:${userInputGetDel} успешно удален`);
              })
              .catch(err => dataError(err));
              // запускаю функцию dataFormating которая переберет масив и создаст таблицу
                toggleSpiner();
          }, 2000);
      }
       
    denyButton.addEventListener("click", fetchUndellThisUser);
      function fetchUndellThisUser(){
        location.reload()
      }



}

// Обновления пользователя
function updateConfirm(userInput){
  const confirmBlock = document.createElement('div');
  confirmBlock.classList.add('confirm-block');
  tableBlock.append(confirmBlock); 

  const confirmText = document.createElement('p');
  confirmText.classList.add('confirm-text');
  confirmText.textContent = 'if you really want to change the data of this user - enter them in the field and click "OK" if you change your mind, press "CANCEL"';

  const confirmInput = document.createElement('input');
  confirmInput.classList.add('input-update-data');
  confirmInput.setAttribute("placeholder", "Enter user name\\age");
  

  const allowedButton = document.createElement('button');
  allowedButton.classList.add('mdc-btn', 'mdc-btn-red');
  allowedButton.textContent = 'OK';
  const denyButton = document.createElement('button');
  denyButton.classList.add('mdc-btn');
  denyButton.textContent = 'CANCEL';
  confirmBlock.append(confirmText, confirmInput, allowedButton, denyButton);
  console.log(tableBlock);


    allowedButton.addEventListener("click", fetchUpdateThisUser);
      function fetchUpdateThisUser(evt) {
      evt.preventDefault();
      const confirmUserInput = confirmInput.value;
        if(tableBlock){
          tableBlock.remove();
        }
          toggleSpiner();
          setTimeout(() => {
            // создаю запрос на fetch
            fetch(`https://test-users-api.herokuapp.com/users/${userInput}`, {
          method: 'PUT',
          body: JSON.stringify(inputFormating(confirmUserInput)),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
          })
          .then(response => {
            if(response.ok) 
            return response.json();
            throw new Error('error: ' + response.statusText);
          })
          // проверка
          .then(data => console.log(data))
          .catch(err => console.log(err));
        alert(`Данные пользователя успешно оновлены!`);
        toggleSpiner();  
          }, 2000);
      }
       
    denyButton.addEventListener("click", fetchUndellThisUser);
      function fetchUndellThisUser(){
        location.reload()
      }



}

// Обработка ошыбки
function dataError(err){
  alert(err)
  console.log(err)
  tableBlock.remove()
}

// Создание таблицы
function dataFormating(data){
  tableBlock = document.createElement('div');
  tableBlock.classList.add('table-block');
  result.append(tableBlock);

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
  if (Array.isArray(data))
  data.forEach((element, index) => {
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
  else {
    const arreyRow = document.createElement('tr');
    table.append(arreyRow);
    const columnNumber = document.createElement('td');
    columnNumber.textContent = 1;      
    const columnId = document.createElement('td');
    columnId.textContent = data.id;
    const columnName = document.createElement('td');
    columnName.textContent = data.name;
    const columnAge = document.createElement('td');
    columnAge.textContent = data.age;   
    arreyRow.append(columnNumber, columnId, columnName, columnAge);
  }
    console.log(container);
}


