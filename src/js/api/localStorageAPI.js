import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "notiflix/dist/notiflix-3.2.5.min.css";

export const localStorageAPI = {
    save,
    load,
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
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? {watched: [], queue: []} : JSON.parse(serializedState);
    } catch (error) {
      Notify.failure("Local storage error");
    }
  }