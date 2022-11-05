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

const refs = {
  filterForm: document.querySelector('#filter-form'),
  sortForm: document.querySelector('#sortForm'),
  genreForm: document.querySelector('#genreForm'),
  yearForm: document.querySelector('#yearForm'),
  btnReset: document.querySelector('#btnResetFilter'),
};

const getSearchForm = async (
  page = '',
  query = '',
  genre = '',
  year = '',
  sort = ''
) => {
  let f = {
    year: year !== '' && year !== 'start' ? `&primary_release_year=${year}` : '',
    genre: genre !== '' && genre !== 'start' ? `&with_genres=${genre}` : '',
    queryFetch: `&query=${query}`,
    sort: sort !== '' && sort !== 'start' ? `&sort_by=${sort}` : '',
    discover: `/trending`,
    week: `/week`,
  };
  if (query === '') {
    f.queryFetch = '';
  }
  if (query !== '' && genre === '') {
    f.discover = '/search';
    f.week = '';
  }
  if (query === '' && genre !== '') {
    f.discover = '/discover';
    f.week = '';
  }
  if (query === '' && year !== '') {
    f.discover = '/discover';
    f.week = '';
  }
  let { data } = await axios.get(
    `${f.discover}/movie${f.week}?api_key=${KEY}${f.genre}${f.year}${f.sort}&language=en-US${f.queryFetch}&page=${page}`
  );
  saveLs('moviesData', data.results);

  return data;
};
