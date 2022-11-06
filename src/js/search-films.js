import { apiHomeSearch } from './themovieApi';
import markupSearchPage from '../js/templates/markupHomePage.hbs';
import { refs } from './refs';
import { getGenres, dataRevize } from './data/data-revize';

let inputData = '';
refs.form.addEventListener('submit', onButtonClick);

// const conteiner = document.querySelector('.gallery');
const spinner = document.querySelector('.preloader');
function onButtonClick(evt) {
  spinner.classList.remove('done');
  evt.preventDefault();
  page = 1;
  inputData = evt.target.elements.serch_film.value.trim().toLowerCase();
  // if (inputData.length < 1) {
  //   Notiflix.Notify.failure('The field must not be empty');
  //   return;
  // }

  apiHomeSearch(inputData).then(data => {
    //   if (data.hits.length === 0) {
    //     homeGallary.innerHTML = '';
    //     // Notiflix.Notify.failure(
    //     //   'Sorry, there are no images matching your search query. Please try again.'
    //     // );
    //     return;
    //   }
    const allGenres = getGenres();
    const films = data.results;
    const normalFilmData = dataRevize(films, allGenres);

    refs.homeGallery.innerHTML = markupSearchPage(normalFilmData);
    spinner.classList.add('done');
  });
}

export { inputData };
