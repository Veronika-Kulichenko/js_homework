// Асинхронные запросы на сервер
// Внимательно ознакомьтесь с API http://swapi.co.
// Сценарий работы:
// С помощью метода prompt() просим пользователя ввести номер персонажа (пока это от 1 до 87) по которому нужно получить информацию.


// Если номер был введен неправильно, то сообщаем об этом пользователю.
// Если номер введен верно, то формируем ответ, в котором:
// Указано имя персонажа
// Названия эпизодов, в которых участвовал персонаж
// Название вида существ, к которому относится персонаж
// Язык, присущий этому виду
// Имена других представителей этого вида


// Например,
// Введено: 5


// Ответ:
// Name: Leia Organa
// Films: Revenge of the Sith, Attack of the Clones, A New Hope
// Species: Human
// Language: "Galactic Basic"
// Same origin: Luke Skywalker, ...


let numberOfCharacter = prompt("Enter the character number");

while(numberOfCharacter < 1 || numberOfCharacter > 87){
	alert("Number should be from 1 to 87");
	numberOfCharacter = prompt("Enter the character number");}

	

let peopleList = fetch(`http://swapi.co/api/people/${numberOfCharacter}`)
.then(res => res.json())
.then(function(res) {
	let name = res.name,
	films = res.films,
	species = res.species;

	let getFilms = films.map(film => fetch(film).then(res => res.json()));
	let getSpecies = fetch(species[0]).then(res => res.json());
	return Promise.all(getFilms).then(res => ({name, films: res, getSpecies}));
})	
.then(function(res) {
	let name = res.name,
	films = res.films,
	species = res.getSpecies;
	return Promise.all([species]).then(res => ({name, films, species: res}));
})
.then(function(res) {
	let name = res.name,
	films = res.films,
	species = res.species[0].name;
	language = res.species[0].language;

	let sameOrigin = res.species[0].people.map(spicy => fetch(spicy).then(res => res.json()));
	return Promise.all(sameOrigin).then(res => ({name, films, species, language, sameOrigin: res}));
})
.then(function(res) {
	let name = res.name,
	films = res.films,
	species = res.species,
	language = res.language,
	sameOrigin = res.sameOrigin;

	alert(`Name: ${name}\nFilms: ${films.map(film => film.title).join(", ")}\nSpecies: ${species}\nLanguage: ${language}\nSame origin: ${sameOrigin.map(spicy => spicy.name).join(", ")}`);
});




