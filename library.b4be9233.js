function l(l){return l&&l.__esModule?l.default:l}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},a={},t=n.parcelRequired7c6;null==t&&((t=function(l){if(l in e)return e[l].exports;if(l in a){var n=a[l];delete a[l];var t={id:l,exports:{}};return e[l]=t,n.call(t.exports,t,t.exports),t.exports}var o=new Error("Cannot find module '"+l+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(l,n){a[l]=n},n.parcelRequired7c6=t),t("brr8Z"),t("cddKH");var o=l(t("amrNH")).template({1:function(l,n,e,a,t){var o,r,i=null!=n?n:l.nullContext||{},c=l.hooks.helperMissing,u="function",s=l.escapeExpression,d=l.lookupProperty||function(l,n){if(Object.prototype.hasOwnProperty.call(l,n))return l[n]};return"  <li class='list-card__item film-card'>\n    <div class='film-card__thumb'>\n      <button\n        class='button__trailer'\n        aria-label='watch the trailer'\n        data-id='"+s(typeof(r=null!=(r=d(e,"id")||(null!=n?d(n,"id"):n))?r:c)===u?r.call(i,{name:"id",hash:{},data:t,loc:{start:{line:7,column:17},end:{line:7,column:23}}}):r)+"'\n      >Trailer</button>\n\n"+(null!=(o=d(e,"if").call(i,null!=n?d(n,"poster_path"):n,{name:"if",hash:{},fn:l.program(2,t,0),inverse:l.program(4,t,0),data:t,loc:{start:{line:10,column:6},end:{line:23,column:13}}}))?o:"")+'</div>\n    <h2 class="film-card__title" data-id="'+s(typeof(r=null!=(r=d(e,"id")||(null!=n?d(n,"id"):n))?r:c)===u?r.call(i,{name:"id",hash:{},data:t,loc:{start:{line:25,column:42},end:{line:25,column:48}}}):r)+'">'+s(typeof(r=null!=(r=d(e,"original_title")||(null!=n?d(n,"original_title"):n))?r:c)===u?r.call(i,{name:"original_title",hash:{},data:t,loc:{start:{line:25,column:50},end:{line:25,column:68}}}):r)+'</h2>\n        <div class="film-card__description">\n        <ul>\n'+(null!=(o=d(e,"each").call(i,null!=n?d(n,"genres"):n,{name:"each",hash:{},fn:l.program(6,t,0),inverse:l.noop,data:t,loc:{start:{line:28,column:12},end:{line:30,column:21}}}))?o:"")+'        </ul>\n    <p class="film-card__year">'+s(typeof(r=null!=(r=d(e,"year")||(null!=n?d(n,"year"):n))?r:c)===u?r.call(i,{name:"year",hash:{},data:t,loc:{start:{line:32,column:31},end:{line:32,column:39}}}):r)+'</p>\n    <div class="library__card-rating">'+s(typeof(r=null!=(r=d(e,"vote_average")||(null!=n?d(n,"vote_average"):n))?r:c)===u?r.call(i,{name:"vote_average",hash:{},data:t,loc:{start:{line:33,column:38},end:{line:33,column:54}}}):r)+"</div>\n    </div>\n    <h2 class='film-card__title' data-id='"+s(typeof(r=null!=(r=d(e,"id")||(null!=n?d(n,"id"):n))?r:c)===u?r.call(i,{name:"id",hash:{},data:t,loc:{start:{line:35,column:42},end:{line:35,column:48}}}):r)+"'>"+s(typeof(r=null!=(r=d(e,"original_title")||(null!=n?d(n,"original_title"):n))?r:c)===u?r.call(i,{name:"original_title",hash:{},data:t,loc:{start:{line:35,column:50},end:{line:35,column:68}}}):r)+"</h2>\n    <div class='film-card__description'>\n      <ul>\n"+(null!=(o=d(e,"each").call(i,null!=n?d(n,"genres"):n,{name:"each",hash:{},fn:l.program(8,t,0),inverse:l.noop,data:t,loc:{start:{line:38,column:8},end:{line:40,column:17}}}))?o:"")+"      </ul>\n      <p class='film-card__rating visually-hidden'>"+s(typeof(r=null!=(r=d(e,"vote_average")||(null!=n?d(n,"vote_average"):n))?r:c)===u?r.call(i,{name:"vote_average",hash:{},data:t,loc:{start:{line:43,column:51},end:{line:43,column:67}}}):r)+"</p>\n    </div>\n  </li>\n"},2:function(l,n,e,a,t){var o,r=null!=n?n:l.nullContext||{},i=l.hooks.helperMissing,c="function",u=l.escapeExpression,s=l.lookupProperty||function(l,n){if(Object.prototype.hasOwnProperty.call(l,n))return l[n]};return"        <img\n          src='https://image.tmdb.org/t/p/w400"+u(typeof(o=null!=(o=s(e,"poster_path")||(null!=n?s(n,"poster_path"):n))?o:i)===c?o.call(r,{name:"poster_path",hash:{},data:t,loc:{start:{line:12,column:46},end:{line:12,column:61}}}):o)+"'\n          alt='"+u(typeof(o=null!=(o=s(e,"original_title")||(null!=n?s(n,"original_title"):n))?o:i)===c?o.call(r,{name:"original_title",hash:{},data:t,loc:{start:{line:13,column:15},end:{line:13,column:33}}}):o)+"'\n          loading='lazy'\n          data-id='"+u(typeof(o=null!=(o=s(e,"id")||(null!=n?s(n,"id"):n))?o:i)===c?o.call(r,{name:"id",hash:{},data:t,loc:{start:{line:15,column:19},end:{line:15,column:25}}}):o)+"'\n        />\n"},4:function(l,n,e,a,t){return"        <img\n          src='https://sd.keepcalms.com/i/keep-calm-poster-not-found.png'\n          alt='poster not found'\n          class='lazyload'\n        />\n"},6:function(l,n,e,a,t){var o=l.lookupProperty||function(l,n){if(Object.prototype.hasOwnProperty.call(l,n))return l[n]};return"            <li>"+l.escapeExpression(l.lambda(null!=n?o(n,"name"):n,n))+"</li>\n"},8:function(l,n,e,a,t){var o=l.lookupProperty||function(l,n){if(Object.prototype.hasOwnProperty.call(l,n))return l[n]};return"          <li>"+l.escapeExpression(l.lambda(null!=n?o(n,"name"):n,n))+"</li>\n"},compiler:[8,">= 4.3.0"],main:function(l,n,e,a,t){var o;return null!=(o=(l.lookupProperty||function(l,n){if(Object.prototype.hasOwnProperty.call(l,n))return l[n]})(e,"each").call(null!=n?n:l.nullContext||{},n,{name:"each",hash:{},fn:l.program(1,t,0),inverse:l.noop,data:t,loc:{start:{line:1,column:0},end:{line:46,column:9}}}))?o:""},useData:!0}),r=t("jqwYo"),i=t("kPX5w");const c=document.querySelector(".library-gallery"),u=document.querySelector(".js-queue"),s=document.querySelector(".js-watched");let d;function p(l){c.innerHTML="";try{d=r.localStorageAPI.load(l),d.map((l=>(l.genres.splice(1),l.vote_average=Number(l.vote_average.toFixed(1)),l)));const n=(0,i.dataToYear)(d);console.log(n),c.innerHTML=o(n)}catch(l){console.log(l)}}u.addEventListener("click",(function(){p("queue")})),s.addEventListener("click",(function(){p("watched")})),p("watched");
//# sourceMappingURL=library.b4be9233.js.map
