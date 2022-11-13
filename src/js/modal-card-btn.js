import { Notify } from 'notiflix';
import { localStorageAPI } from './api/localStorageAPI';
import { statusLocalStorage } from './modal-card';

let storageJSON = [];
let storageSave = [];
let uniqueId;

export function checksForUniqueElement(key, obj) {
  storageJSON = localStorage.getItem(key);
  storageObj = JSON.parse(storageJSON);
  if (storageJSON !== null) {
    uniqueId = storageObj.filter(({ id }) => id === obj.id);
  }

  if (storageJSON === null) {
    return {
      localStorage: true,
      btnText: false,
    };
  } else if (uniqueId.length >= 1) {
    return {
      localStorage: false,
      btnText: true,
    };
  } else {
    return {
      localStorage: false,
      btnText: false,
    };
  }
}

export function addLocalStorage(key, obj, btnRef) {
  if (storageSave.includes(obj)) {
    errorNotify();
    return;
  } else
    if (
    statusLocalStorage.localStorage === true &&
    statusLocalStorage.btnText === false
  ) {
    recordingDataLocalStorage(key, obj, btnRef);
  } else if (
    statusLocalStorage.localStorage === false &&
    statusLocalStorage.btnText === true
  ) {
    returnDataLocalStorage(key, obj, btnRef);
  } else if (
    statusLocalStorage.localStorage === false &&
    statusLocalStorage.btnText === false
  ) {
    rewritesDataLocalStorage(key, obj, btnRef);
  }
}

function returnDataLocalStorage(key, obj, btnRef) {
  storageJSON = localStorage.getItem(key);
  storageObj = JSON.parse(storageJSON);
  storageSave = storageObj;
  localStorage.removeItem(key);
  localStorageAPI.save(key, storageSave);
  btnRef.innerText = 'ADDED TO LIBRARY';
  errorNotify();
}

function rewritesDataLocalStorage(key, obj, btnRef) {
  storageJSON = localStorage.getItem(key);
  storageObj = JSON.parse(storageJSON);
  storageSave = storageObj;
  storageSave.push(obj);
  localStorage.removeItem(key);
  localStorageAPI.save(key, storageSave);
  btnRef.innerText = 'ADDED TO LIBRARY';
}

function recordingDataLocalStorage(key, obj, btnRef) {
  storageJSON = localStorage.getItem(key);
  storageObj = JSON.parse(storageJSON);
  storageSave.push(obj);
  localStorageAPI.save(key, storageSave);
  btnRef.innerText = 'ADDED TO LIBRARY';
}

function errorNotify() {
  Notify.failure('we have alredy added that movie');
}
