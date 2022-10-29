import { apiHomeSearch } from "./themovieApi";
import  markupSearchPage  from "../js/templates/markupHomePage.hbs";
import { homeGallary } from "../index";
// console.log(homeGallary);


const form = document.querySelector('.header__form');
console.log(form);
let inputData = '';
form.addEventListener('submit', onButtonClick);

// const conteiner = document.querySelector('.gallery');




function onButtonClick(evt) {
    evt.preventDefault();
    page = 1;
    inputData = evt.target.elements.serch_film.value.trim().toLowerCase();
    // if (inputData.length < 1) {
    //   Notiflix.Notify.failure('The field must not be empty');
    //   return;
    // }
  
    apiHomeSearch().then(data => {
    //   if (data.hits.length === 0) {
    //     homeGallary.innerHTML = '';
    //     // Notiflix.Notify.failure(
    //     //   'Sorry, there are no images matching your search query. Please try again.'
    //     // );
    //     return;
    //   }
      homeGallary.innerHTML = markupSearchPage(data.results);
      });
  }

  export {inputData}
  