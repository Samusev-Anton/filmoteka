import Pagination from 'tui-pagination';
import { refs } from './refs';
import { getGenres, dataRevize } from './data/data-revize';
import markupHomePage from './templates/markupHomePage.hbs';
import markupSearchPage from '../js/templates/markupHomePage.hbs';
// import { getSearch } from "./filter";
import { apiHomePage, apiHomeSearch, getSearch } from './themovieApi';
import {
  API_KEY,
  BASE_URL,
  TREND_URL,
  SEARCH_URL,
  ID_URL,
} from './api/api-parts';

const spinner = document.querySelector('.preloader');
const container = document.getElementById('pagination');

// export const paginationType = null;

// //pagination options for movies
// export const options = {
//   totalItems: 20,
//   itemsPerPage: 20,
//   visiblePages: window.screen.width <= 450 ? 3 : 7,
//   page: 1,
//   centerAlign: true,
//   template: {
//     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//     currentPage:
//       '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//     moveButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</span>',
//     moreButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
//       '<span>⋅⋅⋅</span>' +
//       '</a>',
//   },
// }

// export const pagination = new Pagination(container, options);

// pagination.on('beforeMove', event => {
//   spinner.classList.remove('done');
//   if(apiHomePage) {
//     apiHomePage(event.page).then(data => {
//       options.totalItems = 20000;
//       refs.homeGallery.innerHTML = markupHomePage(dataRevize(data.results, getGenres()));
//       spinner.classList.add('done');
//     });
//     windowScroll();
//   } else if (getSearch) {
//       getSearch(event.page, year, genre, sort).then(data => {
//         refs.homeGallery.innerHTML =  markupSearchPage(data.data.results);
//       })
//       windowScroll()
//   } else {
//     apiHomeSearch(inputData, event.page).then(data => {
//       refs.homeGallery.innerHTML = markupSearchPage(data.results, getGenres());
//     })
//     windowScroll();
//   } 
// });
export const paginationSettings = {
  startPage: 1,
  searchType: null,
  pagination: null,
  totalItemsHome: null,
};

export const initPagination = ({ totalItems }) => {
  const options = {
    page: 1,
    totalItems,
    itemsPerPage: 20,
    visiblePages: window.screen.width <= 450 ? 3 : 7,
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
  }
  const pagination = new Pagination(container, options);
  paginationSettings.pagination = pagination;
  
  pagination.on('afterMove', async ({ page }) => {
    spinner.classList.remove('done');
    if (paginationSettings.searchType === 'popular') {
      apiHomePagePagin(page).then(data => {
      refs.homeGallery.innerHTML = markupHomePage(dataRevize(data.results, getGenres()));
      })
    } else if (paginationSettings.searchType === 'search') {
      apiHomeSearch(paginationSettings.pagination.inputData, page).then(data => {
      refs.homeGallery.innerHTML = markupSearchPage(dataRevize(data.results, getGenres()));
      })
    }
    // else {
    //   getSearch(page, paginationSettings.pagination.year, paginationSettings.pagination.genre, paginationSettings.pagination.sort).then(data => {
    //   refs.homeGallery.innerHTML = markupSearchPage(data.data.results);
    // })
    // };
    spinner.classList.add('done');
    windowScroll();
});
return pagination;
}




export async function apiHomePagePagin(totalPages) {
  try {
    const responce = await fetch(
      `${TREND_URL}?api_key=${API_KEY}&page=${totalPages}`
    );
    const data = await responce.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// click on the pagination button => return to the top
function windowScroll() {
  return window.scrollTo({ top: 0, behavior: 'smooth' });
}

