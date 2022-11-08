import { apiHomeSearch } from './themovieApi';
import markupSearchPage from '../js/templates/markupHomePage.hbs';
import { refs } from './refs';
import { getGenres, dataRevize } from './data/data-revize';
import { localStorageAPI } from './api/localStorageAPI';
import pagination from "./pagin";

let inputData = '';
refs.form.addEventListener('submit', onButtonClick);

const conteiner = document.querySelector('.gallery');
const spinner = document.querySelector('.preloader');
const toMainBtn = document.querySelector('.to_main__link');

if (toMainBtn) {
  toMainBtn.addEventListener('click', e => {
    spinner.classList.remove('done');
    page = 1;
    localStorageAPI.save('page-pg', page);
  });
}

function onButtonClick(evt) {
  spinner.classList.remove('done');
  evt.preventDefault();
  page = 1;
  inputData = evt.target.elements.serch_film.value.trim().toLowerCase();
  if (inputData.length < 1 || inputData === '') {
    warningShown();
    refs.pagination.classList.add('visually-hidden');
    spinner.classList.add('done');
    refs.form.reset();
    inputData === '';
    localStorageAPI.save('query-pg', inputData);
    
  } else {
    apiHomeSearch(inputData).then(data => {
      //   //   if (data.hits.length === 0) {
      //   //     homeGallary.innerHTML = '';
      //   //     // Notiflix.Notify.failure(
      //   //     //   'Sorry, there are no images matching your search query. Please try again.'
      //   //     // );
      //   //     return;
      //   //   }
      refs.form.reset();
      warningUnShown();
      const allGenres = getGenres();
      const films = data.results;
      pagination.reset(films);
      pagination.setTotalItems(data.total_results);
      pagination.reset();
      const normalFilmData = dataRevize(films, allGenres);
      refs.pagination.classList.remove('visually-hidden');
      refs.homeGallery.innerHTML = markupSearchPage(normalFilmData);
      localStorageAPI.save('query-pg', inputData);
      spinner.classList.add('done');
    });
    
  }
  
  // apiHomeSearch(inputData).then(data => {
  //   //   if (data.hits.length === 0) {
  //   //     homeGallary.innerHTML = '';
  //   //     // Notiflix.Notify.failure(
  //   //     //   'Sorry, there are no images matching your search query. Please try again.'
  //   //     // );
  //   //     return;
  //   //   }
  //   const allGenres = getGenres();
  //   const films = data.results;
  //   const normalFilmData = dataRevize(films, allGenres);

  //   refs.homeGallery.innerHTML = markupSearchPage(normalFilmData);
  //   // spinner.classList.add('done');
  // });
}

function warningShown() {
  
  refs.divError.classList.remove('visually-hidden');
  refs.homeGallery.classList.add('visually-hidden');
  refs.filterForm.classList.add('visually-hidden');
}

function warningUnShown() {
  
  refs.divError.classList.add('visually-hidden');
  refs.homeGallery.classList.remove('visually-hidden');
  refs.filterForm.classList.remove('visually-hidden');
}

refs.logo.addEventListener('click', onLogoClick);

function onLogoClick(e) {
  spinner.classList.remove('done');
  pagination.reset();
  amountOfPages = 1000;
  page = 1;
  genre = '';
  year = '';
  query = '';
  sort = '';
  localStorageAPI.save('page-pg', page);
  localStorageAPI.save('genre-pg', genre);
  localStorageAPI.save('year-pg', year);
  localStorageAPI.save('total-pages', amountOfPages);
  localStorageAPI.save('query-pg', query);
  localStorageAPI.save('sort-pg', sort);
}

refs.home.addEventListener('click', onHomeClick);

function onHomeClick(e) {
  spinner.classList.remove('done');
}

export { inputData };
