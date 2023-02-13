'use strict';

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {count: '', movies: {}, actors: {}, genres: [], privat: false};

personalMovieDB.count = numberOfFilms;



//for (let i = 0; i < 2; i++) {
//	let a = prompt('Последний просмотренный фильм?', ''),
//		b = prompt('Как вы его оцените?', '');
//	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//		personalMovieDB.movies[a] = b;
//	} else {
//		i--;
//	}
//}

//let i = 1;
//cycle:
//while (i < 3) {
//	let a = prompt('Последний просмотренный фильм?', ''),
//		b = prompt('Как вы его оцените?', '');
//		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//		personalMovieDB.movies[a] = b;
//		} else {
//		continue cycle;
//		}
//		i++;
//}
let i = 1;
cycle:
do {
	let a = prompt('Последний просмотренный фильм?', ''),
		b = prompt('Как вы его оцените?', '');
	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
	}else {
		continue cycle;
	}
	i++;
} while (i < 3);



if (personalMovieDB.count < 10) {
	console.log('Malo');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Norm');
} else if (personalMovieDB.count >= 50) {
	console.log('Ebanat');
}

console.log(personalMovieDB);

