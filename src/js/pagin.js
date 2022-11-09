import { totalPages } from './themovieApi';
// console.log(totalPages);
import Pagination from 'tui-pagination';
// import { apiHomePage } from "./themovieApi";
import { refs } from './refs';
import { renderTrendingMovies } from './home-page';
import { getGenres, dataRevize } from './data/data-revize';
import markupHomePage from './templates/markupHomePage.hbs';
import apiHomePage from './api/api-movie';

import {
  API_KEY,
  BASE_URL,
  TREND_URL,
  SEARCH_URL,
  ID_URL,
} from './api/api-parts';
const spinner = document.querySelector('.preloader');
// ----- POPULAR -----
const container = document.getElementById('pagination');
const optionsTrending = {
  totalItems: 20000,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
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

export const paginationPage = pagination.getCurrentPage();
console.log(paginationPage);

pagination.on('afterMove', function (event) {
  // console.log("currentPage", event.page);
spinner.classList.remove('done');
  apiHomePagePagin(event.page).then(data => {
    const allGenres = getGenres();
    const films = data.results;
    const normalFilmData = dataRevize(films, allGenres);
    refs.homeGallery.innerHTML = markupHomePage(normalFilmData);
    spinner.classList.add('done');
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
});

export async function apiHomePagePagin(page) {
  try {
    const responce = await fetch(
      `${TREND_URL}?api_key=${API_KEY}&page=${page}`
    );
    const data = await responce.json();
    // const totalPages = data.total_pages;
    return data;
  } catch (Error) {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
}

// ----- FILTER -----
export function paginationFilter(genre, year, sort, page) {
  const optionsFilter = {
    totalItems: JSON.parse(localStorage.getItem('moviesData')),
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
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

  const pagination = new Pagination(container, optionsFilter);
  pagination.on('afterMove', async function (event) {
    getSearchForm(genre, year, event.page, sort)
      .then(data => {
        markupSearchPage(data.results);
      })
      .catch(error => console.log(error));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ----- SEARCH -----
export function paginationSearch(inputData) {
  const optionsSearch = {
    totalItems: JSON.parse(localStorage.getItem('moviesData')),
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
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

  const pagination = new Pagination(container, optionsSearch);
  // pagination.movePageTo(1);
  pagination.on('afterMove', async function (event) {
    resetGallery();

    apiHomeSearch(inputData, event.page);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

export default pagination;

function resetGallery() {
  refs.homeGallery.innerHTML = '';
}
