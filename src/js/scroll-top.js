// import debounce from 'debounce';


const upScroll ={ el:document.querySelector('#scrollup'),
  show(){this.el.classList.remove('visually-hidden-scroll');
},
hide(){
  this.el.classList.add('visually-hidden-scroll');
},
addEventListener(){
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    scrollY > 500 ? this.show() : this.hide();
  });
  document.querySelector('#scrollup').onclick = () =>{
    window.scrollTo({
      top:0,
      left:0,
      behavior: 'smooth'
    });
  }
}
}
 upScroll.addEventListener();


// const rootElement = document.documentElement;

// function scrollToTop() {
//     // Scroll to top logic
//     rootElement.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   }
//   upScroll.addEventListener("click", scrollToTop);


// scrollWindow = () => {
//     // window.addEventListener('DOMContentLoaded', () => {
//     //
//     //   this.refs.upScroll.classList.add('visually-hidden');
//     // });
//     this.upScroll.addEventListener('click', () => {
//       window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//       });
//     });

//     window.addEventListener(
//       'scroll',
//       debounce(() => {
//         scrollY > 200
//           ? this.refs.upScroll.classList.remove('visually-hidden-scroll')
//           : this.refs.upScroll.classList.add('visually-hidden-scroll');
//       }, 250),
//     );
//   };
