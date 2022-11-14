import { apiMovieDetails } from './themovieApi';
import * as basicLightbox from 'basiclightbox';

import 'basiclightbox/src/styles/main.scss';
const basicLightbox = require('basiclightbox');

let instance;
let visiblePlayer = false;

document.addEventListener('click', watchTrailerLBox);

function watchTrailerLBox(event) {
  const target = event.target;

  if (target.classList.contains('button__trailer')) {
    const movieID = target.dataset.id;
    apiMovieDetails(movieID).then(resp => {
      createLightBox(resp.results[0].key);
      document.addEventListener('keydown', closeLightBox);
    });
  }
}

function createLightBox(videoKey) {
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
  document.addEventListener('click', closeLightBoxOnClick);

  instance.show(() => document.body.classList.add('modal-open'));
}

function closeLightBox(evt) {
  if (evt.key === 'Escape') {
    instance.close(() => document.body.classList.remove('modal-open'));
    document.removeEventListener('keydown', closeLightBox);
  }
}

function closeLightBoxOnClick() {
  visiblePlayer = basicLightbox.visible();

  if (visiblePlayer) {
    document.body.classList.remove('modal-open');
    document.removeEventListener('click', closeLightBoxOnClick);
  }
}
