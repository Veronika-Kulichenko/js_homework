let users = [
{name: "User1", id: "user1", lastName: "Pupkin", age: 25, default: true},
{name: "User2", id: "user2", lastName: "Bolshoi", age: 21},
{name: "User3", id: "user3", lastName: "Ivanov", age: 23},
{name: "User4", id: "user4", lastName: "Petrov", age: 27}
];

document.body.addEventListener("click", handleClick);

function handleClick(ev){
	if(ev.target.localName === "a"){
		ev.preventDefault();
		let id = ev.target.getAttribute("href");
		let user = id ? users.find(el => el.id === id) :
		users.find(el => el.default);
		document.querySelector("p").innerHTML = `Name: ${user.name}` + "<br>" + `Last Name: ${user.lastName}` + "<br>" + `Age: ${user.age}`;
		history.pushState({user}, "", `${location.origin}/${id}/?name=${user.name}&lastname=${user.lastName}&age=${user.age}`);
	}
}

window.addEventListener('hashchange', changeUser);

function changeUser(ev){
	let hash = location.hash.slice(1),
	arr = hash.split("="),
	userId = location.pathname.match(/user\d{1}/)[0],
	user = userId ? 
	users.find(el => el.id === userId) :
	users.find(el => el.default);
	user[arr[0]] = arr[1];
	document.querySelector("p").innerHTML = `Name: ${user.name}` + "<br>" + `Last Name: ${user.lastName}` + "<br>" + `Age: ${user.age}`;
	history.pushState({user}, "", `${location.origin}/${userId}/?name=${user.name}&lastname=${user.lastName}&age=${user.age}`);
}