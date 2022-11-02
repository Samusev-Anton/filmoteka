import allGenres from '../data/genres.json';

// Создание нового свойства с годом (для всех)
function createYear(obj) {
  return obj.release_date ? obj.release_date.split('-')[0] : '';
}

// Создание нового свойства с жанрами для трендов
function genresFromTrend(array, genres) {
  return array
    .map(id => genres.filter(genre => genre.id === id))
    .slice(0, 3)
    .flat();
}

// Создание нового свойства с жанрами для запроса по ID фильма
function genresFromID(array) {
  return array.genres
    .map(genre => genre.name)
    .slice(0, 3)
    .flat();
}

// Слияние полной информации о фильме для трендов
function dataRevize(films, allGenres) {
  return films.map(film => ({
    ...film,
    year: createYear(film),
    genres: genresFromTrend(film.genre_ids, allGenres),
  }));
}

// Извлечение локальных жанров из json файла
function getGenres() {
    const { genres } = allGenres;
    return genres;
  }

export {
  dataRevize,
  genresFromTrend,
  genresFromID,
  createYear,
  getGenres,
};