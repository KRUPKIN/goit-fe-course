/*
  Создайте компонент галлереи изображений следующего вида.
  
    <div class="image-gallery js-image-gallery">
      <div class="fullview">
        <!-- Если выбран первый элемент из preview -->
        <img src="img/fullview-image-1.jpeg" alt="alt text 1">
      </div>
      <ul class="preview">
        <li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
        <li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
        <li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
      </ul>
    </div>   
    
    🔔 Превью компонента: https://monosnap.com/file/5rVeRM8RYD6Wq2Nangp7E4TkroXZx2
      
      
    Реализуйте функционал:
      
      - image-gallery есть изначально в HTML-разметке как контейнер для компонента.
    
      - fullview содержит в себе увеличенную версию выбранного изображения из preview, и
        создается динамически при загрузке страницы.
    
      - preview это список маленьких изображений, обратите внимание на атрибут data-fullview,
        он содержит ссылку на большое изображение. preview и его элементы, также создаются 
        динамически, при загрузке страницы.
        
      - При клике в элемент preview, необходимо подменить src тега img внутри fullview
        на url из data-атрибута выбраного элемента.
        
      - По умолчанию, при загрузке страницы, активным должен быть первый элемент preview.
        
      - Изображений может быть произвольное количество.
      
      - Используйте делегирование для элементов preview.
      
      - При клике, выбраный элемент из preview должен получать произвольный эффект выделения.
      
      - CSS-оформление и имена классов на свой вкус.
      
      
    🔔 Изображения маленькие и большие можно взять с сервиса https://www.pexels.com/, выбрав при скачивании
      размер. Пусть маленькие изображения для preview будут 320px по ширине, большие для fullview 1280px.
      Подберите изображения одинаковых пропорций.
*/

/*
  Массив объектов с данными для создания компонента выглядит следующим образом.
  Замените пути на соотвествующие вашим, или назовите изображения аналогично.
*/

const galleryItems = [
  { preview: 'img/sm_bald-eagles-bald-eagle-bird-of-prey-adler-53581.jpeg', fullview: 'img/md_bald-eagles-bald-eagle-bird-of-prey-adler-53581 (1).jpeg', alt: "alt text 1" },
  { preview: 'img/sm_green-tree-python-python-tree-python-green-45246.jpeg', fullview: 'img/md_green-tree-python-python-tree-python-green-45246 (1).jpeg', alt: "alt text 2" },
  { preview: 'img/sm_hummingbird-bird-birds-349758 (1).jpeg', fullview: 'img/md_hummingbird-bird-birds-349758.jpeg', alt: "alt text 3" },
  { preview: 'img/sm_pexels-photo-110820.jpeg', fullview: 'img/md_pexels-photo-110820 (1).jpeg', alt: "alt text 4" },
  { preview: 'img/sm_pexels-photo-617278.jpeg', fullview: 'img/md_pexels-photo-617278 (1).jpeg', alt: "alt text 5" },
  { preview: 'img/sm_pexels-photo-635499 (1).jpeg', fullview: 'img/md_pexels-photo-635499.jpeg', alt: "alt text 6" },
];


const gallery = document.querySelector('.js-image-gallery')

  const fullview = document.createElement('div');
  fullview.classList.add('fullview');

    const fullImage = document.createElement('img');
    fullImage.classList.add('fullview-img');
    fullview.append(fullImage)

    
  const preview = document.createElement('ul');
  preview.classList.add('preview');

  galleryItems.forEach(function(element) {
    const item = document.createElement('li')
    item.classList.add('item')
    preview.append(item); 
      const itemImg = document.createElement('img')
      item.append(itemImg);
      itemImg.setAttribute("src", element.preview)
      itemImg.setAttribute("alt", element.alt)
      itemImg.classList.add('item-img')
  });
gallery.append(fullview, preview)

preview.addEventListener('click', getImg)

function getImg(event){
  const target = event.target;
  console.log(target.alt)
  const nodeName = target.nodeName;
  const parent = target.parentNode;
if (nodeName !== 'IMG')return
parent.classList.add('selected');
const linkToFull = galleryItems.find(element => element.alt === target.alt).fullview;
fullImage.setAttribute("src", linkToFull);

const itemsPseudoArr = preview.querySelectorAll('img')
itemsPseudoArr.forEach(function(item){
  if (item.alt !== target.alt) {
    item.parentElement.classList.remove('selected');
  }
});
}

const menuItem = preview.firstElementChild;
menuItem.firstElementChild.click()


console.log(gallery)


/*
  ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  Создайте плагин галлереи используя ES6 класс. Добавьте поля и методы класса так, 
  чтобы можно было создать любое количество галлерей на странице. Функционал плагина 
  аналогичный заданию выше.
  
  При создании экземпляра конструктор получает:
    - items - список элементов для preview
    - parentNode - ссылку на DOM-узел в который будут помещены fullview и preview
    - defaultActiveItem - номер активного элемента preview по умолчанию
    
  Тогда создание экземпляра будет выглядеть следующим образом.
*/

// new Gallery({
//   items: galleryItems,
//   parentNode: document.querySelector('.image-gallery'),
//   defaultActiveItem: 1
// });

/* Далее плагин работает в автономном режиме */