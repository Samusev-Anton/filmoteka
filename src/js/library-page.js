import markupLibraryPage from './templates/markupLibraryPage.hbs';
import { localStorageAPI } from './api/localStorageAPI';

const libraryGallery = document.querySelector('.library-gallery');
console.log(libraryGallery);

try {
  const normalFilm = localStorageAPI.load('watched');
  libraryGallery.innerHTML = markupLibraryPage(normalFilm);
} catch (error) {
  console.log(error);
}
