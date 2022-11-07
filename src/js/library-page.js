import markupLibraryPage from './templates/markupLibraryPage.hbs';
import { localStorageAPI } from './api/localStorageAPI';
import { dataToYear } from './data/data-revize';

const libraryGallery = document.querySelector('.library-gallery');
const btnQueue = document.querySelector('.js-queue');
const btnWatched = document.querySelector('.js-watched');
const libraryTitle = document.querySelector('.library-text');
let movieTitle;

btnQueue.addEventListener('click', onClickQueue);
btnWatched.addEventListener('click', onClickWatched);

function onClickQueue() {
  btnWatched.classList.remove('button--accent');
  markupLibrary('queue');
}
function onClickWatched() {
  markupLibrary('watched');
}
let listFilms;
markupLibrary('watched');
movieTitle = document.querySelector('.film-card__title');
function markupLibrary(key) {
    
  libraryGallery.innerHTML = '';
  listFilms = localStorageAPI.load(key);

  if (listFilms.length >= 1) {
    libraryTitle.classList.add('is-hidden');
  }

  listFilms.map(obj => {
    obj.genres.splice(1);
    obj.vote_average = Number(obj.vote_average.toFixed(1));
    return obj;
  });
  const normalListFilms = dataToYear(listFilms);
  console.log(normalListFilms);
  libraryGallery.innerHTML = markupLibraryPage(normalListFilms);
  
}

