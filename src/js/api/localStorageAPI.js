import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "notiflix/dist/notiflix-3.2.5.min.css";

export const localStorageAPI = {
  save,
  load,
  pushWatched,
  pushQueue,
};
  
  

  function save(key, value) {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      Notify.failure("Local storage error");
    }
  }
  
  function load(key) {
    try {
      const list = localStorage.getItem(key);
      return list === null
        ? undefined
        : JSON.parse(list);
    } catch (error) {
      Notify.failure("Local storage error");
    }
  }




  //=============================================
  //Add data to localstorage
  let watchedStorage = [];
  let queueStorage = [];

  function pushWatched(key, obj) {
    try {
       if (watchedStorage.includes(obj)) {
         Notify.failure('Yes, we know.');
         return;
       }
     
      watchedStorage.push(obj);
      localStorage.setItem(key, JSON.stringify(watchedStorage));
    } catch (error) {
      Notify.failure('Local storage error');
    }
  }

  function pushQueue(key, obj) {
    try {
      if (queueStorage.includes(obj)) {
        Notify.failure('We have already seen that movie');
        return;
      }
      queueStorage.push(obj);
      localStorage.setItem(key, JSON.stringify(queueStorage));
    } catch (error) {
      Notify.failure('Local storage error');
    }
  }

   