import { Notify } from 'notiflix';
import { localStorageAPI } from './api/localStorageAPI';
import { statusLocalStorage } from './modal-card';

let storageJSON = [];
let storageSave = [];
let storageObj = [];
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
  if (
    statusLocalStorage.localStorage === false &&
    statusLocalStorage.btnText === true
  ) {
    removeDataLocalStorage(key, obj, btnRef);
    console.log('removeDataLocalStorage');
  } else {
    rewritesDataLocalStorage(key, obj, btnRef);
    console.log('rewritesDataLocalStorage');
  }
  // if (storageSave.includes(obj)) {
  //   removeDataLocalStorage(key, obj, btnRef);
  //   console.log('removeDataLocalStorage');
  //   console.log(storageSave);
  //   console.log(obj);
  // } else
  //   if (
  //   statusLocalStorage.localStorage === true &&
  //   statusLocalStorage.btnText === false
  // ) {
  //   recordingDataLocalStorage(key, obj, btnRef);
  //   console.log('recordingDataLocalStorage');
  //   } 
  //   else
  //   if (
  // (statusLocalStorage.localStorage === false &&
  //   statusLocalStorage.btnText === false) ||
  // (statusLocalStorage.localStorage === true &&
  //   statusLocalStorage.btnText === true)
  //   )  
}

function removeDataLocalStorage(key, obj, btnRef) {  
  console.log(statusLocalStorage.localStorage);
  console.log(statusLocalStorage.btnText);
  storageJSON = localStorage.getItem(key);
  storageObj = JSON.parse(storageJSON);
  let objId = obj.id;
  console.log(obj.id);

  storageSave.forEach((objStorage, index) => {
    if (objStorage.id === objId) {
      return storageObj.splice(index, 1);
      // localStorage.removeItem(key);
      // localStorageAPI.save(key, storageObj);
    }
    return storageObj;
  });
  localStorage.removeItem(key);
  localStorageAPI.save(key, storageObj);
  btnRef.innerText = `ADD TO ${key}`;  
  statusLocalStorage.localStorage = true;
  console.log(statusLocalStorage.localStorage);
  statusLocalStorage.btnText = false;
  console.log(statusLocalStorage.btnText);
  // errorNotify();
}

function rewritesDataLocalStorage(key, obj, btnRef) {
  console.log(statusLocalStorage.localStorage);
  console.log(statusLocalStorage.btnText);
  storageJSON = localStorage.getItem(key);
  storageObj = JSON.parse(storageJSON);
  storageSave = storageObj;
  console.log(storageSave);
  if (storageSave === null) {
    storageSave = []
  }
  storageSave.push(obj);
  console.log(storageSave);
  localStorage.removeItem(key);
  localStorageAPI.save(key, storageSave);
  btnRef.innerText = `REMOVE FROM ${key}`;  
  statusLocalStorage.localStorage = false;
  console.log(statusLocalStorage.localStorage);
  statusLocalStorage.btnText = true;
  console.log(statusLocalStorage.btnText);
}

function recordingDataLocalStorage(key, obj, btnRef) {
  // storageJSON = localStorage.getItem(key);
  // storageObj = JSON.parse(storageJSON);
  console.log(statusLocalStorage.btnText);
  console.log(statusLocalStorage.localStorage);
  storageSave = [];
  storageSave.push(obj);
  localStorageAPI.save(key, storageSave);
  btnRef.innerText = `REMOVE FROM ${key}`;
  statusLocalStorage.btnText = true;
  console.log(statusLocalStorage.btnText);
  statusLocalStorage.localStorage = false;
  console.log(statusLocalStorage.localStorage);
}

function errorNotify() {
  Notify.failure('we have alredy added that movie');
}
