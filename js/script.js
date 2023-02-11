'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {count: '', movies: {}, actors: {}, genres: [], privat: false};

personalMovieDB.count = numberOfFilms;

let a = prompt('Последний просмотренный фильм?', ''),
    b = prompt('Как вы его оцените?', ''),
    c = prompt('Последний просмотренный фильм?', ''),
    d = prompt('Как вы его оцените?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);