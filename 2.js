const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?')

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: {},
  private: false,
}

const firstQuestion = 'Один из последних просмотренных фильмов?'
const secondQuestion = 'На сколько вы оцените его?'

const getAnswer = (ans) => {
  const ansLength = ans.length
  if (ansLength === 0 || ansLength > 50) {
    let newAns = prompt(firstQuestion)
    return getAnswer(newAns)
  } else return ans
}

for (let i = 0; i < personalMovieDB.count; ++i) {
  let firstAns = '';

  //   FIRST WAY

  while (firstAns.length === 0 || firstAns.length > 50) {
    firstAns = prompt(firstQuestion)
  }
  const secondAns = prompt(secondQuestion)

  personalMovieDB.movies[firstQuestion] = firstAns
  personalMovieDB.movies[secondQuestion] = secondAns
  

  //   SECOND WAY

  // firstAns = getAnswer(firstAns)
  // const secondAns = prompt(secondQuestion)

  // personalMovieDB.movies[firstQuestion] = firstAns
  // personalMovieDB.movies[secondQuestion] = secondAns

}

if (personalMovieDB.count === null) console.log('Произошла ошибка')
else {
  if (personalMovieDB.count < 10) alert('Просмотрено довольно мало фильмов')
  else if (personalMovieDB.count < 30) alert('Вы классический зритель')
  else alert('Вы киноман')
}

console.log(personalMovieDB)