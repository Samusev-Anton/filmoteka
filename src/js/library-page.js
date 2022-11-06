import markupLibraryPage from './templates/markupLibraryPage.hbs';
import { localStorageAPI } from './api/localStorageAPI';

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
    libraryGallery.innerHTML = markupLibraryPage(listFilms);
  } catch (error) {
    console.log(error);
  }
}
