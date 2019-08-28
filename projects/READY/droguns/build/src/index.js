'use strict';

// CSS STYLES
import './css/styles_reset.css';
import './css/styles_header.css';
import './css/styles_main.css';
import './css/styles_footer.css';
import './css/styles_scrollbar.css';
import './css/styles_adaptive.css';

// MODULES

// import * as storage from './services/storage';
// import * as api from './services/api';

// import * as photoSlider from './js/photoSliderManager';


// _________ANCHORS___________
// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
  animationTime = 300,
  framesCount = 20;
console.log(anchors)
for (let anchor of anchors) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href');
    console.log(blockID)
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

// даодельть скорость

// _________MODAL___________

const modalWindow = document.querySelector(".box-overlay");
const toggleModal = () => modalWindow.classList.toggle('visible');
const phoneButtom = document.querySelector(".dws");
phoneButtom.addEventListener("click", toggleModal);
const closePhoneButtom = document.querySelector(".close-modal");
closePhoneButtom.addEventListener("click", toggleModal);


