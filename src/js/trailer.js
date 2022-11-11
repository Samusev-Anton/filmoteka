import { apiMovieDetails } from './themovieApi';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';
import { refs } from './refs';

let instance;
document.addEventListener('click', watchTrailer);
document.addEventListener('keydown', closePlayer);
refs.filmBox.addEventListener('DOMContentLoaded', trailerBtnVisible);

export function trailerBtnVisible() {
  const listTrailerBtn = document.querySelectorAll('.button__trailer');

  // listTrailerBtn.forEach(item => {
  //   const movieID = item.dataset.id;
  //   apiMovieDetails(movieID).then(resp => {
  //     console.log(resp);
  //     if (resp.results.length === 0) {
  //       item.classList.add('is-hidden');
  //     }
  //   });
  // });
}

function watchTrailer(event) {
  const target = event.target;

  if (target.classList.contains('button__trailer')) {
    const movieID = target.dataset.id;
    apiMovieDetails(movieID).then(resp => {
      console.log(resp.results[0].key);
      createPlayer(resp.results[0].key);
    });
  }
}

function createPlayer(videoKey) {
  instance = basicLightbox.create(
    `
    <iframe src='https://www.youtube.com/embed/${videoKey}' 
	 width="100%" height="100%"
	 title="YouTube video player"	frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
  </iframe>
`
  );

  instance.show();
}

function closePlayer(evt) {
  if (evt.key === 'Escape') {
    instance.close();
  }
}
