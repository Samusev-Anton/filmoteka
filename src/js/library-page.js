import markupLibraryPage from './templates/markupLibraryPage.hbs';
import { localStorageAPI } from './api/localStorageAPI';
import { dataToYear } from './data/data-revize';

const libraryGallery = document.querySelector('.library-gallery');
const btnQueue = document.querySelector('.js-queue');
const btnWatched = document.querySelector('.js-watched');

btnQueue.addEventListener('click', onClickQueue);
btnWatched.addEventListener('click', onClickWatched);

function onClickQueue() {
  markupLibrary('queue');
}
function onClickWatched() {
  markupLibrary('watched');
}

markupLibrary('watched');

function markupLibrary(key) {
  libraryGallery.innerHTML = '';
  try {
    const listFilms = localStorageAPI.load(key);
    const normalListFilms = dataToYear(listFilms);
    console.log(normalListFilms);
    libraryGallery.innerHTML = markupLibraryPage(normalListFilms);
  } catch (error) {
    console.log(error);
  }
}
