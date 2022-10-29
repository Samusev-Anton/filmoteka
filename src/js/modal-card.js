import  { apiModalDetails } from "./themovieApi";
import  markupModal  from "../js/templates/markupModal.hbs";

const filmBox = document.querySelector('.film-box');



apiModalDetails().then(resp=>{
    // console.log(resp);
    filmBox.innerHTML = markupModal(resp);
     });;
