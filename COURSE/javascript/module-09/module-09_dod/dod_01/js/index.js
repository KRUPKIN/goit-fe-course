/*
  Дан массив цветов и кнопки "Start" и "Stop". Сделайте так, чтобы после
  нажатия кнопки "Start", каждую секунду body менял цвет фона на случайное 
  значение из массива. 

  При нажатии на кнопку "Stop", изменении цвета фона должно останавливаться.
*/

const colors = ['#FFFFFF', '#F44336', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];
const body = document.querySelector("body")
const interval = setInterval(function(){
  const body = document.querySelector("body")
  console.log()
  body.setAttribute("style", `background-color: ${colors[parseInt(Math.random() * (6 - 0)+ 0)]};`)
},1000)

body.addEventListener("click", changeColor);
function changeColor(ev){
  if(ev.target.nodeName !== "BUTTON"){
    return
  }
  const target = ev.target.textContent;
  switch(target){
    case "Start":
        interval
    break;
    case "Stop":
        clearInterval(interval)
    break;
  }
}