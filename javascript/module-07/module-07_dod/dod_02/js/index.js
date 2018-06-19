/*
  Есть список с классом .size-filter из произвольного 
  количества чекбоксов, каждый из которых содержит 
  размер одежды в фильтре.
  
  Напишите функцию getCheckedInputsData(inputs), которая
  принимает 1 параметр inputs - массив тех инпутов
  у которых состояние checked.
  
  Возвращает объект с данными атрибутов value 
  и data-prop в следующем формате:
  {
    values: ['s', 'l', 'xl'],
    prop: 'size-value'
  }
*/

// console.log(document.querySelectorAll('input[type=checkbox]:checked'))
const inputCheck = Array.from(document.querySelectorAll('input[type=checkbox]:checked'));

const getCheckedInputsData = function(inputs) {
  const dataObj = { 
    values: [],
    prop: ''
  };
  inputs.forEach(element => {
    const arrey = element.getAttribute('value');
    dataObj.values.push(arrey)
    dataObj.prop = element.dataset.prop;
  });

  return console.log(dataObj);
}

getCheckedInputsData(inputCheck)

