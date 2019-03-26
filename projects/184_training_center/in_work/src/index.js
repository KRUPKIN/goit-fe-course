'use strict';

// CSS STYLES
import './css/styles_reset.css';
import './css/styles_header.css';
import './css/styles_main.css';
import './css/styles_footer.css';
import './css//adaptive.css';
import './css/styles_scrollbar.css';
import './css/styles_spinner.css';


// MODULES

// import * as storage from './services/storage';
// import * as api from './services/api';


import * as videoheaderManager from './js/videoheaderManager';
import * as info_blockContentManager from './js/info-blockContentManager';
// import * as leadershipManager from './js/leadership-blockContentManager';
import * as photoSlider from './js/photoSliderManager';


// _________BURGER___________
burgerMenu.onclick = function adaptiveMenu(){
  const nav = document.getElementById('menu_js');
  if(nav.className === "navigation"){
    nav.className += " responsive";
  } else {
    nav.className = "navigation"
  }
}

// _________ANCHORS___________
// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 300,
      framesCount = 20;

      for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
          e.preventDefault()
          
          const blockID = anchor.getAttribute('href')
          
          document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        })
      }

// даодельть скорость