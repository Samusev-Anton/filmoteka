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
    onOpenModal();
  });
}

function onOpenModal() {
  const closeModalBtn = document.querySelector('.modal__button-close');
  document.body.addEventListener('keydown', onEscButton);
  document.body.classList.add('modal-open');
  refs.filmBox.classList.remove('visually-hidden');
  document.body.addEventListener('click', handleClick);
  closeModalBtn.addEventListener('click', onCloseModal);
}

function onCloseModal() {
  document.body.classList.remove('modal-open');
  refs.filmBox.classList.add('visually-hidden');
  document.body.removeEventListener('click', handleClick);
  document.body.removeEventListener('keydown', onEscButton);
}

function handleClick(event) {
  console.log('event target: ', event.target);
  console.log('currentTarget: ', event.currentTarget);
  if (event.target === refs.filmBox) {
    onCloseModal();
  }
}

function onEscButton(evt) {
  if (evt.code === 'Escape') {
    onCloseModal();
  }
}
