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
import { apiHomeSearch } from './themovieApi';
import { inputData } from './search-films';
import pagination from './pagin';

const btnReset = document.querySelector('#btnResetFilter');
const spinner = document.querySelector('.preloader');

btnReset.addEventListener('click', submitResetFilter);
//  получить данные со всей формы
const btnSearch = document.querySelector('#filter-form');

btnSearch.addEventListener('submit', onSearchSubmit);
function onSearchSubmit(evt) {
  spinner.classList.remove('done');
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
    localStorageAPI.save('genre-pg', genre);
    localStorageAPI.save('year-pg', year);
    localStorageAPI.save('sort-pg', sort);
    localStorageAPI.save('page-pg', page);
    spinner.classList.add('done');

    refs.homeGallery.innerHTML = markupSearchPage(normalFilmData);

    //pagination
    //reset results
    pagination.reset(data.data.results);
    //set total results of filtered movies
    pagination.setTotalItems(data.data.total_results);
    console.log('Total pages: ', data.data.total_pages);
    //reset pagination
    pagination.reset();
  });

  //   console.log(genre);
  //   console.log(year);
  //   console.log(sort);
}

export const getSearch = async (page, year, genre, sort) => {
  let data = {};
  // if (year && genre && sort) {
  data = await axios.get(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&primary_release_year=${year}&with_genres=${genre}&sort_by=${sort}&page=${page}`
  );
  // } else if (year && genre && sort === null) {
  //   data = await axios.get(
  //     `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&primary_release_year=${year}&with_genres=${genre}&page=${page}`
  //   );
  // } else if (year && sort && genre === null) {
  //   data = await axios.get(
  //     `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&primary_release_year=${year}&sort_by=${sort}&page=${page}`
  //   );
  // } else if (sort && genre && year===0) {
  //   data = await axios.get(
  //     `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genre}&sort_by=${sort}&page=${page}`
  //   );
  // } else if (genre) {
  //   data = await axios.get(
  //     `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genre}&page=${page}`
  //   );
  // } else if (year) {
  //   data = await axios.get(
  //     `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&primary_release_year=${year}&page=${page}`
  //   );
  // } else {
  //   data = await axios.get(
  //     `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sort}&page=${page}`
  //   );
  // }

  //   console.log(data.data.results);

  localStorageAPI.save('moviesData', data.results);

  return data;
};

function moviesDataUpdate(data) {
  localStorage.setItem('moviesData', JSON.stringify(data.results));
}

function submitResetFilter(evn) {
  spinner.classList.remove('done');
  evn.preventDefault();
  btnSearch[0].options.selectedIndex = 0;
  btnSearch[1].options.selectedIndex = 0;
  btnSearch[2].options.selectedIndex = 0;
  genre = '';
  year = '';
  sort = '';
  page = 1;
  localStorageAPI.save('genre-pg', genre);
  localStorageAPI.save('year-pg', year);
  localStorageAPI.save('sort-pg', sort);
  localStorageAPI.save('page-pg', page);

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
    moviesDataUpdate(data);
    spinner.classList.add('done');
  });
  localStorageAPI.save('page-pg', page);
}

// commit
