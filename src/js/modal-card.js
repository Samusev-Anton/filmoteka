import { apiModalDetails } from './themovieApi';
import markupModal from '../js/templates/markupModal.hbs';

const filmBox = document.querySelector('.film-box');
const choiceFilm = document.querySelector('.list-card__item');

// function onClickFilm() {}

apiModalDetails().then(resp => {
  // console.log(resp);
  filmBox.innerHTML = markupModal(resp);
  console.log(choiceFilm);
});
