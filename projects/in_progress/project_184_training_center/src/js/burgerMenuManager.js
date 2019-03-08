 'use strict';
 
 
 burgerMenu.onclick = function adaptiveMenu(){
  const nav = document.getElementById('menu_js');
  console.log(nav)
  if(nav.className === "navigation"){
    nav.className += " responsive";
  } else {
    nav.className = "navigation"
  }
}