import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "notiflix/dist/notiflix-3.2.5.min.css";

export const localStorageAPI = {
    save,
    load,
    pushMovie,
  };
  
  let watchedStorage = [];

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
        ? console.log('nothing')
        : JSON.parse(list);
    } catch (error) {
      Notify.failure("Local storage error");
    }
  }

  function pushMovie(value) {
    try {
      if (watchedStorage.includes(value)) {
        Notify.failure('We have already seen that movie');
        return;
      }
      watchedStorage.push(value);
      localStorage.setItem('watched', JSON.stringify(watchedStorage));
    } catch (error) {
      Notify.failure('Local storage error');
    }
  }