/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Используйте делегирование.
*/

const gallery = document.querySelector('.images')

gallery.addEventListener('click', showSrcOfImages);

function showSrcOfImages(event){
  const target = event.target;
  const nodeName = target.nodeName;

  if (nodeName !== 'IMG')return

alert( `image src - ${target.src}`)

}