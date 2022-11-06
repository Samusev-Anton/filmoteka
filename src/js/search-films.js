import { apiHomeSearch } from './themovieApi';
import markupSearchPage from '../js/templates/markupHomePage.hbs';
import { refs } from './refs';
import { getGenres, dataRevize } from './data/data-revize';
import { localStorageAPI } from './api/localStorageAPI';

let inputData = '';
refs.form.addEventListener('submit', onButtonClick);

// const conteiner = document.querySelector('.gallery');
const spinner = document.querySelector('.preloader');

function onButtonClick(evt) {
  spinner.classList.remove('done');
  evt.preventDefault();
  page = 1;
  inputData = evt.target.elements.serch_film.value.trim().toLowerCase();
  if (inputData.length < 1 || inputData === '') {
    warningShown();
    spinner.classList.add('done');
    form.reset();
    inputData === '';
    localStorageAPI.save('query-pg', inputData);
    
  } else {
    warningUnShown();
    const allGenres = getGenres();
    const films = data.results;
    const normalFilmData = dataRevize(films, allGenres);
    
    refs.homeGallery.innerHTML = markupSearchPage(normalFilmData);
    
    form.reset();
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

export { inputData };
