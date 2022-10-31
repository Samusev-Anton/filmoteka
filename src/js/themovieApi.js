// API Key (v3 auth)=27a76f0869afd59eafccef7d6d986c20

// Example API Request
// https://api.themoviedb.org/3/movie/550?api_key=27a76f0869afd59eafccef7d6d986c20

// API Read Access Token (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2E3NmYwODY5YWZkNTllYWZjY2VmN2Q2ZDk4NmMyMCIsInN1YiI6IjYzNWFjODY2MTUxMWFhMDA3ZTlkMjA0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u4oo3dqnEhbq4-mU65_77HUxgSjunDdlP98tEZ8BJ8w
import { inputData } from './search-films';
let currentPage = 1;
let totalPages = 0;

const KEY = '27a76f0869afd59eafccef7d6d986c20';
const URL = 'https://api.themoviedb.org/3';

export async function apiHomePage() {
  try {
    const responce = await fetch(
      `${URL}/trending/movie/week?api_key=${KEY}&page=${currentPage}`
    );
    const data = await responce.json();
    totalPages = data.total_pages;
    console.log(totalPages);
    return data;
  } catch (Error) {
    //   Notiflix.Notify.failure(
    //     'Sorry, there are no images matching your search query. Please try again.'
    //   );
  }
}

export async function apiHomeSearch() {
  try {
    const responce = await fetch(
      `${URL}/search/movie?api_key=${KEY}&query=${inputData}&language=en-US&page=1&include_adult=false&page=${currentPage}`
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

export async function apiModalDetails() {
  try {
    const responce = await fetch(
      `${URL}/movie/436270?api_key=${KEY}&language=en-US`
    );
    const resp = await responce.json();
    //   console.log(resp);
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
      `${URL}/genre/movie/list?api_key=${KEY}&language=en-US`
    );
    const data = await responce.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// export { totalPages };
