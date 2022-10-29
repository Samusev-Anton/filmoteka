import  markupHomePage  from "../src/js/templates/markupHomePage.hbs";
import  { apiHomePage } from "./js/themovieApi";
// import  { apiHomeSearch } from "./js/themovieApi";



export const homeGallary = document.querySelector('.gallery');
// export { homeGallary }



 apiHomePage().then(data => {
homeGallary.innerHTML = markupHomePage(data.results);
 })

 