// import markupHomePage from './templates/markupHomePage.hbs';
// import { apiHomePage } from './themovieApi';
// import { refs } from './refs';
// import { getGenres, dataRevize } from './data/data-revize';

// apiHomePage().then(data => {
//   const allGenres = getGenres();
//   //   console.log(allGenres);
//   const films = data.results;
//   //   console.log(films);
//   const normalFilmData = dataRevize(films, allGenres);
//   console.log(normalFilmData);
//   refs.homeGallery.innerHTML = markupHomePage(normalFilmData);
// });

import markupHomePage from './templates/markupHomePage.hbs';
import { apiHomePage } from './themovieApi';
import { refs } from './refs';
import { getGenres, dataRevize } from './data/data-revize';
import { trailerBtnVisible } from './trailer';
import { initPagination, paginationSettings} from "./pagin";

apiHomePage()
.then(data => {
  const { total_results: totalItems } = data;
  initPagination({
    totalItems,
  });
  paginationSettings.searchType = 'popular';
  paginationSettings.totalItemsHome = totalItems;

  const allGenres = getGenres();
  //   console.log(allGenres);
  const films = data.results;
  //   console.log(films);
  const normalFilmData = dataRevize(films, allGenres);
  normalFilmData.forEach(element => {
    if (element.genre_ids.length > 3) {
      element.genres.splice(2, 2, { name: 'Other' });
    }
  });
  refs.homeGallery.innerHTML = markupHomePage(normalFilmData);
  trailerBtnVisible();
});

