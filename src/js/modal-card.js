import { apiModalDetails, apiMovieDetails } from './themovieApi';
import markupModal from '../js/templates/markupModal.hbs';
import { refs } from './refs';
// import addWatched from './my-library';
import { addWatchedBtn, addQueueBtn } from './modal-card-btn';

const STORAGE_KEY_WATCHED = 'watched';
const STORAGE_KEY_QUEUE = 'queue';

refs.homeGallery.addEventListener('click', clickOnMovie);

// variable for localstorage
let response;
let addWathedBtnref = null;
let addQueueBtnref = null;
let iD = [];
// -------------------------
// Click Handler Function
async function clickOnMovie(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG' && evt.target.nodeName !== 'H2') {
    return;
  }

  // console.log(evt.target.dataset.id);
  const movieId = evt.target.dataset.id;
  apiModalDetails(movieId).then(resp => {
    // refrash variable for localstorage
    response = resp;
    //--------------------------
    // console.log(resp);
    refs.filmBox.innerHTML = markupModal(resp);
    onOpenModal();
    iD.push(movieId);
  });
}

function onOpenModal() {
  const closeModalBtn = document.querySelector('.modal__button-close');
  const rotateModal = document.querySelector('.modal__button-rotate');
  const unRotateModal = document.querySelector('.modal__button-backtoinfo');
  addWathedBtnref = document.querySelector('.modal__button--watched');
  addQueueBtnref = document.querySelector('.modal__button--queue');
  rotateModal.addEventListener('click', onRotateModal);
  rotateModal.addEventListener('click', watchTrailer);
  unRotateModal.addEventListener('click', onUnRotateModal);
  document.body.addEventListener('keydown', onEscButton);
  document.body.addEventListener('click', handleClick);
  closeModalBtn.addEventListener('click', onCloseModal);
  document.body.classList.add('modal-open');
  refs.filmBox.classList.remove('visually-hidden');
}

function onUnRotateModal() {
  const modal = document.querySelector('.modal');
  const modalBackSide = document.querySelector('.modal__backside');

  modal.classList.remove('rotated');
  modalBackSide.classList.remove('rotated360');
}

function onRotateModal() {
  const modal = document.querySelector('.modal');
  const modalBackSide = document.querySelector('.modal__backside');
  modal.classList.add('rotated');
  modalBackSide.classList.add('rotated360');
  const iframe = document.querySelector('iframe');
  iframe.remove();
}

function onCloseModal() {
  const closeModalBtn = document.querySelector('.modal__button-close');
  const rotateModal = document.querySelector('.modal__button-rotate');
  const unRotateModal = document.querySelector('.modal__button-backtoinfo');
  document.body.classList.remove('modal-open');
  refs.filmBox.classList.add('visually-hidden');
  rotateModal.removeEventListener('click', onRotateModal);
  rotateModal.removeEventListener('click', watchTrailer);
  unRotateModal.removeEventListener('click', onUnRotateModal);
  document.body.removeEventListener('keydown', onEscButton);
  document.body.removeEventListener('click', handleClick);
  closeModalBtn.removeEventListener('click', onCloseModal);
  iD = [];
}

function onEscButton(evt) {
  if (evt.code === 'Escape') {
    onCloseModal();
  }
}

function handleClick(event) {
  if (event.target.className === 'modal__button--queue') {
    console.log(addWathedBtnref);
    addWathedBtnref.disabled = true;
    addQueueBtn(STORAGE_KEY_QUEUE, response);
  }
  if (event.target.className === 'modal__button--watched') {
    console.log(addQueueBtnref);
    addQueueBtnref.disabled = true;
    addWatchedBtn(STORAGE_KEY_WATCHED, response);
  }
  
  if (event.target === refs.filmBox) {
    onCloseModal();
  }
}

function watchTrailer() {
  apiMovieDetails(iD).then(resp => {
    createPlayer(resp);
  });
}

function createPlayer(videoKey) {
  const modalBackSide = document.querySelector('.modal__backside');
  const player = `<iframe class="youtube-player"
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/${videoKey}"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  ></iframe>`;
  modalBackSide.insertAdjacentHTML('beforeend', player);
}
