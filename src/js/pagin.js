import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';
import { refs } from './refs';
import { getGenres, dataRevize } from './data/data-revize';
import markupHomePage from './templates/markupHomePage.hbs';
import { apiHomeSearch } from "./search-films";
import {
  API_KEY,
  BASE_URL,
  TREND_URL,
  SEARCH_URL,
  ID_URL,
} from './api/api-parts';

const container = document.getElementById('pagination');


// --------------- POPULAR ---------------
//pagination options for trending movies request 
const optionsTrending = {
  totalItems: 20000,
  itemsPerPage: 20,
  visibleResults: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn  pagination_button">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span>⋅⋅⋅</span>' +
      '</a>',
  },
};

const pagination = new Pagination(container, optionsTrending);

pagination.on('afterMove', event => {
  apiHomePagePagin(event.page).then(data => {
    const normalFilmData = dataRevize(data.results, getGenres());
    refs.homeGallery.innerHTML = markupHomePage(normalFilmData);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
});

export async function apiHomePagePagin(page) {
  try {
    const responce = await fetch(
      `${TREND_URL}?api_key=${API_KEY}&page=${page}`
    );
    const data = await responce.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}


//pagination options for movies request 
const options = {
  totalItems: 21,
  itemsPerPage: 20,
  visibleResults: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn  pagination_button">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
    '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span>⋅⋅⋅</span>' +
      '</a>',
  },
};

// --------------- FILTER ---------------
export function paginationFilter(genre, year, sort, page) {
  
  const pagination = new Pagination(container, options);

  pagination.on('afterMove', async event => {
    getSearchForm(genre, year, event.page, sort)
      .then(data => {
        markupSearchPage(data.results);
      })
      .catch(error => console.log(error));

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// --------------- SEARCH ---------------
export function paginationSearch(inputData) {
  const pagination = new Pagination(container, options);
  pagination.on('afterMove', async event => {
    apiHomeSearch(inputData, event.page);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

export default pagination;