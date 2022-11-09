import axios from 'axios';
import { getGenres, dataRevize } from './data/data-revize';
import {
  API_KEY,
  BASE_URL,
  TREND_URL,
  SEARCH_URL,
  ID_URL,
} from './api/api-parts';
import { refs } from './refs';
import { localStorageAPI } from './api/localStorageAPI';
import markupSearchPage from '../js/templates/markupHomePage.hbs';

const btnReset = document.querySelector('#btnResetFilter');

//  получить данные со всей формы
const btnSearch = document.querySelector('#filter-form');

btnSearch.addEventListener('submit', onSearchSubmit);
function onSearchSubmit(evt) {
  evt.preventDefault();
  let page = 1;
  const genre = evt.currentTarget.elements.genreForm.value;
  const year = evt.currentTarget.elements.yearForm.value;
  const sort = evt.currentTarget.elements.sortForm.value;
  getSearch(page, year, genre, sort).then(data => {
    const allGenres = getGenres();
    console.log(allGenres);
    const films = data.data.results;
    console.log(films);
    const normalFilmData = dataRevize(films, allGenres);
    normalFilmData.forEach(element => {
      if (element.genre_ids.length > 3) {
        element.genres.splice(2, 2, { name: 'Other' });
      }
    });
    refs.homeGallery.innerHTML = markupSearchPage(normalFilmData);
  });

  //   console.log(genre);
  //   console.log(year);
  //   console.log(sort);
}

const getSearch = async (page, year, genre, sort) => {
  let data = {};
  if (year) {
    data = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&primary_release_year=${year}&page=${page}`
    );
  }
  if (year && genre) {
    data = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&primary_release_year=${year}&with_genres=${genre}&page=${page}`
    );
  } else {
    data = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genre}&page=${page}`
    );
  }
  //   console.log(data.data.results);

  localStorageAPI.save('moviesData', data.results);

  return data;
};

//

const spinner = document.querySelector('.preloader');

function moviesDataUpdate(data) {
  localStorage.setItem('moviesData', JSON.stringify(data.results));
}

function submitResetFilter(evn) {
  spinner.classList.remove('done');
  evn.preventDefault();
  filterForm[0].options.selectedIndex = 0;
  filterForm[1].options.selectedIndex = 0;
  filterForm[2].options.selectedIndex = 0;
  genre = '';
  year = '';
  sort = '';
  page = 1;
  if (query === '') {
    amountOfPages = 1000;
  } else {
    amountOfPages = localStorageAPI.load('total-pages');
  }
  localStorageAPI.save('genre-pg', genre);
  localStorageAPI.save('year-pg', year);
  localStorageAPI.save('sort-pg', sort);
  localStorageAPI.save('page-pg', page);
  localStorageAPI.save('total-pages', amountOfPages);
  getSearchForm(page, query, genre, year, sort).then(data => {
    refs.homeGallery.innerHTML = markupSearchPage(data.results);
    moviesDataUpdate(data.results);
    localStorageAPI.save('total-pages', amountOfPages);
    spinner.classList.add('done');
  });
  localStorageAPI.save('page-pg', page);
}

// commit
