'use strict';

// CSS STYLES
import './css/styles.css';
import './css/styles_header.css';
import './css/styles_main.css';
import './css/slider.css';
import './css/confirm.css';
import './css/styles_adaptative.css';
import './css/spinner.css';
import './css/animation.css';

// MODULES
import * as storage from './services/storage';
import * as api from './services/api';
import * as spinner from './js/spinner';
import * as slider from './js/slider';
import * as favorites from './js/favorites';

// import articleTpl from './templates/article.hbs';

const gallery = document.querySelector('.gallery__list');
const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const formBlock = document.querySelector('.form-block');
const loadMoreBtn = document.querySelector('.load-more');

let currentPage = 1;
let currentQuery = '';
export let favorImages = [];

const presistedUrl = storage.get();
let linkArrey = presistedUrl ? presistedUrl : [];
if (linkArrey !== 0) {
  favorImages = linkArrey;
}

const scrollToBottom = () => scrollTo(0, document.body.scrollHeight);

const showLoadMoreBtn = () => {
  if (!loadMoreBtn.classList.contains('visible')) {
    loadMoreBtn.classList.add('visible');
  }
};

export const resetCurrentPage = () => {
  currentPage = 1;
};

export const resetPhotosGallery = () => {
  gallery.innerHTML = '';
};

const incrementCurrentPage = () => {
  currentPage += 1;
};

const createGalleryItems = items => {
  return items.reduce(
    (markup, item) =>
      markup +
      `<div class="item">
        <img src=${item.webformatURL} alt="photo" class="gallery-item_img">
        </div>`,
    '',
  );
};

export const updatePhotos = markup => {
  gallery.insertAdjacentHTML('beforeend', markup);
};

const handleFetch = params => {
  spinner.toggleSpinner();
  favorites.hideFavorHeader();
  slider.hideSlider();
  api.fetchImages(params).then(photos => {
    const markup = createGalleryItems(photos);
    updatePhotos(markup);
    spinner.toggleSpinner();
    scrollToBottom();
  });
};

const formMoove = () => {
  formBlock.classList.add('mooved');
};

const handleFormSumit = e => {
  e.preventDefault();

  resetCurrentPage();
  resetPhotosGallery();
  formMoove();

  currentQuery = input.value;

  handleFetch({
    query: currentQuery,
    count: 12,
    page: currentPage,
  });
  showLoadMoreBtn();
};

const handleLoadMoreClick = () => {
  incrementCurrentPage();

  handleFetch({
    query: currentQuery,
    count: 12,
    page: currentPage,
  });
  slider.toggleSliderBlock();
};

const hanelLoadImage = ({ target }) => {
  const nodeName = target.nodeName;
  if (nodeName !== 'IMG') return;
  slider.createSlider(event);
};

form.addEventListener('submit', handleFormSumit);
loadMoreBtn.addEventListener('click', handleLoadMoreClick);
gallery.addEventListener('click', hanelLoadImage);
