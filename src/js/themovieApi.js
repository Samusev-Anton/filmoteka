// API Key (v3 auth)=27a76f0869afd59eafccef7d6d986c20

// Example API Request
// https://api.themoviedb.org/3/movie/550?api_key=27a76f0869afd59eafccef7d6d986c20

// API Read Access Token (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2E3NmYwODY5YWZkNTllYWZjY2VmN2Q2ZDk4NmMyMCIsInN1YiI6IjYzNWFjODY2MTUxMWFhMDA3ZTlkMjA0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u4oo3dqnEhbq4-mU65_77HUxgSjunDdlP98tEZ8BJ8w

import {
  API_KEY,
  BASE_URL,
  TREND_URL,
  SEARCH_URL,
  ID_URL,
} from './api/api-parts';

import { inputData } from './search-films';
let page = 1;
let totalPages = 0;

export async function apiHomePage() {
  try {
    const responce = await fetch(
      `${TREND_URL}?api_key=${API_KEY}&page=${page}`
    );
    const data = await responce.json();
    totalPages = data.total_pages;
    // console.log(totalPages);
    return data;
  } catch (Error) {
    //   Notiflix.Notify.failure(
    //     'Sorry, there are no images matching your search query. Please try again.'
    //   );
  }
}

export async function apiHomeSearch(inputData, page) {
  try {
    const responce = await fetch(
      `${SEARCH_URL}?api_key=${API_KEY}&query=${inputData}&language=en-US&page=1&include_adult=false&page=${page}`
    );
    const data = await responce.json();
    //   console.log(data);
    totalPages = data.total_pages;
    console.log(totalPages);

    return data;
  } catch (Error) {
    //   Notiflix.Notify.failure(
    //     'Sorry, there are no images matching your search query. Please try again.'
    //   );
  }
}

export async function apiModalDetails(movieId) {
  try {
    const responce = await fetch(
      `${ID_URL}/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    const resp = await responce.json();
    resp.vote_average = Number(resp.vote_average.toFixed(1));
    resp.popularity = Number(resp.popularity.toFixed(1));
    // console.log(resp);
    return resp;
  } catch (Error) {
    //   Notiflix.Notify.failure(
    //     'Sorry, there are no images matching your search query. Please try again.'
    //   );
  }
}

export async function takeGenresList() {
  try {
    const responce = await fetch(
      `${BASE_URL}/genre/movie/list?api_key=${KEY}&language=en-US`
    );
    const data = await responce.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// export { totalPages };

export async function apiMovieDetails(movieId) {
  try {
    const responce = await fetch(
      `${ID_URL}${movieId}/videos?api_key=${API_KEY}&language=en-US`
    );
    const resp = await responce.json();
    // console.log('resp :>> ', resp);
    // console.log(resp.results[0].key);
    return resp;
  } catch (Error) {
    //   Notiflix.Notify.failure(
    //     'Sorry, there are no trailer for this movie on Youtube. Please try again.'
    //   );
  }
}
