/* 
  Создайте поиск отелей.
  
  Пользователь с помощью prompt должен ввести число от 0 до 5.
  
  Проверить что пользователь ввел именно цифру от 0 до 5.
  Если введенные данные не валидны, вывести alert с текстом 
  "Неверный ввод, возможные варианты 0-5!"
  
  Если же пользовател ввел валидное число, 
  в зависимости от числа, используя if/else или switch, 
  вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/
const HOTEL_LIST_HOSTEL = 0;
const HOTEL_LIST_REASONABLE = 1;
const HOTEL_LIST_THREE_STAR = 2;
const HOTEL_LIST_FOUR_STAR = 3;
const HOTEL_LIST_FIVE_STAR = 4;
const HOTEL_BEST = 5;

let userChoise = prompt('Введите цыфру от 0 до 5 0 - "Каталог хостелов" , 1 - "Каталог бюджетных отелей", 2 - "Каталог отелей ***", 3 - "Каталог отелей ****", 4 - "Каталог отелей *****", 5 - "Каталог лучших отелей"', 2);

const hotelChoise = Number(userChoise);

const isInRage = userChoise >= 0 && userChoise <= 5;

let isUserChoiseValid = userChoise !== null && !Number.isNaN(hotelChoise) && isInRage !== false;

if (isUserChoiseValid) {

  switch (hotelChoise) {
    case HOTEL_LIST_HOSTEL:
      alert('Каталог хостелов');
      break
    case HOTEL_LIST_REASONABLE:
      alert('Каталог бюджетных отелей');
      break
    case HOTEL_LIST_THREE_STAR:
      alert('Каталог отелей ***');
      break
    case HOTEL_LIST_FOUR_STAR:
      alert('Каталог отелей ****');
      break
    case HOTEL_LIST_FIVE_STAR:
      alert('Каталог отелей *****');
      break
    case HOTEL_BEST:
      alert('Каталог лучших отелей');
      break
    default:
      alert('Ну и что дальше?');
  }
}
else { alert('Неверный ввод, возможные варианты 0-5!'); }