import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/src/styles/main.scss';

import markupLibraryPage from './templates/markupLibraryPage.hbs';
import markupModal from './templates/markupModalLibrary.hbs';
import { localStorageAPI } from './api/localStorageAPI';
import { dataToYear } from './data/data-revize';
import { ID_URL, API_KEY } from './api/api-parts';

const libraryGallery = document.querySelector('.library-gallery');
const btnQueue = document.querySelector('.js-queue');
const btnWatched = document.querySelector('.js-watched');
const libraryTitle = document.querySelector('.library-text');


btnQueue.addEventListener('click', onClickQueue);
btnWatched.addEventListener('click', onClickWatched);

// let movieTitle;
let listFilms;

markupLibrary('watched');

function onClickQueue() {
  btnWatched.classList.remove('button--accent');
  markupLibrary('queue');
}

function onClickWatched() {
  markupLibrary('watched');
}

function markupLibrary(key) {
  libraryGallery.innerHTML = '';
  listFilms = localStorageAPI.load(key);
  if (listFilms === undefined) {
    return;
  }
  listFilms.map(obj => {
    obj.genres.splice(1);
    obj.vote_average = Number(obj.vote_average.toFixed(1));
    return obj;
  });
  const normalListFilms = dataToYear(listFilms);

  const arrId = {};
  normalListFilms.forEach(obj => {
    arrId[obj.id] = obj;
  });

  const renderArr = Object.values(arrId);
  if (renderArr.length >= 1) {
    libraryTitle.classList.add('is-hidden');
  }

  libraryGallery.innerHTML = markupLibraryPage(renderArr);
  //________________________________________________
  const filmCard = document.querySelector('.film-list');
  filmCard.addEventListener('click', clickOnMovie);
}



async function apiModalDetails(movieId) {
  try {
    const responce = await fetch(
      `${ID_URL}/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    const resp = await responce.json();
    console.log(resp);
    return resp;
  } catch (Error) {
   
  }
}

async function clickOnMovie(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return
  }
  const movieId = evt.target.dataset.id;
  apiModalDetails(movieId).then(resp => {
  const instance = basicLightbox.create(
  markupModal(resp),
  {
    onShow: instance => {
      instance.element().querySelector('img').onclick = instance.close;
    },
  }
);
    instance.show();
  });
}



