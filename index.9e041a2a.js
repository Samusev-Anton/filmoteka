!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o),o("jiOZA");var l=o("bpxeT"),r=o("2TvXO"),s=o("gsGse"),i=o("l5bVx"),c=e(o("WMajR")).template({1:function(e,t,n,a,o){var l=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return e.escapeExpression(e.lambda(null!=t?l(t,"name"):t,t))+"\n          "},compiler:[8,">= 4.3.0"],main:function(t,n,a,o,l){var r,s,c=null!=n?n:t.nullContext||{},d=t.hooks.helperMissing,u="function",m=t.escapeExpression,v=t.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"<div class='modal background-modal'>\n  <div class='modal__img'><button\n      type='button'\n      class='modal__button-rotate'\n    ><svg\n        width='30'\n        height='30'\n        version='1.1'\n        id='Layer_1'\n        xmlns='http://www.w3.org/2000/svg'\n        xmlns:xlink='http://www.w3.org/1999/xlink'\n        x='0px'\n        y='0px'\n        viewBox='0 0 461.001 461.001'\n        style='enable-background:new 0 0 461.001 461.001;'\n        xml:space='preserve'\n      >\n        <g>\n          <path\n            style='fill:#F61C0D;'\n            d='M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728\n\t\tc0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137\n\t\tC461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607\n\t\tc0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z'\n          ></path>\n        </g>\n      </svg>\n      Watch trailer</button><img\n      class='modal__poster'\n      src='https://image.tmdb.org/t/p/w500"+m((void 0===(s=null!=(s=v(a,"poster_path")||(null!=n?v(n,"poster_path"):n))?s:d)?"undefined":e(i)(s))===u?s.call(c,{name:"poster_path",hash:{},data:l,loc:{start:{line:30,column:42},end:{line:30,column:57}}}):s)+"'\n      alt="+m((void 0===(s=null!=(s=v(a,"original_title")||(null!=n?v(n,"original_title"):n))?s:d)?"undefined":e(i)(s))===u?s.call(c,{name:"original_title",hash:{},data:l,loc:{start:{line:31,column:10},end:{line:31,column:28}}}):s)+"\n      loading='lazy'\n    /></div>\n  <div class='modal__content'><h2 class='modal__title dark-theme-text'>"+m((void 0===(s=null!=(s=v(a,"original_title")||(null!=n?v(n,"original_title"):n))?s:d)?"undefined":e(i)(s))===u?s.call(c,{name:"original_title",hash:{},data:l,loc:{start:{line:34,column:71},end:{line:34,column:89}}}):s)+"</h2>\n    <div class='modal__info'>\n      <ul class='modal__list-key'>\n        <li class='modal__list-key-item'>Vote / Votes</li>\n        <li class='modal__list-value-item dark-theme-text'><span\n            class='modal__list-vote dark-theme-text'\n          >"+m((void 0===(s=null!=(s=v(a,"vote_average")||(null!=n?v(n,"vote_average"):n))?s:d)?"undefined":e(i)(s))===u?s.call(c,{name:"vote_average",hash:{},data:l,loc:{start:{line:40,column:11},end:{line:40,column:27}}}):s)+"</span>\n          /\n          <span class='modal__list-value-item dark-theme-text'>"+m((void 0===(s=null!=(s=v(a,"vote_count")||(null!=n?v(n,"vote_count"):n))?s:d)?"undefined":e(i)(s))===u?s.call(c,{name:"vote_count",hash:{},data:l,loc:{start:{line:42,column:63},end:{line:42,column:77}}}):s)+"</span>\n        </li>\n      </ul>\n      <ul class='modal__list-key'>\n        <li class='modal__list-key-item'>Popularity</li>\n        <li class='modal__list-value-item dark-theme-text'>"+m((void 0===(s=null!=(s=v(a,"popularity")||(null!=n?v(n,"popularity"):n))?s:d)?"undefined":e(i)(s))===u?s.call(c,{name:"popularity",hash:{},data:l,loc:{start:{line:47,column:59},end:{line:47,column:73}}}):s)+"</li>\n      </ul>\n      <ul class='modal__list-key'>\n        <li class='modal__list-key-item'>Original Title</li>\n        <li class='modal__list-value-item dark-theme-text'>"+m((void 0===(s=null!=(s=v(a,"original_title")||(null!=n?v(n,"original_title"):n))?s:d)?"undefined":e(i)(s))===u?s.call(c,{name:"original_title",hash:{},data:l,loc:{start:{line:51,column:59},end:{line:51,column:77}}}):s)+"</li>\n      </ul>\n      <ul class='modal__list-key'>\n        <li class='modal__list-key-item'>Genre</li>\n        <li class='modal__list-value-item dark-theme-text'>"+(null!=(r=v(a,"each").call(c,null!=n?v(n,"genres"):n,{name:"each",hash:{},fn:t.program(1,l,0),inverse:t.noop,data:l,loc:{start:{line:55,column:59},end:{line:56,column:19}}}))?r:"")+"</li>\n      </ul>\n    </div>\n    <p class='modal__about dark-theme-text'>ABOUT</p>\n    <p class='modal__about-text dark-theme-text'>"+m((void 0===(s=null!=(s=v(a,"overview")||(null!=n?v(n,"overview"):n))?s:d)?"undefined":e(i)(s))===u?s.call(c,{name:"overview",hash:{},data:l,loc:{start:{line:60,column:49},end:{line:60,column:61}}}):s)+"</p>\n    <div class='modal__buttons'>\n      <button class='modal__button--watched' type='submit'>ADD TO WATCHED</button>\n      <button class='modal__button--queue' type='submit'>ADD TO QUEUE</button></div>\n  </div>\n  <button type='button' class='modal__button-close'>\n      <svg class='modal-close__svg' width='30' height='30' viewBox='0 0 30 30'>\n      <path class='modal-close__svg__path dark-theme-text' d='M8 8L22 22' stroke='black' stroke-width='2'></path>\n      <path class='modal-close__svg__path dark-theme-text' d='M8 22L22 8' stroke='black' stroke-width='2'></path>\n    </svg>\n  </button>\n</div>\n\n<div class='modal__backside'>\n  <button type='button' class='modal__button-backtoinfo'>Back to movie info\n    <svg\n      width='20'\n      height='20'\n      version='1.1'\n      id='Layer_1'\n      xmlns='http://www.w3.org/2000/svg'\n      xmlns:xlink='http://www.w3.org/1999/xlink'\n      x='0px'\n      y='0px'\n      viewBox='0 0 499.2 499.2'\n      style='enable-background:new 0 0 499.2 499.2;'\n      xml:space='preserve'\n    >\n      <path\n        style='fill:#4F0404;'\n        d='M489.6,229.6c-10.4,20.8-29.6,37.6-52.8,44c19.2,45.6,21.6,96.8,2.4,142.4c34.4-11.2,60-43.2,60-81.6\n\tv-68.8C499.2,253.6,495.2,241.6,489.6,229.6z'\n      ></path>\n      <path\n        style='fill:#C42014;'\n        d='M413.6,177.6h-228c-47.2,0-86.4,38.4-86.4,85.6v58.4h232l0,0h82.4c33.6,0,64,20.8,77.6,49.6\n\tc6.4-14.4,8-25.6,8-39.2v-68.8C499.2,216,460.8,177.6,413.6,177.6z'\n      ></path>\n      <polygon\n        style='fill:#EA2D28;'\n        points='123.2,249.6 219.2,153.6 219.2,30.4 0,249.6 219.2,468.8 219.2,345.6 '\n      ></polygon>\n      <polyline\n        style='fill:#C42014;'\n        points='1.6,249.6 219.2,468.8 219.2,345.6 124.8,249.6 219.2,153.6 '\n      ></polyline>\n    </svg>\n  </button>\n</div>"},useData:!0}),d=o("4Nugj"),u=o("iU1Pc"),m=o("cWPZ2"),v=[],p=[];function g(e,t){var n=localStorage.getItem(e);p.includes(t)?u.Notify.failure("we have alredy added that movie"):null===n?(p.push(t),m.localStorageAPI.save(e,p)):((p=JSON.parse(n)).push(t),m.localStorageAPI.save(e,p))}var h;d.refs.homeGallery.addEventListener("click",(function(e){return _.apply(this,arguments)}));var f=[];function _(){return(_=e(l)(e(r).mark((function t(n){var a;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),"IMG"===n.target.nodeName||"H2"===n.target.nodeName){e.next=3;break}return e.abrupt("return");case 3:a=n.target.dataset.id,(0,s.apiModalDetails)(a).then((function(e){h=e,d.refs.filmBox.innerHTML=c(e),y(),f.push(a)}));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function y(){var e=document.querySelector(".modal__button-close"),t=document.querySelector(".modal__button-rotate"),n=document.querySelector(".modal__button-backtoinfo");t.addEventListener("click",w),t.addEventListener("click",S),n.addEventListener("click",b),document.body.addEventListener("keydown",x),document.body.addEventListener("click",L),e.addEventListener("click",k),document.body.classList.add("modal-open"),d.refs.filmBox.classList.remove("visually-hidden")}function b(){var e=document.querySelector(".modal"),t=document.querySelector(".modal__backside");e.classList.remove("rotated"),t.classList.remove("rotated360")}function w(){var e=document.querySelector(".modal"),t=document.querySelector(".modal__backside");e.classList.add("rotated"),t.classList.add("rotated360"),document.querySelector("iframe").remove()}function k(){var e=document.querySelector(".modal__button-close"),t=document.querySelector(".modal__button-rotate"),n=document.querySelector(".modal__button-backtoinfo");document.body.classList.remove("modal-open"),d.refs.filmBox.classList.add("visually-hidden"),t.removeEventListener("click",w),t.removeEventListener("click",S),n.removeEventListener("click",b),document.body.removeEventListener("keydown",x),document.body.removeEventListener("click",L),e.removeEventListener("click",k),f=[]}function x(e){"Escape"===e.code&&k()}function L(e){var t,n,a;"modal__button--watched"===e.target.className&&(t="watched",n=h,a=localStorage.getItem(t),v.includes(n)?u.Notify.failure("we have alredy added that movie"):null===a?(v.push(n),m.localStorageAPI.save(t,v)):((v=JSON.parse(a)).push(n),m.localStorageAPI.save(t,v)),k()),"modal__button--queue"===e.target.className&&(g("queue",h),k()),e.target===d.refs.filmBox&&k()}function S(){(0,s.apiMovieDetails)(f).then((function(e){var t,n,a;t=e,n=document.querySelector(".modal__backside"),a='<iframe class="youtube-player"\n  width="100%"\n  height="100%"\n  src="https://www.youtube.com/embed/'.concat(t,'"\n  title="YouTube video player"\n  frameborder="0"\n  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n  allowfullscreen\n  ></iframe>'),n.insertAdjacentHTML("beforeend",a)}))}o("kLOzx"),o("2Z7mb"),o("ivF4K");s=o("gsGse");var P=o("dyT35");document.addEventListener("click",(function(e){var t=e.target;if(t.classList.contains("button__trailer")||t.classList.contains("modal__button--trailer")){var n=t.dataset.id;console.log("movieID :>> ",n),(0,s.apiMovieDetails)(n).then((function(e){var t;t=e,P.create("\n    <iframe src='https://www.youtube.com/embed/".concat(t,'\' width="640" height="480" frameborder="0" allowfullscreen origin></iframe>\n')).show()}))}})),{el:document.querySelector("#scrollup"),show:function(){this.el.classList.remove("visually-hidden-scroll")},hide:function(){this.el.classList.add("visually-hidden-scroll")},addEventListener:function(){var e=this;window.addEventListener("scroll",(function(){(window.scrollY||document.documentElement.scrollTop)>500?e.show():e.hide()})),document.querySelector("#scrollup").onclick=function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}}.addEventListener();l=o("bpxeT"),r=o("2TvXO");var q=o("dIxxU"),E=o("ilAHm"),A=(d=o("4Nugj"),m=o("cWPZ2"),o("5jGKf")),I=document.querySelector("#genreForm"),O=document.querySelector("#filter-form"),T=document.querySelector("#yearForm"),M=document.querySelector("#btnResetFilter"),D=document.querySelector(".preloader"),N=document.querySelector("#sortForm");I&&I.addEventListener("input",(function(e){e&&(D.classList.remove("done"),genre=e.target.value,page=1,m.localStorageAPI.save("page-pg",page),m.localStorageAPI.save("genre-pg",genre),F(page,genre).then((function(e){d.refs.homeGallery.innerHTML=(0,A.default)(e),e.total_pages>500?amountOfPages=500:amountOfPages=e.total_pages,m.localStorageAPI.save("total-pages",amountOfPages),D.classList.add("done")})))})),T&&T.addEventListener("input",(function(e){e&&(D.classList.remove("done"),page=1,query="",m.localStorageAPI.save("page-pg",page),year=e.target.value,m.localStorageAPI.save("year-pg",year),F(page,year).then((function(e){d.refs.homeGallery.innerHTML=(0,A.default)(e),e.total_pages>500?amountOfPages=500:amountOfPages=e.total_pages,D.classList.add("done"),""==query&&m.localStorageAPI.save("total-pages",amountOfPages)})))})),N&&N.addEventListener("input",(function(e){e&&(D.classList.remove("done"),page=1,query="",year="",genre="",m.localStorageAPI.save("page-pg",page),sort=e.target.value,m.localStorageAPI.save("sort-pg",sort),F(page,sort).then((function(e){d.refs.homeGallery.innerHTML=(0,A.default)(e),e.total_pages>500?amountOfPages=500:amountOfPages=e.total_pages,m.localStorageAPI.save("total-pages",amountOfPages),D.classList.add("done")})))})),M&&M.addEventListener("click",(function(e){D.classList.remove("done"),e.preventDefault(),O[0].options.selectedIndex=0,O[1].options.selectedIndex=0,O[2].options.selectedIndex=0,genre="",year="",sort="",page=1,""===query?amountOfPages=1e3:amountOfPages=m.localStorageAPI.load("total-pages");m.localStorageAPI.save("genre-pg",genre),m.localStorageAPI.save("year-pg",year),m.localStorageAPI.save("sort-pg",sort),m.localStorageAPI.save("page-pg",page),m.localStorageAPI.save("total-pages",amountOfPages),F(page,query,genre,year,sort).then((function(e){d.refs.homeGallery.innerHTML=(0,A.default)(e),function(e){localStorage.setItem("moviesData",JSON.stringify(e.results))}(e),m.localStorageAPI.save("total-pages",amountOfPages),D.classList.add("done")})),m.localStorageAPI.save("page-pg",page)}));var C,F=(C=e(l)(e(r).mark((function t(){var n,a,o,l,s,i,c,d=arguments;return e(r).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.length>0&&void 0!==d[0]?d[0]:"",a=d.length>1&&void 0!==d[1]?d[1]:"",o=d.length>2&&void 0!==d[2]?d[2]:"",l=d.length>3&&void 0!==d[3]?d[3]:"",s=d.length>4&&void 0!==d[4]?d[4]:"",i={year:""!==l&&"start"!==l?"&primary_release_year=".concat(l):"",genre:""!==o&&"start"!==o?"&with_genres=".concat(o):"",queryFetch:"&query=".concat(a),sort:""!==s&&"start"!==s?"&sort_by=".concat(s):"",discover:"/trending",week:"/week"},""===a&&(i.queryFetch=""),""!==a&&""===o&&(i.discover="/search",i.week=""),""===a&&""!==o&&(i.discover="/discover",i.week=""),""===a&&""!==l&&(i.discover="/discover",i.week=""),e.next=8,q.default.get("".concat(E.BASE_URL).concat(i.discover,"/movie").concat(i.week,"?api_key=").concat(E.API_KEY).concat(i.genre).concat(i.year).concat(i.sort,"&language=en-US").concat(i.queryFetch,"&page=").concat(n));case 8:return c=e.sent.data,m.localStorageAPI.save("moviesData",c.results),e.abrupt("return",c);case 11:case"end":return e.stop()}}),t)}))),function(){return C.apply(this,arguments)})}();
//# sourceMappingURL=index.9e041a2a.js.map