'use strict'

const slider = document.querySelector('.slider-wrap');
const galleryList = document.querySelector('.gallery-container');
const galleryPseudpArr = document.querySelectorAll('.gallery-img');
const bigImage = document.querySelector('.slider-image');

// console.log(galleryPseudpArr[0].src);

const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

galleryList.addEventListener("click", toBigImage);

const toggleSlider = () => slider.classList.toggle('slider-visible');


export function toBigImage(event){
    slider.classList.remove('slider-visible');
    const target = event.target;
    const targetSRC = target.src
    const nodeName = target.nodeName;
        if (nodeName !== 'IMG' )return

    bigImage.removeAttribute("src");
    bigImage.setAttribute("src", targetSRC);

    slider.classList.add('slider-visible');
}