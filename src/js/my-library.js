import { localStorageAPI } from './api/localStorageAPI';

export default function addWatched(id, obj) {
  localStorageAPI.pushMovie(obj);
  
 }


//  listWatched = localStorageAPI.load('watched');
//  console.log(listWatched);
//  if (listWatched) {
//    markupLibrary(listWatched);
//  }