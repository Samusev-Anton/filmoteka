import { apiMovieDetails } from './themovieApi';
import * as basicLightbox from 'basiclightbox';

import 'basiclightbox/src/styles/main.scss';
const basicLightbox = require('basiclightbox');

let instance;
let visiblePlayer = false;

document.addEventListener('click', watchTrailer);

document.addEventListener('keydown', closePlayer);

function watchTrailer(event) {
  const target = event.target;

  if (target.classList.contains('button__trailer')) {
    const movieID = target.dataset.id;
    apiMovieDetails(movieID).then(resp => {
      createPlayer(resp.results[0].key);
    });
  }
}

function createPlayer(videoKey) {
  instance = basicLightbox.create(
    `
    <iframe src='https://www.youtube.com/embed/${videoKey}' 
	 width="80%" height="80%"
	 title="YouTube video player"	frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
  </iframe>
`
  );
  document.addEventListener('click', closePlayerOnClick);
  instance.show(() => document.body.classList.add('modal-open'));
}

function closePlayer(evt) {
  if (evt.key === 'Escape') {
    instance.close(() => document.body.classList.remove('modal-open'));
  }
}

function closePlayerOnClick() {
  visiblePlayer = basicLightbox.visible();

  if (visiblePlayer) {
    document.body.classList.remove('modal-open');
    document.removeEventListener('click', closePlayerOnClick);
  }
}
