import  markup  from "../src/js/templates/markupHomePage.hbs";
import  { apiHomePage } from "./js/themovieApi";

const homeGallary = document.querySelector('.gallery');



 apiHomePage().then(data=>{
homeGallary.innerHTML = markup(data.results);
 });