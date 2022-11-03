import { refs } from './refs';
import { 
  THEME_STORAGE, 
  THEMES
} from "./constants/app_const";
import { localStorageAPI } from './api/localStorageAPI';


const themeSwither = refs.changeTheme;
const changeThemeCssLink = refs.changeThemeCssLink;
const {dark, light} = THEMES;

themeSwither.forEach(swither => swither.addEventListener(`click`, changeTheme));

function changeTheme() {
  localStorageAPI.save(THEME_STORAGE, this.dataset.theme);

  if (this.dataset.theme === dark) {
    changeThemeCssLink.disabled = false;
  }
  if (this.dataset.theme === light) {
    changeThemeCssLink.disabled = true;
  }
}

let activeTheme = localStorageAPI.load(THEME_STORAGE);

if (activeTheme === null || activeTheme === light) {
  changeThemeCssLink.disabled = true;
} 
else {
  changeThemeCssLink.disabled = false;
}
