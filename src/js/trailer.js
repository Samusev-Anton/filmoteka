import { apiMovieDetails } from './themovieApi';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';

document.addEventListener('click', watchTrailer);

function watchTrailer(event) {
  const target = event.target;

  if (
    target.classList.contains('button__trailer') ||
    target.classList.contains('modal__button--trailer')
  ) {
    const movieID = target.dataset.id;
    console.log('movieID :>> ', movieID);
    apiMovieDetails(movieID).then(resp => {
      createPlayer(resp);
    });
  }
}

function createPlayer(videoKey) {
  const instance = basicLightbox.create(`
    <iframe src='https://www.youtube.com/embed/${videoKey}' width="640" height="480" frameborder="0" allowfullscreen origin></iframe>
`);

  instance.show();
}
