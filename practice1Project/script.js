/* Задание на урок1:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* Задание на урок2:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = +prompt("How much films did you wathch?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

for (let i = 0; i < 2; i++) {
	const filmName = prompt("One of the last films you watched?", "");
	const filmRating = prompt("How high do you rate that film?", "");

	if (
		filmName != null &&
		filmRating != null &&
		filmName != "" &&
		filmRating != "" &&
		filmName.length < 5
	) {
		personalMovieDB.movies[filmName] = filmRating;
		console.log("Done!");
	} else {
		console.log("Error!");
		i--;
	}
}

if (personalMovieDB.count < 10) {
	console.log("Less than enough films watched");
} else if (personalMovieDB.count >= 10 && numberOfFilms < 30) {
	console.log("You are a classic film watcher");
} else if (personalMovieDB.count >= 30) {
	console.log("You are a movie maniac");
} else {
	console.log("Something has gone wrong");
}

console.log(personalMovieDB);
