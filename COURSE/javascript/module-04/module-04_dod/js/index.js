'use strict'
// ПЕРВАЯ
/*  
  Напишите код, который, для объекта user, последовательно: 
 - добавляет поле mood со значением 'happy'
 - заменяет значение hobby на 'javascript'
 - удаляет свойство premium
 - выводит содержимое объекта user 
    циклом в формате ключ: значение
*/

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   };

//   user.mode = 'happy';
//   user.hobby = 'javascript';
//   delete(user.premium);
//  console.log(user);


//  ВТОРАЯ 

//  /*  
//   Создайте функцию isObjectEmpty(obj), которая получает 
//   единственный аргумент obj - объект, и проверяет
//   пуст ли он (есть ли в нем свойства).
  
//   Возвращает true если объект пустой, false если не пустой.
// */
// const isObjectEmpty = function (obj) {
//     let arr = Object.keys(obj);
//     if (arr.length === 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// };

// // Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
//   ); // true
  
//   console.log(
//     isObjectEmpty({a: 1})
//   ); // false



// //   ТРЕТЬЯ
//   /*  
//   Напишите функцию countOwnProps(obj),
//   считающую кол-во сообственных свойств в объекте.
//   Функция возвращает количество свойств.
// */

// const countOwnProps = function (obj) {
//     const arr = Object.values(obj);    
//     return arr.length;
// }



// // Вызовы функции для проверки
// console.log(
//     countOwnProps({})
//   ); // 0
  
//   console.log(
//     countOwnProps({a: 1, b: 3, c: 'hello'})
//   ); // 3




// ЧЕТВЕРТАЯ
/*  
  Напишите функцию countTotalSalary(salaries),
  считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, 
  имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/

// const countTotalSalary = function (salaries) {
//     const arr = Object.values(salaries);
//     let sum = 0;
//     for (let i = 0; i < arr.length; i += 1) {
//         sum += arr[i];
//     }
//     return sum;
// }



// // Вызовы функции для проверки
// console.log(
//     countTotalSalary({})
//   ); // 0
  
//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80
//     })
//   ); // 330
  
  

// ПЯТАЯ
/*  
  Напишите функцию getAllPropValues(prop), 
  которая берет массив объектов и 
  возвращает массив значений определенного поля prop
*/

// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
//   ];
  
// const getAllPropValues = function (prop) {
//   const arr = [];
//   for (let i = 0; i < users.length; i += 1) {
//     // let obj = users[i];
//    arr.push(users[i][prop]);
//   }
//   return arr;
// }

//   // Вызовы функции для проверки
//   console.log(
//     getAllPropValues('name')
//   ); // ['Poly', 'Mango', 'Ajax']
  
//   console.log(
//     getAllPropValues('mood')
//   ); // ['happy', 'blissful', 'tired']
  
//   console.log(
//     getAllPropValues('age')
//   ); // []



// ШЕСТАЯ
  /*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  необходимо передать как аргументы 
  при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/

// function User(name, isActive, age, friends) {
//   this.name = name;
//   this.isActive = isActive;
//   this.age = age;
//   this.friends = friends;

//   this.getUserInfo = function() {
// console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`)
//   };
// }

// const user1 = new User('Ziman', false, 29, 30);
// console.log(user1);
// user1.getUserInfo();
// const user2 = new User('Evil', false, 666, 13);
// console.log(user2);
// user2.getUserInfo();



// СЕДЬМАЯ
/*  
  Расставьте отсутствующие this 
  в методах объекта store
*/

// const store = {
//   products: ['bread', 'cheese', 'milk', 'apples'],
//   managers: ['poly', 'mango', 'ajax'],
//   addManager(manager) {
//     this.managers.push(manager);
    
//     console.log(this.managers);
//   },
//   removeManager(manager) {
//     const idx = this.managers.indexOf(manager);
    
//     this.managers.splice(idx, 1);
    
//     console.log(this.managers);
//   },
//   getProducts() {
//     console.log(this.products);
    
//     return this.products;
//   }
// }

// store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

// store.removeManager('mango'); // ['poly', ajax', 'chelsey']

// store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']



// ВОСЬМАЯ
/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

function Account({ login, password, type = 'regular' }) {
  login = login;
  password = password;
  type = type;
  
  changePassword = function (newPassword) {
    password = newPassword;
    
    console.log(password);
  };
  
  getAccountInfo = function() {
    console.log(`
      Login: ${login}, 
      Pass: ${password}, 
      Type: ${type}
    `);
  };
};

const account = new Account({
  login: 'Mango',
  password: 'qwe123', 
  type: 'premium'
});

console.log( account.login ); // 'Mango'
console.log( account.password ); // 'qwe123'
console.log( account.type ); // 'premium'

console.log( account.changePassword('asdzxc') ); // 'asdzxc'

console.log( 
  account.getAccountInfo() 
); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
