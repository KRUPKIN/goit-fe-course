import * as index from "../index";
import * as slider from "./slider";
import * as storage from "../services/storage";

const favorHeader = document.querySelector(".favorites__header");
const favoritesBtn = document.querySelector(".favorites__btn");
const loadMoreBtn = document.querySelector(".load-more");

export const showFavorHeader = () => {
  if (!favorHeader.classList.contains("visible")) {
    favorHeader.classList.add("visible");
  }
};

export const hideFavorHeader = () => {
  if (favorHeader.classList.contains("visible")) {
    favorHeader.classList.remove("visible");
  }
};

const createGalleryItemsFav = items => {
  return items.reduce(
    (markup, item) =>
      markup +
      `<div class="item">
          <img src=${item.webformatURL} alt="photo" class="gallery-item_img">
          <buttuon class="del-item_but">&#120;</button>
          </div>`,
    ""
  );
};

const openFavorites = () => {
  index.resetCurrentPage();
  index.resetPhotosGallery();
  showFavorHeader();
  slider.hideSlider();
  loadMoreBtn.classList.remove("visible");
  const markup = createGalleryItemsFav(index.favorImages);
  index.updatePhotos(markup);
  const galleryBlock = document.querySelector(".gallery");
  galleryBlock.addEventListener("click", delFromFav);
};

const delFromFav = ({ target }) => {
  const nodeName = target.nodeName;
  if (nodeName !== "BUTTUON") return;
  const delImage = target.previousElementSibling.src;
  const newFav = index.favorImages.filter(
    elem => elem.webformatURL !== delImage
  );
  index.favorImages = newFav;
  openFavorites();
  storage.remove();
  storage.set(favorImages);
};

favoritesBtn.addEventListener("click", openFavorites);
