/*
  Написать функцию fetchCountryData, которая использует
  apiUrl + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому 
  адресу. Обязательно обработать вариант с ошибкой запроса
  используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/ 
const container = document.querySelector(".container")
const input = document.querySelector("input");
const submitBtn = document.querySelector(".js-submit");
const result = document.querySelector(".js-result");
const spiner = document.querySelector(".spinner-overlay");
const apiUrl = "https://restcountries.eu/rest/v2/name/";

submitBtn.addEventListener("click", fetchCountryData);

const toggleSpiner = () => spiner.classList.toggle('visible');


function fetchCountryData(evt) {
    evt.preventDefault();
    toggleSpiner();
    setTimeout(() => {
  const countryName = input.value;
  const url = apiUrl+countryName;
    return fetch(url)
      .then(response => {
          if(response) 
          return response.json();
          throw new Error('error: ' + response.statusText);
        })
        .then(data => dataUpdate(...data))
        .catch(err => console.log(err));

        function dataUpdate(data){
          const countryBlock = document.createElement('div')
          countryBlock.classList.add('country-block');
          container.append(countryBlock)

          const obj = {
            countryName: data.name,
            capital: data.capital,
            mainCurrency: data.currencies[0].name,
            flag: data.flag,
          };

          const countryName = document.createElement('h2')
          countryName.classList.add('country-name');
          countryName.textContent = obj.countryName;

          const flag = document.createElement('img')
          flag.classList.add('flag');
          flag.setAttribute('src', obj.flag);

          const capital = document.createElement('h3')
          capital.classList.add('capital');
          capital.textContent = `capital: ${obj.capital}`;

          const mainCurrency = document.createElement('p')
          mainCurrency.classList.add('mainCurrency');
          mainCurrency.textContent = `main currency: ${obj.mainCurrency}`;

          countryBlock.append(countryName, flag, capital, mainCurrency)
          toggleSpiner();
          
          return console.log(obj)
        }
      }, 1000);
}

