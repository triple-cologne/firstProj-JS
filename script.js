"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        geners: [],
        privat: false
    };

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних фильмов?', ''),
          b = prompt('Насколько вы оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

// let i = 0;

// while (i < 2) {
//     const a = prompt('Один из последних фильмов?', ''),
//           b = prompt('Насколько вы оцените его?', '');
//     i++;
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// do {
//     const a = prompt('Один из последних фильмов?', ''),
//           b = prompt('Насколько вы оцените его?', '');
//     i++;
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }
// } while (i < 2);

if (personalMovieDB.count < 10) {
    console.log('Мало');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Классика');
} else if (personalMovieDB.count >= 30) {
    console.log('Киноман');
} else {
    console.log('Ошибка');
}

console.log(personalMovieDB);