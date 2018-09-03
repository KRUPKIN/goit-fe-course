'use strict'

// ИМОРТИРУЮ СТИЛИ
import './css/styles.css';
import './css/styles_header.css';
import './css/styles_main.css';
import './css/slider.css';
import './css/confirm.css';
import './css/styles_adaptative.css';
import './css/spinner.css';
import './css/animation.css';


// ИМПОРТИРУЮ JS МОДУЛИ
import * as storage from './services/storage';
// import * as api from './services/api';
// import articleTpl from './templates/article.hbs';


// КЛЮЧ К PIXABAY
const API_KEY = '9980802-b2da01a4f96ab441a50650705';


const body = document.querySelector('BODY')
const gallery = document.querySelector('.gallery__list');
const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const searchButton = form.querySelector('.add-btn');
const spinner = document.querySelector('.spinner-overlay');
const loadMoreBtn = document.querySelector('.load-more');

const favorHeader = document.querySelector('.favorites__header');


const slider = document.querySelector('.slider-overlay');
const sliderImage = document.querySelector('.slider__image')
const confirmImage = document.querySelector('.confirm')
const closeSliderBtn = document.querySelector('.img-close');
const addToFavorBtn = document.querySelector('.img-fav');
const nextSliderBtn = document.querySelector('.img-next');
const prevSliderBtn = document.querySelector('.img-prev');


const favoritesBtn = document.querySelector('.favorites__btn')




// ПЕРЕМЕННИЕ
let currentPage = 1;
let currentQuery = '';
let currentImg = '';
let favorImages = [];

const presistedUrl = storage.get();
let linkArrey = presistedUrl ? presistedUrl : [];
    if(linkArrey !== 0){
        favorImages = linkArrey

        }


// ВКЛЮЧАТЕЛИ/ВЫКЛЮЧАТЕЛИ
        // СОЗДАЮ ВЫЗОВ СПИНЕРА
        const toggleSpinner = () => spinner.classList.toggle('visible');
        // СОЗДАЮ ВЫЗОВ СЛАЙДЕРА
        const toggleSlider = () => slider.classList.toggle('visible');
        // СОЗДАЮ ВЫЗОВ ЗАСТАВОЧКИ
        const toggleConfirm = () => confirmImage.classList.toggle('visible');
        // ФУНКЦИЯ ДЛЯ ОТОБРАЖЕНИЯ КНОПКИ "ЁЩЕ"
        const showLoadMoreBtn = () => {
            if (!loadMoreBtn.classList.contains('visible')) {
                loadMoreBtn.classList.add('visible');
            }
        };
        const showFavorHeader = () => {
            if (!favorHeader.classList.contains('visible')) {
                favorHeader.classList.add('visible');
            }
        };
        const hideFavorHeader = () => {
            if (favorHeader.classList.contains('visible')) {
                favorHeader.classList.remove('visible');
            }
        };
        const hideSlider = () => {
            if (slider.classList.contains('visible')) {
                slider.classList.remove('visible');
            }
        };



const resetCurrentPage = () => {
    currentPage = 1;
};

const incrementCurrentPage = () => {
    currentPage += 1;
};

const scrollToBottom = () => scrollTo(0, document.body.scrollHeight);

const fetchImages = ({ query, count, page }) => {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&per_page=${count}&page=${page}&key=${API_KEY}`;

    return fetch(url)
    .then(response => {
        if (response.ok) return response.json();

        throw new Error('error: ' + response.statusText);
    })
    .then(data => data.hits)
    .catch(err => console.log(err));
};

const createGalleryItems = items => {
    return items.reduce(
    (markup, item) =>
        markup +
        `<div class="item">
        <img src=${item.webformatURL} alt="photo" class="gallery-item_img">
        </div>`,
        // <buttuon class="del-item_but">&#120;</button>
    '',
    );
};

const createGalleryItemsFav = items => {
    return items.reduce(
    (markup, item) =>
        markup +
        `<div class="item">
        <img src=${item.webformatURL} alt="photo" class="gallery-item_img">
        <buttuon class="del-item_but">&#120;</button>
        </div>`,

    '',
    );
};



// СОЗДАНИЕ ЧЕРЕЗ HBS
// const createSlider = event =>{
//     const link = event.target.src;
//     const article = articleTpl({url: link});
//     body.insertAdjacentHTML('afterbegin', article);
// };

const createSlider = event =>{
    const link = event.target.src;
    console.log(link);
    toggleSlider();
    currentImg = link;
    sliderImage.setAttribute('src', link);
}

const addToFavorites = event => {
    const currentImg = document.querySelector('.slider__image');
    const imageSrc = currentImg.getAttribute('src');

    const link = favorImages.find(url => url.webformatURL === imageSrc);
    if(link !== undefined){
        alert('Такая картиночка уже есть((( посмотри в избранном')
        currentImg.classList.add('slider__image__animation')
    }
    else {
        const favoritesObj = {
            webformatURL: imageSrc,
            name: 'favorImage'
        };
        favorImages.push(favoritesObj);
        storage.set(favorImages);
        showConfirmBlock();
    }
};

const showConfirmBlock = () => {
    toggleConfirm();
    setTimeout(() => {
        toggleConfirm();
    }, 500);

}

const choisePrevImage = event => {

    const currentImg = document.querySelector('.slider__image');
    const sliderImageSrc = currentImg.src;

    const imagesPseudo = gallery.querySelectorAll('IMG');
    const imageArrey = Array.from(imagesPseudo);
    const maxLength = imageArrey.length;
    const minLength = 0;

    const element = imageArrey.find(el => el.src === sliderImageSrc)
    let prevIndex =  (imageArrey.indexOf(element)) - 1;
    if(prevIndex < minLength){
        prevIndex = maxLength - 1;
    }

    const newSlideImage = imageArrey[prevIndex].src;

    sliderImage.setAttribute('src', newSlideImage);
    console.log(newSlideImage);
};

const choiseNextImage = event => {

    const currentImg = document.querySelector('.slider__image');
    const sliderImageSrc = currentImg.src;

    const imagesPseudo = gallery.querySelectorAll('IMG');
    const imageArrey = Array.from(imagesPseudo);
    const maxLength = imageArrey.length;
    const minLength = 0;

    const element = imageArrey.find(el => el.src === sliderImageSrc)
    let nextIndex =  (imageArrey.indexOf(element)) + 1;
    if(nextIndex >= maxLength){
        nextIndex = minLength;
    }

    const newSlideImage = imageArrey[nextIndex].src;

    sliderImage.setAttribute('src', newSlideImage);
    console.log(newSlideImage);
};

const updatePhotos = markup => {
    gallery.insertAdjacentHTML('beforeend', markup);
};

const resetPhotosGallery = () => {
    gallery.innerHTML = '';
};

const handleFetch = params => {
    toggleSpinner();
    hideFavorHeader();
    hideSlider();
    fetchImages(params)
        .then(photos => {
        console.log(photos);
        const markup = createGalleryItems(photos);
        updatePhotos(markup);
        toggleSpinner();
        scrollToBottom();
    });
};

const handleFormSumit = e => {
    e.preventDefault();

    resetCurrentPage();
    resetPhotosGallery();

    currentQuery = input.value;

    handleFetch({
    query: currentQuery,
    count: 12,
    page: currentPage,
    });

    // e.target.reset();
    showLoadMoreBtn();
};

const handleLoadMoreClick = () => {
    incrementCurrentPage();

    handleFetch({
    query: currentQuery,
    count: 12,
    page: currentPage,
    });
};

const hanelLoadImage = ({ target }) => {
    const nodeName = target.nodeName;
    if(nodeName !== 'IMG') return;
    console.log(event);
    createSlider(event)
    // input.setAttribute('disabled', 'disabled');
    // searchButton.setAttribute('disabled', 'disabled');

};

const openFavorites = () => {
    toggleSpinner();
    resetCurrentPage();
    resetPhotosGallery();
    showFavorHeader();
    hideSlider();
    loadMoreBtn.classList.remove('visible');
    const markup = createGalleryItemsFav(favorImages);
    updatePhotos(markup);
    const galleryBlock = document.querySelector('.gallery');
    galleryBlock.addEventListener('click', delFromFav);
    toggleSpinner();
}

const delFromFav = ({target}) => {
    const nodeName = target.nodeName;
    console.log(nodeName)
    if(nodeName !== 'BUTTUON') return;
    const delImage = target.previousElementSibling.src;
    console.log(delImage)
    const newFav = favorImages.filter(elem => elem.webformatURL !== delImage)
    favorImages = newFav
    openFavorites();
    storage.remove();
    storage.set(favorImages);
}

form.addEventListener('submit', handleFormSumit);
loadMoreBtn.addEventListener('click', handleLoadMoreClick);
gallery.addEventListener('click', hanelLoadImage);

closeSliderBtn.addEventListener('click', toggleSlider);
addToFavorBtn.addEventListener('click', addToFavorites);
nextSliderBtn.addEventListener('click', choiseNextImage);
prevSliderBtn.addEventListener('click', choisePrevImage);

favoritesBtn.addEventListener('click', openFavorites);
