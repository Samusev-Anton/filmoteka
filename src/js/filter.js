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

const refs = {
  filterForm: document.querySelector('#filter-form'),
  sortForm: document.querySelector('#sortForm'),
  genreForm: document.querySelector('#genreForm'),
  yearForm: document.querySelector('#yearForm'),
  btnReset: document.querySelector('#btnResetFilter'),
};

const spinner = document.querySelector('.preloader');

if (refs.genreForm) {
  refs.genreForm.addEventListener('input', eventGenre);
};
if (refs.yearForm) {
  refs.yearForm.addEventListener('input', eventYear);
};
if (refs.sortForm) {
  refs.sortForm.addEventListener('input', eventSort);
};

if (refs.btnReset) {
  refs.btnReset.addEventListener('click', submitResetFilter);
};


 function moviesDataUpdate(data) {
  localStorage.setItem('moviesData', JSON.stringify(data.results));
}

const getSearchForm = async (page = '', query = '', genre = '', year = '', sort = '') => {
  let filters = {
    year: year !== '' && year !== 'start' ? `&primary_release_year=${year}` : '',
    genre: genre !== '' && genre !== 'start' ? `&with_genres=${genre}` : '',
    queryFetch: `&query=${query}`,
    sort: sort !== '' && sort !== 'start' ? `&sort_by=${sort}` : '',
    discover: `/trending`,
    week: `/week`,
  };
  if (query === '') {
    filters.queryFetch = '';
  }
  if (query !== '' && genre === '') {
    filters.discover = '/search';
    filters.week = '';
  }
  if (query === '' && genre !== '') {
    filters.discover = '/discover';
    filters.week = '';
  }
  if (query === '' && year !== '') {
    filters.discover = '/discover';
    filters.week = '';
  }
  let { data } = await axios.get(
    `${BASE_URL}${filters.discover}/movie${filters.week}?api_key=${API_KEY}${filters.genre}${filters.year}${filters.sort}&language=en-US${filters.queryFetch}&page=${page}`
  );
  localStorageAPI.save('moviesData', data.results);

  return data;
};

function submitResetFilter(evn) {
    spinner.classList.remove('done');
    evn.preventDefault();
    refs.filterForm[0].options.selectedIndex = 0;
    refs.filterForm[1].options.selectedIndex = 0;
    refs.filterForm[2].options.selectedIndex = 0;
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
        refs.homeGallery.innerHTML = markupSearchPage(data);
        moviesDataUpdate(data);
        localStorageAPI.save('total-pages', amountOfPages);
        spinner.classList.add('done');
    });
    localStorageAPI.save('page-pg', page);
}

function eventGenre(evn) {
  if (evn) {
    spinner.classList.remove('done');
    
    genre = evn.target.value;
    page = 1;
    localStorageAPI.save('page-pg', page);
    localStorageAPI.save('genre-pg', genre);
    getSearchForm(page, query, genre, year, sort).then(data => {
      refs.homeGallery.innerHTML = markupSearchPage(data);;
      
    
      localStorageAPI.save('total-pages', amountOfPages);
      spinner.classList.add('done');
    });
  }
}