import { localStorageAPI } from './api/localStorageAPI';


export default function addWatched(id, obj) {
        localStorageAPI.save(id, obj);
}