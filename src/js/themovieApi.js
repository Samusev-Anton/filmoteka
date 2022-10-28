// API Key (v3 auth)=27a76f0869afd59eafccef7d6d986c20

// Example API Request
// https://api.themoviedb.org/3/movie/550?api_key=27a76f0869afd59eafccef7d6d986c20


// API Read Access Token (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2E3NmYwODY5YWZkNTllYWZjY2VmN2Q2ZDk4NmMyMCIsInN1YiI6IjYzNWFjODY2MTUxMWFhMDA3ZTlkMjA0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u4oo3dqnEhbq4-mU65_77HUxgSjunDdlP98tEZ8BJ8w

const KEY='27a76f0869afd59eafccef7d6d986c20';
const URL='https://api.themoviedb.org/3'

 export async function apiHomePage() {
    try {
      const responce = await fetch(
        `${URL}/trending/movie/week?api_key=${KEY}`
      );
      const data = await responce.json();
      console.log(data);
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
        `${URL}/search/movie?api_key=${KEY}&query=world&language=en-US&page=1&include_adult=false`
      );
      const data = await responce.json();
      console.log(data);
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
        `${URL}/movie/507086?api_key=${KEY}&language=en-US`
      );
      const data = await responce.json();
      console.log(data);
      return data;
    } catch (Error) {
    //   Notiflix.Notify.failure(
    //     'Sorry, there are no images matching your search query. Please try again.'
    //   );
    }
 }
