import markupHomePage from './templates/markupHomePage.hbs';
import { apiHomePage } from './themovieApi';
import { refs } from './refs';
import { getGenres, dataRevize } from './data/data-revize';

apiHomePage().then(data => {
  const allGenres = getGenres();
  //   console.log(allGenres);
  const films = data.results;
  //   console.log(films);
  const normalFilmData = dataRevize(films, allGenres);
  console.log(normalFilmData);
  refs.homeGallery.innerHTML = markupHomePage(normalFilmData);
});
