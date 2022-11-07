import { totalPages } from './themovieApi';
// console.log(totalPages);
import Pagination from 'tui-pagination';
import { apiHomePage } from "./themovieApi";
import { renderTrendingMovies } from './home-page';

const container = document.getElementById('pagination');
const options = {
  totalItems: 200,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
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
};
const pagination = new Pagination(container, options);

pagination.on('beforeMove', async evt => {

});



// const onPageClick = async event => {
//   const renderTrendingPage = await renderTrendingMovies(event.page);
//   scrollToNewPage();
//   return renderTrendingPage;
// };

// export const scrollToNewPage = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// };

// export const createPagination = () => {
// const container = document.getElementById('pagination');
// apiHomePage().then(movies => {
//   const pagination = new Pagination(container, {
//     totalItems: movies.total_results,
//     itemsPerPage: 20,
//     visiblePages: 5,
//     page: 1,
//     centerAlign: true,
//     firstItemClassName: 'tui-first-child',
//     lastItemClassName: 'tui-last-child',
//     usageStatistics: false,
//     template: {
//       page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//       currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//       moveButton:
//         '<a href="#" class="tui-page-btn tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//         '</a>',
//       disabledMoveButton:
//         '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
//         '<span class="tui-ico-{{type}}">{{type}}</span>' +
//         '</span>',
//       moreButton:
//         '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' + '<span>⋅⋅⋅</span>' + '</a>',
//     },
// });
// return pagination
// })
// .then(pagination => {
//   pagination.on('beforeMove', onPageClick);
// });
// }
