import axios from 'axios';
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

const genreForm = document.querySelector('#genreForm');
const filterForm = document.querySelector('#filter-form');
const yearForm = document.querySelector('#yearForm');
const btnReset = document.querySelector('#btnResetFilter');
const spinner = document.querySelector('.preloader');
const sortForm = document.querySelector('#sortForm');

if (genreForm) {
  genreForm.addEventListener('input', eventGenre);
}

if (yearForm) {
  yearForm.addEventListener('input', eventYear);
}
if (sortForm) {
  sortForm.addEventListener('input', eventSort);
}

if (btnReset) {
  btnReset.addEventListener('click', submitResetFilter);
}

function moviesDataUpdate(data) {
  localStorage.setItem('moviesData', JSON.stringify(data.results));
}

//search year
const getSearchYear = async (page, year) => {
  let { data } = await axios.get(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&primary_release_year=${year}&page=${page}`
  );
  console.log(data);

  localStorageAPI.save('moviesData', data.results);

  return data;
};

//search sort
const getSearchSort = async (page, sort) => {
  let { data } = await axios.get(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${sort}&page=${page}`
  );
  console.log(data);

  localStorageAPI.save('moviesData', data.results);

  return data;
};

const getSearchGenre = async (page, genre) => {
  let { data } = await axios.get(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genre}&page=${page}`
  );
  console.log(data);

  localStorageAPI.save('moviesData', data.results);

  return data;
};

function eventYear(evn) {
  if (evn) {
    spinner.classList.remove('done');
    page = 1;
    localStorageAPI.save('page-pg', page);
    year = evn.target.value;
    console.log(year);
    localStorageAPI.save('year-pg', year);
    getSearchYear(page, year).then(data => {
      refs.homeGallery.innerHTML = markupSearchPage(data.results);
      if (data.total_pages > 500) {
        const amountOfPages = 500;
      } else {
        amountOfPages = data.total_pages;
      }
      spinner.classList.add('done');
    });
  }
}

function eventGenre(evn) {
  if (evn) {
    spinner.classList.remove('done');
    const genre = evn.target.value;
    console.log(genre);
    const page = 1;
    // query = '';
    // year = '';
    // sort = '';
    localStorageAPI.save('page-pg', page);
    localStorageAPI.save('genre-pg', genre);
    getSearchGenre(page, genre).then(data => {
      console.log(data);
      refs.homeGallery.innerHTML = markupSearchPage(data.results);
      if (data.total_pages > 500) {
        const amountOfPages = 500;
      } else {
        amountOfPages = data.total_pages;
      }
      localStorageAPI.save('total-pages', amountOfPages);
      spinner.classList.add('done');
    });
  }
}

function eventSort(evn) {
  if (evn) {
    spinner.classList.remove('done');
    page = 1;
    localStorageAPI.save('page-pg', page);
    sort = evn.target.value;
    console.log(sort);
    localStorageAPI.save('sort-pg', sort);
    getSearchSort(page, sort).then(data => {
      refs.homeGallery.innerHTML = markupSearchPage(data.results);
      if (data.total_pages > 500) {
        const amountOfPages = 500;
      } else {
        amountOfPages = data.total_pages;
      }

      localStorageAPI.save('total-pages', amountOfPages);
      spinner.classList.add('done');
    });
  }
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
