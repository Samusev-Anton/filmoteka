import { Notify } from 'notiflix';
import { localStorageAPI } from './api/localStorageAPI';

let storageWatched = [];
let storageQueue = [];

export function addWatchedBtn(key, obj) {
  // console.dir(obj.id);
  let arrWatched = localStorage.getItem(key);
  if (storageWatched.includes(obj)) {
    Notify.failure('we have alredy added that movie');
    return;
  } else if (arrWatched === null) {
    storageWatched.push(obj);
    // console.dir(storageWatched[0].id);
    localStorageAPI.save(key, storageWatched);
  } else {
    storageWatched = JSON.parse(arrWatched);
    // console.log(storageWatched);
    storageWatched.push(obj);
    localStorageAPI.save(key, storageWatched);
  }
}

export function addQueueBtn(key, obj) {
  let arrQueue = localStorage.getItem(key);
  // console.log(arrQueue);
  if (storageQueue.includes(obj)) {
    Notify.failure('we have alredy added that movie');
    return;
  } else if (arrQueue === null) {
    // console.dir(arrQueue);
    storageQueue.push(obj);
    // console.log(storageQueue);
    localStorageAPI.save(key, storageQueue);
  } else {
    storageQueue = JSON.parse(arrQueue);
    // console.log(storageQueue);
    storageQueue.push(obj);
    localStorageAPI.save(key, storageQueue);
  }
}
