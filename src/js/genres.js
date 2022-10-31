import { takeGenresList } from './themovieApi';
let genres = [];

takeGenresList().then(data => {
  genres = data.genres;
  console.log(genres);
});
