'use strict'
/*
  Реализуйте форму фильтра товаров в каталоге и список отфильтрованных товаров.
  Используйте шаблонизацию для создания карточек товаров.
  
  Есть массив объектов (дальше в задании), каждый из которых описывает 
  ноутбук с определенными характеристиками.
  
  Поля объекта по которым необходимо производить фильтрацию: size, color, release_date.
  Поля объекта для отображения в карточке: name, img, descr, color, price, release_date.
    
  Изначально есть форма с 3-мя секциями, состоящими из заголовка и группы 
  чекбоксов (разметка дальше в задании). После того как пользователь выбрал 
  какие либо чекбоксы и нажал кнопку Filter, необходимо собрать значения чекбоксов по группам. 
  
  🔔 Подсказка: составьте объект формата
      const filter = { size: [], color: [], release_date: [] }
    
  После чего выберите из массива только те объекты, которые подходят 
  под выбраные пользователем критерии и отрендерите список карточек товаров.
  
  🔔 Каждый раз когда пользователь фильтрует товары, список карточек товаров очищается, 
      после чего в нем рендерятся новые карточки товаров, соответствующих текущим критериям фильтра.
*/

const laptops = [

  {
    size: 13,
    color: 'white',
    price: 28000,
    release_date: 2015,
    name: 'Macbook Air White 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'gray',
    price: 32000,
    release_date: 2016,
    name: 'Macbook Air Gray 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 13,
    color: 'black',
    price: 35000,
    release_date: 2017,
    name: 'Macbook Air Black 13"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'white',
    price: 45000,
    release_date: 2015,
    name: 'Macbook Air White 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'gray',
    price: 55000,
    release_date: 2016,
    name: 'Macbook Pro Gray 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 15,
    color: 'black',
    price: 45000,
    release_date: 2017,
    name: 'Macbook Pro Black 15"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'white',
    price: 65000,
    release_date: 2015,
    name: 'Macbook Air White 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'gray',
    price: 75000,
    release_date: 2016,
    name: 'Macbook Pro Gray 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
  {
    size: 17,
    color: 'black',
    price: 80000,
    release_date: 2017,
    name: 'Macbook Pro Black 17"',
    img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
    descr:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
  },
];


// СОЗДАЮ СПИНЕР
const spiner = document.querySelector(".spinner-overlay");
const toggleSpiner = () => spiner.classList.toggle('visible');

// ЗАПУСКАЮ ФУНКЦИЮ ПОСТРОЕНИЯ ГАЛЕРЕИ
createTamplate(laptops);

// ДЕЛАЮ ВЫЗОВ ФОРМЫ
const form = document.querySelector(".js-form")

form.addEventListener("submit", filterByUserChooise);

function filterByUserChooise(evt){
  evt.preventDefault();
  const laptopFilter = checkboxFilter(form);
  arreyFilter(laptopFilter);
}

// ДЕЛАЮ СОСТАВЛЕНИЕ КРИТЕРИЯ ОТБОРА
function checkboxFilter(formelement){
  const inputs = Array.from(formelement.querySelectorAll("input:checked"))
  if (inputs.length === 0){
    // ОЧИСТКА ФОРМЫ
    clearTamplate();
    // ВЫЗОВ НА СОЗДАНИЕ
    createTamplate(laptops);
  }
  const filter = { size: [], color: [], release_date: [] }

  inputs.forEach(({name, value}) => {
    if (name === "size"){
      filter.size.push(+value);
    }
    else if (name === "color"){
      filter.color.push(value);
    }
    else{
      filter.release_date.push(+value);
    }
  });
return filter
};

function arreyFilter(laptopFilter){
  // КАК ТУТ ПЕРЕБРАТЬ???
  for (const key in laptopFilter) {
    laptopFilter[key].map(elem=>{
      console.log('key:',key, 'elem:',elem)
      const newLaptops = laptops.filter(laptop => laptop[key] === elem);
      console.log(newLaptops);

      // ОЧИСТКА ФОРМЫ
      clearTamplate();
      // ВЫЗОВ НА СОЗДАНИЕ
      createTamplate(newLaptops);
    })
  }
};



function clearTamplate(){
  const notebook = document.querySelectorAll(".laptop");
  notebook.forEach(elem => elem.remove())
  // nout.remove();
};

// ДЕЛАЮ ШАБЛОН-РАЗМЕТКУ
function createTamplate(goodsObj){
  toggleSpiner()
  setTimeout(() => {
  const galery = document.querySelector(".goods-galery");
  const source = document.querySelector(".source").innerHTML.trim();
  const template = Handlebars.compile(source);
  const markup = template(goodsObj);
  toggleSpiner()
  galery.insertAdjacentHTML('afterbegin', markup);
}, 1000);
};



// function arreyFilter(laptopFilter){
//   for (const key in laptopFilter) {
//     laptopFilter[key].map(elem=>{
//       console.log('key:',key, 'elem:',elem)
//       const newLaptops = laptops.filter(laptop => laptop[key] === elem);
//       console.log(newLaptops);
//     })
//   }
// };
