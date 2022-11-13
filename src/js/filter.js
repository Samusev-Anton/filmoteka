// import axios from 'axios';
import { getGenres, dataRevize } from './data/data-revize';
// import { API_KEY, BASE_URL } from './api/api-parts';
import { refs } from './refs';
import { localStorageAPI } from './api/localStorageAPI';
import markupSearchPage from '../js/templates/markupHomePage.hbs';
import { apiHomePage, getSearch } from './themovieApi';
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
  btnSearch[0].options.selectedIndex = 0;
  btnSearch[1].options.selectedIndex = 0;
  btnSearch[2].options.selectedIndex = 0;
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
    refs.sticker.textContent = 'SEARCHED FILMS';
  });

  //   console.log(genre);
  //   console.log(year);
  //   console.log(sort);
}

function moviesDataUpdate(data) {
  localStorage.setItem('moviesData', JSON.stringify(data.results));
}

let genre = '';
let year = '';
let sort = '';
let page = 1;

function submitResetFilter(evn) {
  spinner.classList.remove('done');
  evn.preventDefault();
  btnSearch[0].options.selectedIndex = 0;
  btnSearch[1].options.selectedIndex = 0;
  btnSearch[2].options.selectedIndex = 0;
  localStorageAPI.save('genre-pg', genre);
  localStorageAPI.save('year-pg', year);
  localStorageAPI.save('sort-pg', sort);
  localStorageAPI.save('page-pg', page);

  apiHomePage(page, year, genre, sort).then(data => {
    moviesDataUpdate(data);
    let amountOfPages = data.total_pages;
    localStorageAPI.save('total-pages', amountOfPages);
    const allGenres = getGenres();
    const films = data.results;
    const normalFilmData = dataRevize(films, allGenres);
    refs.pagination.classList.remove('visually-hidden');
    refs.homeGallery.innerHTML = markupSearchPage(normalFilmData);
    localStorageAPI.save('query-pg', inputData);

    spinner.classList.add('done');
  });
  localStorageAPI.save('page-pg', page);
  refs.sticker.textContent = 'POPULAR MOVIES';
}

// commit
