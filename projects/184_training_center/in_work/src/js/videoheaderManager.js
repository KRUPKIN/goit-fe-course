'use strict';


const videoHeader = document.querySelector('.videoHeader');
const buttonPlayPause = document.querySelector('.play-pause-btn');
const buttonMute = document.querySelector('.sound-manager-link');
const mainButton = document.querySelector('.main-button');
const mainImage = document.querySelector('.main-image');


mainButton.addEventListener("click", playStopMoove);
videoHeader.addEventListener("click", playStopMoove);
buttonPlayPause.addEventListener("click", playStopMoove);

buttonMute.addEventListener("click", turnOfOnTheSound);


export function playStopMoove(evt) {

  if (videoHeader.paused === true){
  videoHeader.play();
  mainButton.remove();
  mainImage.remove();
  buttonPlayPause.firstElementChild.removeAttribute("src");
  buttonPlayPause.firstElementChild.setAttribute("src", "./src/img/icon/player/pause.svg");
  }
  else if (videoHeader.paused !== true){
  videoHeader.pause();
  buttonPlayPause.firstElementChild.removeAttribute("src");
  buttonPlayPause.firstElementChild.setAttribute("src", "./src/img/icon/player/play-button.svg");
  }
} 

export function turnOfOnTheSound(evt) {

  if (videoHeader.muted === false){
  videoHeader.muted = true;
  buttonMute.firstElementChild.removeAttribute("src");
  buttonMute.firstElementChild.setAttribute("src", "./src/img/icon/player/mute.svg");
  }
  else if (videoHeader.muted === true){
  videoHeader.muted = false;
  buttonMute.firstElementChild.removeAttribute("src");
  buttonMute.firstElementChild.setAttribute("src", "./src/img/icon/player/volume-down-indicator.svg");
  }
} 

