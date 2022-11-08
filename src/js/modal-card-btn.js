import { Notify } from 'notiflix';
import { localStorageAPI } from './api/localStorageAPI';

let storageWatched = [];
let storageQueue = [];

export function addWatchedBtn(key, obj) {
  let arrWatched = localStorage.getItem(key);
  if (storageWatched.includes(obj)) {
    errorNotify();
    return;
  } else if (arrWatched === null) {
    storageWatched.push(obj);
    localStorageAPI.save(key, storageWatched);
  } else {
    storageWatched = JSON.parse(arrWatched);
    // console.log(storageWatched);
    let uniqueId = storageWatched.filter(({ id }) => id === obj.id);
    // console.dir(Object.keys(uniqueId));
    // console.log(uniqueId.length);
    if (uniqueId.length >= 1) {
      // console.log(uniqueId.length >= 1);
      errorNotify();
      localStorage.removeItem(key);
      localStorageAPI.save(key, storageWatched);
    } else {
      // console.log(uniqueId === []);
      storageWatched.push(obj);
      localStorage.removeItem(key);
      localStorageAPI.save(key, storageWatched);
    }
  }
}

export function addQueueBtn(key, obj) {
  let arrQueue = localStorage.getItem(key); // console.dir(obj.id);
  if (storageQueue.includes(obj)) {
    Notify.failure('we have alredy added that movie');
    return;
  } else if (arrQueue === null) {
    storageQueue.push(obj); // console.dir(storageQueue[0].id);
    localStorageAPI.save(key, storageQueue);
  } else {
    storageQueue = JSON.parse(arrQueue);
    // console.log(storageQueue);
    let uniqueId = storageQueue.filter(({ id }) => id === obj.id);
    // console.dir(Object.keys(uniqueId));
    // console.log(uniqueId.length);
    if (uniqueId.length >= 1) {
      // console.log(uniqueId.length >= 1);
      Notify.failure('we have alredy added that movie');
      localStorage.removeItem(key);
      localStorageAPI.save(key, storageQueue);
    } else {
      // console.log(uniqueId === []);
      storageQueue.push(obj);
      localStorage.removeItem(key);
      localStorageAPI.save(key, storageQueue);
    }
  }
}

function errorNotify() {
  Notify.failure('we have alredy added that movie');
}
