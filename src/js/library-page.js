import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/src/styles/main.scss';

import markupLibraryPage from './templates/markupLibraryPage.hbs';
import markupModal from './templates/markupModalLibrary.hbs';
import { localStorageAPI } from './api/localStorageAPI';
import { dataToYear } from './data/data-revize';
import { ID_URL, API_KEY } from './api/api-parts';
// import modalOleg from './modal-card';
// console.dir(modalOleg);

const libraryGallery = document.querySelector('.library-gallery');
const btnQueue = document.querySelector('.js-queue');
const btnWatched = document.querySelector('.js-watched');
const libraryTitle = document.querySelector('.library-text');

btnQueue.addEventListener('click', onClickQueue);
btnWatched.addEventListener('click', onClickWatched);

let listFilms = [];
let normalListFilms;
let movieId;
const KEY_WATCHED = 'watched';
const KEY_QUEUE = 'queue';

markupLibrary(KEY_WATCHED);

function markupLibrary(key) {
  libraryGallery.innerHTML = '';
  libraryTitle.classList.remove('is-hidden');
  listFilms = localStorageAPI.load(key);
  console.log(listFilms);
  if (listFilms.length < 1) {
    return;
  }
  if (listFilms[0].genres.length > 1) {
    listFilms.map(obj => {
      obj.genres.splice(1);
      obj.vote_average = Number(obj.vote_average.toFixed(1));
    });
    normalListFilms = dataToYear(listFilms);
  }
  // const arrId = {};
  // normalListFilms.forEach(obj => {
  //   arrId[obj.id] = obj;
  // });
  // renderArr = Object.values(arrId);
  if (normalListFilms.length >= 1) {
    libraryTitle.classList.add('is-hidden');
  }

  libraryGallery.innerHTML = markupLibraryPage(normalListFilms);

  const filmCard = document.querySelector('.film-list');
  filmCard.addEventListener('click', clickOnMovie);
}

function onClickQueue(e) {
  e.preventDefault();
  btnQueue.classList.add('button--accent');
  btnWatched.classList.remove('button--accent');
  markupLibrary(KEY_QUEUE);
}

function onClickWatched(e) {
  e.preventDefault();
  btnWatched.classList.add('button--accent');
  btnQueue.classList.remove('button--accent');
  markupLibrary(KEY_WATCHED);
}

async function clickOnMovie(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  movieId = evt.target.dataset.id;
  const resp = await apiModalDetails(movieId);

  instance = basicLightbox.create(markupModal(resp), {
    onShow: instance => {},
    onClose: instance => {
      body.classList.remove('modal-open');
    },
  });
  instance.show();
  constBtnCloseModal = document.querySelector('.modal_button-close');
  constBtnCloseModal.addEventListener('click', () => instance.close());
  //____________________________________________________________________
  const body = document.querySelector('body');
  body.classList.add('modal-open');

  const light = document.querySelector('.basicLightbox');
  light.classList.add('film-box');

  const modalBtnWatched = document.querySelector('.modal__button-watched');
  const modalBtnQueue = document.querySelector('.modal__button-queue');
  modalBtnWatched.addEventListener('click', removeWatched);
  modalBtnQueue.addEventListener('click', removeQueue);
  //_________________________________________________________________
}
//_______________________________________________________________
async function apiModalDetails(movieId) {
  try {
    const responce = await fetch(
      `${ID_URL}/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    const resp = await responce.json();
    resp.vote_average = Number(resp.vote_average.toFixed(1));
    resp.popularity = Number(resp.popularity.toFixed(1));
    return resp;
  } catch (Error) {}
}

function removeWatched(e) {
  e.preventDefault();
  if (e.target.className === 'modal__button-watched') {
    // console.log(e.target.className);
    deleteMovie(KEY_WATCHED);
    // modalBtnWatched.removeEventListener('click', removeWatched);
    return;
  }
  return;
}

function removeQueue(e) {
  e.preventDefault();
  if (e.target.className === 'modal__button-queue') {
    console.log(e.target.className);
    deleteMovie(KEY_QUEUE);
    // modalBtnQueue.removeEventListener('click', removeQueue);
    return;
  }
  return;
}

function deleteMovie(key) {
  // let normalist;
  normalist = localStorageAPI.load(key);
  const renderList = normalist;
  console.log(normalist);
  normalist.forEach((obj, index) => {
    // console.log(obj.id);
    if (obj.id == movieId) {
      renderList.splice(index, 1);

      localStorage.removeItem(key);
      const data = JSON.stringify(renderList);
      localStorage.setItem(key, data);
      markupLibrary(key);
      return;
    }
    return;
  });
}
