'use strict'
/*
  Есть массив logins с логинами пользователей.
  Написать функцию, addLogin(logins, login) которая:
    1) Получает новый логин и массив всех логинов как аргументы
  
    2) Проверяет валидность логина используя вспомогательную 
       функцию checkLoginValidity(login), которая проверяет 
       количество символов логина и возвращает true если логин 
       подходит под условие длины от 4-х до 16-ти символов 
       включительно, и false если не подходит.
    3) Если логин не валиден, прекратить исполнение функции addLogin 
       и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'.
    4) Если логин валиден, проверить уникальность логина с помощью 
       функции checkIfLoginExists(logins, login), которая проверяет наличие 
       логина в массиве logins, возвращая false если такого логина
       в массиве еще нет, и true если есть.
     
    5) Если checkIfLoginExists вернет false, добавить новый логин 
       в logins и вернуть строку 'Логин успешно добавлен!'. 
       Если checkIfLoginExists вернет true, тогда addLogin не добавляет 
       логин в массив и возвращает строку 'Такой логин уже используется!'.
*/

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const login = 'Ziman';

const checkIfLoginExists = function(logins, login){
  const hasLogin = logins.includes(login);
    if (!hasLogin){
      logins.push(login);
      console.log('Логин успешно добавлен!');
    }
    else{
      console.log('Такой логин уже используется!');
    }
};

const checkLoginValidity = function (logins, login){
  const max = 16;
  const min = 4;
  const num = login.length;
  const inRange = num > min && num < max;
   if (!inRange){
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    return; 
  }
   else {
    checkIfLoginExists(logins, login);
   }
};

const addLogin = function (logins, login) {
  checkLoginValidity(logins, login);
};


addLogin(logins, login);


