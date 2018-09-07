import * as index from "../index";
import * as storage from "../services/storage";

const slider = document.querySelector(".slider-overlay");
const sliderBlock = document.querySelector(".slider");
const sliderImage = document.querySelector(".slider__image");
const confirmImage = document.querySelector(".confirm");
const closeSliderBtn = document.querySelector(".img-close");
const addToFavorBtn = document.querySelector(".img-fav");
const nextSliderBtn = document.querySelector(".img-next");
const prevSliderBtn = document.querySelector(".img-prev");
const gallery = document.querySelector(".gallery__list");

let currentImg = "";

export const toggleSlider = () => slider.classList.toggle("visible");

export const toggleSliderBlock = () => sliderBlock.classList.toggle("fixed");

export const hideSlider = () => {
  if (slider.classList.contains("visible")) {
    slider.classList.remove("visible");
  }
};

export const createSlider = event => {
  const link = event.target.src;
  toggleSlider();
  currentImg = link;
  sliderImage.setAttribute("src", link);
};

const toggleConfirm = () => confirmImage.classList.toggle("visible");

const showConfirmBlock = () => {
  toggleConfirm();
  setTimeout(() => {
    toggleConfirm();
  }, 500);
};

const choisePrevImage = event => {
  const currentImg = document.querySelector(".slider__image");
  const sliderImageSrc = currentImg.src;

  const imagesPseudo = gallery.querySelectorAll("IMG");
  const imageArrey = Array.from(imagesPseudo);
  const maxLength = imageArrey.length;
  const minLength = 0;

  const element = imageArrey.find(el => el.src === sliderImageSrc);
  let prevIndex = imageArrey.indexOf(element) - 1;
  if (prevIndex < minLength) {
    prevIndex = maxLength - 1;
  }
  const newSlideImage = imageArrey[prevIndex].src;
  sliderImage.setAttribute("src", newSlideImage);
};

const choiseNextImage = event => {
  const currentImg = document.querySelector(".slider__image");
  const sliderImageSrc = currentImg.src;

  const imagesPseudo = gallery.querySelectorAll("IMG");
  const imageArrey = Array.from(imagesPseudo);
  const maxLength = imageArrey.length;
  const minLength = 0;

  const element = imageArrey.find(el => el.src === sliderImageSrc);
  let nextIndex = imageArrey.indexOf(element) + 1;
  if (nextIndex >= maxLength) {
    nextIndex = minLength;
  }
  const newSlideImage = imageArrey[nextIndex].src;
  sliderImage.setAttribute("src", newSlideImage);
};

const addToFavorites = event => {
  const currentImg = document.querySelector(".slider__image");
  const imageSrc = currentImg.getAttribute("src");
  const link = index.favorImages.find(url => url.webformatURL === imageSrc);
  if (link !== undefined) {
    alert("Такая картиночка уже есть((( посмотри в избранном");
    currentImg.classList.add("slider__image__animation");
  } else {
    const favoritesObj = {
      webformatURL: imageSrc,
      name: "favorImage"
    };
    index.favorImages.push(favoritesObj);
    storage.set(index.favorImages);
    showConfirmBlock();
  }
};

closeSliderBtn.addEventListener("click", toggleSlider);
addToFavorBtn.addEventListener("click", addToFavorites);
nextSliderBtn.addEventListener("click", choiseNextImage);
prevSliderBtn.addEventListener("click", choisePrevImage);
