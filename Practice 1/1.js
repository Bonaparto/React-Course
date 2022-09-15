const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?')

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  private: false,
}

const firstMovie = prompt('Один из последних просмотренных фильмов?')
const firstPoints = prompt('На сколько вы оцените его?')
const secondMovie = prompt('Один из последних просмотренных фильмов?')
const secondPoints = prompt('На сколько вы оцените его?')

personalMovieDB.movies[firstMovie] = firstPoints
personalMovieDB.movies[secondMovie] = secondPoints

console.log(personalMovieDB)