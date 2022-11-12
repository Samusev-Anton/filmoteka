import { apiMovieDetails } from './themovieApi';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/src/styles/main.scss';

let instance;
document.addEventListener('click', watchTrailer);
document.addEventListener('keydown', closePlayer);

export function trailerBtnVisible() {
  const listTrailerBtn = document.querySelectorAll('.button__trailer');
  //   console.log('listTrailerBtn :>> ', listTrailerBtn);

  listTrailerBtn.forEach(item => {
    const movieID = item.dataset.id;
    apiMovieDetails(movieID).then(resp => {
      if (resp.results.length === 0 || resp === undefined) {
        item.classList.add('is-hidden');
      }
    });
  });
}

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

  instance.show();
}

function closePlayer(evt) {
  if (evt.key === 'Escape') {
    instance.close();
  }
}
