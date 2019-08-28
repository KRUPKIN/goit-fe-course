'use strict';

// СОЗДАЮ ПЕРЕМЕННЫЕ

let groupTaba = 6;
let groupSharm = 15;
let groupHurgada = 25;

// ОБЯВЛЯЮ ПЕРЕМЕННУЮ userChoise и прошу пользователя ввести количество необходимых мест для путишествия.

let userChoise = prompt(
  'Пожалуйста введите количество необходимых мест для путишествия',
);

// ПОСРЕДСТВОМ ОБ*ЯВЛЕНИЯ ПЕРЕМЕННОЙ numberUserChoise перевожу значение userChoise в число.

const numberUserChoise = Number(userChoise);

// ПРОВЕРЯЮ ВАЛИДНОСТЬ userChoise:
// 1.ОБЯВЛЯЮ ПЕРЕМЕННУЮ isUserChoiseValid;
// 2.ПРОВЕРЯЮ ЧТОБ userChoise не имел значение null (выдаст при нажатии на CANCEL) userChoise !== null;
// 3.ОСУЩЕСТВЛЯЮ ПРОВЕРКу НА ЧИСЛО !Number.isNaN(userChoise).

let isUserChoiseValid =
  userChoise !== null && !Number.isNaN(numberUserChoise) && userChoise > 0;

// console.log(isUserChoiseValid); ПРОВЕРОЧКА))

// А ТУТ ПОНЕСЛАСЬ.........................

if (isUserChoiseValid === false) {
  alert('Ошибка ввода');
} else if (numberUserChoise <= groupTaba) {
  if (
    confirm(
      'Есть в наличии места в группе Taba. Согласны ли Вы на включение в данную группу?',
    )
  ) {
    groupTaba = groupTaba - numberUserChoise;
    // console.log(groupTaba); проверочка
    alert('Приятного путешествия в группе taba');
  } else if (numberUserChoise <= groupSharm) {
    if (
      confirm(
        'Есть в наличии места в группе Sharm. Согласны ли Вы на включение в данную группу?',
      )
    ) {
      groupSharm = groupSharm - numberUserChoise;
      alert('Приятного путешествия в группе sharm');
    } else if (numberUserChoise <= groupHurgada) {
      if (
        confirm(
          'Есть в наличии места в группе Hurgada. Согласны ли Вы на включение в данную группу?',
        )
      ) {
        groupHurgada = groupHurgada - numberUserChoise;
        alert('Приятного путешествия в группе hurgada');
      } else {
        alert('Нам очень жаль, приходите еще!');
      }
    }
  }
} else if (numberUserChoise <= groupSharm) {
  if (
    confirm(
      'Есть в наличии места в группе Sharm. Согласны ли Вы на включение в данную группу?',
    )
  ) {
    groupSharm = groupSharm - numberUserChoise;
    alert('Приятного путешествия в группе sharm');
  } else if (numberUserChoise <= groupHurgada) {
    if (
      confirm(
        'Есть в наличии места в группе Hurgada. Согласны ли Вы на включение в данную группу?',
      )
    ) {
      groupHurgada = groupHurgada - numberUserChoise;
      alert('Приятного путешествия в группе hurgada');
    } else {
      alert('Нам очень жаль, приходите еще!');
    }
  }
} else if (numberUserChoise <= groupHurgada) {
  if (
    confirm(
      'Есть в наличии места в группе Hurgada. Согласны ли Вы на включение в данную группу?',
    )
  ) {
    groupHurgada = groupHurgada - numberUserChoise;
    console.log(groupHurgada);
    alert('Приятного путешествия в группе hurgada');
  } else {
    alert('Нам очень жаль, приходите еще!');
  }
} else {
  alert('Извините, мест нет.');
}

// Yeah  Bitch!!!!
