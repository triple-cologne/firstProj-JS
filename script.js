"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        geners: [],
        privat: false
    };

const a = prompt('Один из последних фильмов?', ''), // a = ответ, который записал юзер
      b = prompt('Насколько вы оцените его?', ''),
      c = prompt('Один из последних фильмов?', ''),
      d = prompt('Насколько вы оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
