// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchPhotosByQuery } from './js/pixabay-api';
import { createGalleryCardTemplate } from './js/render-function';

const serchFormEl = document.querySelector('.js-search-form');
const btnFormEl = document.querySelector('.search-btn');
const galleryEl = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');
const loadMoreBtnEl = document.querySelector('.load-more-btn');

let page = 1;
let searchedQuery = '';
let lightbox;
const perPage = 15;

loadMoreBtnEl.classList.add('is-hidden');
loader.classList.add('loader-hidden');

const onSearchFormSubmit = async event => {
  event.preventDefault();
    
  searchedQuery = event.currentTarget.elements.user_query.value.trim();
    
  if (searchedQuery === "") {
      iziToast.warning({
        message: 'Please enter a search term.',
        position: 'topRight',
      });

      return;
    }
    //Щоб потім новий запит при сабміті пішов за першою групою
  page = 1;
  
    //Приховуємо кнопку 
  loadMoreBtnEl.classList.add('is-hidden');

  // Очищаємо галерею перед новим запитом
  galleryEl.innerHTML = '';
// Додаємо лоадер
  loader.classList.remove('loader-hidden');

    try {
      const { data } = await fetchPhotosByQuery(searchedQuery, page);
      loader.classList.add('loader-hidden');

    if (data.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      
      //  Очищаємо інпут через форму при умові, якщо повернеться порожній масив 
      serchFormEl.reset();

      return;
    }
      galleryEl.innerHTML = createGalleryCardTemplate(data.hits);
    //Якщо при запиті зображень більше однієї групи то кнопка буде відображатись і прослуховуватиметься подія
    if (data.totalHits > 1) {
      loadMoreBtnEl.classList.remove('is-hidden');
      loadMoreBtnEl.addEventListener('click', onLoadMoreBtn);
    }
    //Якщо кількість карток буде більше або дорівнює загальної кількості карток на сервері то кнопку приховали 
    if (page * perPage >= data.total) {
      loadMoreBtnEl.classList.add('is-hidden');
      loadMoreBtnEl.removeEventListener('click', onLoadMoreBtn);
      iziToast.info({
        message: `Were sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
    }
    
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 300,
    });
      // Оновлюємо SimpleLightbox
    lightbox.refresh();
  } catch (err) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong, please try again later',
      position: 'topRight',
    }) 
    console.log(err);
  } finally {
    loader.classList.add('loader-hidden');
  }
}

serchFormEl.addEventListener('submit', onSearchFormSubmit);

const onLoadMoreBtn = async event => {
  loader.classList.remove('loader-hidden');
  page++;
  try {
    const {data} = await fetchPhotosByQuery(searchedQuery, page);
    //Додаємо після відмальованої картки наступну
    galleryEl.insertAdjacentHTML('beforeend', createGalleryCardTemplate(data.hits));
    lightbox.refresh();

    const cardHeight = document
      .querySelector('.gallery-item');
    const cardScroll =
      cardHeight.getBoundingClientRect().height;
    window.scrollBy({
      top: cardScroll * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    loadMoreBtnEl.classList.add('is-hidden');
    iziToast.error({
      title: 'Error',
      position: 'topRight',
      message: 'Failed to load images. Please try again later.',
    });
  } finally {
    loader.classList.add('loader-hidden');
  }
};

