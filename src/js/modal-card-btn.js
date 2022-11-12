import { Notify } from 'notiflix';
import { localStorageAPI } from './api/localStorageAPI';
import { addWathedBtnref, addQueueBtnref } from './modal-card';

export let storageWatched = [];
export let storageQueue = [];
export let arrJSON = [];

export function addWatchedBtn(key, obj) {
  arrJSON = localStorage.getItem(key);
  checksForUniqueElement(key, obj, storageWatched, addWathedBtnref);
  if (arrJSON === null) {
    storageWatched.push(obj);
    localStorageAPI.save(key, storageWatched);
  } else {
    addLocalStorage(key, obj, storageWatched, arrJSON);
  }
}

export function addQueueBtn(key, obj) {
  arrJSON = localStorage.getItem(key);
  checksForUniqueElement(key, obj, storageQueue, addQueueBtnref);
  if (arrJSON === null) {
    storageQueue.push(obj); // console.dir(storageQueue[0].id);
    localStorageAPI.save(key, storageQueue);
  } else {
    addLocalStorage(key, obj, storageQueue, arrJSON);
  }
}

export function checksForUniqueElement(key, obj, arr, btnRef) {
  if (arr.includes(obj)) {
    errorNotify();
    btnRef.innerText = 'ADDED TO LIBRARY';
    return;
  }
}

function addLocalStorage(key, obj, storageObj, arrJSON) {
  storageObj = JSON.parse(arrJSON);
  let uniqueId = storageObj.filter(({ id }) => id === obj.id);
  if (uniqueId.length >= 1) {
    errorNotify();
    localStorage.removeItem(key);
    localStorageAPI.save(key, storageWatched);
  } else {
    storageWatched.push(obj);
    localStorage.removeItem(key);
    localStorageAPI.save(key, storageWatched);
  }
}

function errorNotify() {
  Notify.failure('we have alredy added that movie');
  console.log('подвійна нотифікашка')
}
