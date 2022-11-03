import { apiModalDetails } from './themovieApi';
import markupModal from '../js/templates/markupModal.hbs';
import { refs } from './refs';

const choiceFilm = document.querySelector('.list-card__item');

refs.homeGallery.addEventListener('click', clickOnMovie);

// Click Handler Function
async function clickOnMovie(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG' && evt.target.nodeName !== 'H2') {
    return;
  }
  console.log(evt.target.dataset.id);
  let movieId = evt.target.dataset.id;
  apiModalDetails(movieId).then(resp => {
    refs.filmBox.innerHTML = markupModal(resp);
  });
}
