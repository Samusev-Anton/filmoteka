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
};

if (yearForm) {
    yearForm.addEventListener('input', eventYear);
};
if (sortForm) {
    sortForm.addEventListener('input', eventSort);
};

if (btnReset) {
    btnReset.addEventListener('click', submitResetFilter);
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
    
function eventGenre(evn) {
  if (evn) {
    spinner.classList.remove('done');
    genre = evn.target.value;
    page = 1;
    // query = '';
    // year = '';
    // sort = '';
    localStorageAPI.save('page-pg', page);
    localStorageAPI.save('genre-pg', genre);
    getSearchForm(page, genre).then(data => {
    refs.homeGallery.innerHTML = markupSearchPage(data);
        if (data.total_pages > 500) {
            amountOfPages = 500;
        } else {
            amountOfPages = data.total_pages;
        }
        localStorageAPI.save('total-pages', amountOfPages);
        spinner.classList.add('done');
    });
    }
}

function eventYear(evn) {
    if (evn) {
        spinner.classList.remove('done');
        page = 1;
        query = '';
        localStorageAPI.save('page-pg', page);
        year = evn.target.value;
        localStorageAPI.save('year-pg', year);
        getSearchForm(page,year).then(data => {
            refs.homeGallery.innerHTML = markupSearchPage(data);
            if (data.total_pages > 500) {
                amountOfPages = 500;
            } else {
                amountOfPages = data.total_pages;
            }
            spinner.classList.add('done');
            if (query == '') {
                localStorageAPI.save('total-pages', amountOfPages);
            }
        });
    }
}

function eventSort(evn) {
    if (evn) {
        spinner.classList.remove('done');
        page = 1;
        query = '';
        year = '';
        genre = '';
        localStorageAPI.save('page-pg', page);
        sort = evn.target.value;
        localStorageAPI.save('sort-pg', sort);
        getSearchForm(page,sort).then(data => {
            refs.homeGallery.innerHTML = markupSearchPage(data);
            if (data.total_pages > 500) {
                amountOfPages = 500;
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
        refs.homeGallery.innerHTML = markupSearchPage(data);
        moviesDataUpdate(data);
        localStorageAPI.save('total-pages', amountOfPages);
        spinner.classList.add('done');
    });
    localStorageAPI.save('page-pg', page);
}


// commit