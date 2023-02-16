'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
} 

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {}, 
	actors: {}, 
	genres: [], 
	privat: false
};



function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		let a = prompt('Последний просмотренный фильм?', ''),
			b = prompt('Как вы его оцените?', '');
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
		} else {
			i--;
		}
	}
}
rememberMyFilms();

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
/* let i = 1;
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
} while (i < 3); */


function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Malo');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Norm');
	} else if (personalMovieDB.count >= 40) {
		console.log('Ebanat');
	}
}

detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	let genres;
	for (let i = 0; i < 3; i++) {
		genres = prompt(`Ваш любимый жанр под номером ${i + 1}`);
		if (genres == null || genres == '') {
			alert('Введите верное значение');
			i--;
		} else {
			personalMovieDB.genres[i] = genres;
		}
	}
}

writeYourGenres();