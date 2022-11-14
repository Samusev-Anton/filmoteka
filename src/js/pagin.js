import Pagination from 'tui-pagination';
import { refs } from './refs';
import { getGenres, dataRevize } from './data/data-revize';
import markupHomePage from './templates/markupHomePage.hbs';
import markupSearchPage from '../js/templates/markupHomePage.hbs';
import { localStorageAPI } from './api/localStorageAPI';
// import { getSearch } from "./filter";
import { apiHomeSearch, getSearch } from './themovieApi';
import {
  API_KEY,
  BASE_URL,
  TREND_URL,
  SEARCH_URL,
  ID_URL,
} from './api/api-parts';

const spinner = document.querySelector('.preloader');
const container = document.getElementById('pagination');

// //pagination options for popular movies
// const optionsTrending = {
//   totalItems: 20000,
//   itemsPerPage: 20,
//   visiblePages: window.screen.width <= 450 ? 3 : 7,
//   page: 1,
//   centerAlign: true,
//   template: {
//     page: '<a href="#" class="tui-page-btn  pagination_button">{{page}}</a>',
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
// };

// //pagination options for movies
// const options = {
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
// };

// // ------------ POPULAR ------------
// const pagination = new Pagination(container, optionsTrending);

// pagination.on('afterMove', event => {
//   spinner.classList.remove('done');
//   apiHomePagePagin(event.page).then(data => {
//     const normalFilmData = dataRevize(data.results, getGenres());
//   // console.log("pagin.pagination.on('afterMove'");

//   // let search_query = localStorageAPI.load('query-pg');

//   // let genre = localStorageAPI.load('genre-pg');
//   // let year = localStorageAPI.load('year-pg');
//   // let sort = localStorageAPI.load('sort-pg');

//   // spinner.classList.remove('done');
//   //for search by query
//   // apiHomeSearch(search_query, event.page).then(data => {
//   //for search by query
//   // const films = data.results;

//   // for search by filter
//   // getSearch(event.page, year, genre, sort).then(data => {
//   //   // for search by filter
//   //   const films = data.data.results;

//   //   const allGenres = getGenres();
//   //   const normalFilmData = dataRevize(films, allGenres);
//   //   normalFilmData.forEach(element => {
//   //     if (element.genre_ids.length > 3) {
//   //       element.genres.splice(2, 2, { name: 'Other' });
//   //     }
//   //   });
//     refs.homeGallery.innerHTML = markupHomePage(normalFilmData);
//     spinner.classList.add('done');

//     // localStorageAPI.save('page-pg', event.page);

//     // refs.sticker.textContent = 'SEARCHED FILMS';
//   });

//   windowScroll();
// });

// export async function apiHomePagePagin(totalPages) {
//   try {
//     const responce = await fetch(
//       `${TREND_URL}?api_key=${API_KEY}&page=${totalPages}`
//     );
//     const data = await responce.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// // ------------ SEARCH ------------
// export function paginationSearch(inputData) {
//   const pagination = new Pagination(container, options);
//     pagination.on('afterMove', async event => {
//     apiHomeSearch(inputData, event.page)
//     .then(data => {
//       markupSearchPage(data.results);
//     })
//     .catch(error => console.log(error));;
//     windowScroll();
//     });
//   }


// // ------------ FILTER ------------
// export function paginationFilter(page, year, genre, sort) {
// const pagination = new Pagination(container, options);
//     pagination.on('afterMove', async event => {
//       getSearch(event.page, year, genre, sort)
//       .then(data => {
//         markupSearchPage(data.data.results);
//       })
//       .catch(error => console.log(error));;
//       windowScroll()
//   });
// }


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
        spinner.classList.add('done');
      })
    } else if (paginationSettings.searchType === 'search') {
      apiHomeSearch(paginationSettings.pagination.inputData, page).then(data => {
        refs.homeGallery.innerHTML = markupSearchPage(dataRevize(data.results, getGenres()));
        spinner.classList.add('done');
      })
    }
    else if (paginationSettings.searchType === 'filter') {
      getSearch(page, paginationSettings.pagination.year, paginationSettings.pagination.genre, paginationSettings.pagination.sort).then(data => {
        const allGenres = getGenres();
        // console.log(allGenres);
        const films = data.data.results;
        // console.log(films);

        const normalFilmData = dataRevize(films, allGenres);
        normalFilmData.forEach(element => {
          if (element.genre_ids.length > 3) {
            element.genres.splice(2, 2, { name: 'Other' });
          }
        });

        refs.homeGallery.innerHTML = markupSearchPage(normalFilmData);
        spinner.classList.add('done');
    })
    };
    // spinner.classList.add('done');
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

