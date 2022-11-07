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
let listFilms;
markupLibrary('watched');

function markupLibrary(key) {
  libraryGallery.innerHTML = '';

  try {
    listFilms = localStorageAPI.load(key);
    listFilms.map(obj => {
      obj.genres.splice(1);
      obj.vote_average = Number(obj.vote_average.toFixed(1));
      return obj;
    });
    const normalListFilms = dataToYear(listFilms);
    console.log(normalListFilms);
    libraryGallery.innerHTML = markupLibraryPage(normalListFilms);
    
  } catch (error) {
    console.log(error);
  }
}


