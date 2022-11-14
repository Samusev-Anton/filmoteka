import { apiHomeSearch } from './themovieApi';
import markupSearchPage from '../js/templates/markupHomePage.hbs';
import { refs } from './refs';
import { getGenres, dataRevize } from './data/data-revize';
import { localStorageAPI } from './api/localStorageAPI';
import { trailerBtnVisible } from './trailer';
import { paginationSettings } from './pagin';

let inputData = '';
let page = 1;
refs.form.addEventListener('submit', onButtonClick);

// const conteiner = document.querySelector('.gallery');
const spinner = document.querySelector('.preloader');
const toMainBtn = document.querySelector('.to_main__link');

if (toMainBtn) {
  toMainBtn.addEventListener('click', e => {
    spinner.classList.remove('done');
    let page = 1;
    localStorageAPI.save('page-pg', page);
  });
}

function moviesDataUpdate(data) {
  localStorage.setItem('moviesData', JSON.stringify(data.results));
}

function onButtonClick(evt) {
  spinner.classList.remove('done');
  evt.preventDefault();
  searchPage = 1;
  inputData = evt.target.elements.serch_film.value.trim().toLowerCase();
  if (inputData.length < 1 || inputData === '') {
    warningShown();
    refs.pagination.classList.add('visually-hidden');
    refs.form.reset();
    spinner.classList.add('done');
    localStorageAPI.save('query-pg', inputData);
  } else {
    apiHomeSearch(inputData, searchPage).then(data => {
      const { total_results: totalItems } = data;
      paginationSettings.pagination.reset(totalItems);
      paginationSettings.pagination.inputData = inputData;
      paginationSettings.searchType = 'search';
      refs.form.reset();
      warningUnShown();
      moviesDataUpdate(data);
      let amountOfPages = data.total_pages;
      localStorageAPI.save('total-pages', amountOfPages);
      const allGenres = getGenres();
      const films = data.results;
      const normalFilmData = dataRevize(films, allGenres);
      refs.pagination.classList.remove('visually-hidden');
      refs.homeGallery.innerHTML = markupSearchPage(normalFilmData);
      localStorageAPI.save('query-pg', inputData);

      spinner.classList.add('done');
      trailerBtnVisible();

      if (data.results.length < 1) {
        warningShown();
        refs.pagination.classList.add('visually-hidden');
        refs.form.reset();
        inputData = '';
        localStorageAPI.save('query-pg', inputData);
        spinner.classList.add('done');
      } else {
        warningUnShown();
        refs.homeGallery.innerHTML = markupSearchPage(normalFilmData);
        trailerBtnVisible();
        refs.form.reset();
      }
    });
  }
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
}

refs.home.addEventListener('click', onHomeClick);

function onHomeClick(e) {
  spinner.classList.remove('done');

  //pagination reset
  pagination.reset();
}

export { inputData };
