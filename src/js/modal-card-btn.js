import { localStorageAPI } from './api/localStorageAPI';
import { statusLocalStorageW, statusLocalStorageQ } from './modal-card';

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
    (statusLocalStorageW.localStorage === false &&
      statusLocalStorageW.btnText === true) ||
    (statusLocalStorageQ.localStorage === false &&
      statusLocalStorageQ.btnText === true)
  ) {
    removeDataLocalStorage(key, obj, btnRef);
  } else {
    rewritesDataLocalStorage(key, obj, btnRef);
  }
}

function removeDataLocalStorage(key, obj, btnRef) {  
  storageJSON = localStorage.getItem(key);
  storageObj = JSON.parse(storageJSON);
  let objId = obj.id;

  storageSave.forEach((objStorage, index) => {
    if (objStorage.id === objId) {
      return storageObj.splice(index, 1);
    }
    return storageObj;
  });

  localStorage.removeItem(key);
  localStorageAPI.save(key, storageObj);
  btnRef.innerText = `ADD TO ${key}`;  
  statusLocalStorageW.localStorage = true;
  statusLocalStorageQ.localStorage = true;  
  statusLocalStorageW.btnText = false;
  statusLocalStorageQ.btnText = false;  
}

function rewritesDataLocalStorage(key, obj, btnRef) {
  storageJSON = localStorage.getItem(key);
  storageObj = JSON.parse(storageJSON);
  storageSave = storageObj;  
  if (storageSave === null) {
    storageSave = []
  }
  storageSave.push(obj);  
  localStorage.removeItem(key);
  localStorageAPI.save(key, storageSave);
  btnRef.innerText = `REMOVE FROM ${key}`;  
  statusLocalStorageW.localStorage = false;
  statusLocalStorageW.btnText = true;
  statusLocalStorageQ.localStorage = false;
  statusLocalStorageQ.btnText = true;  
}