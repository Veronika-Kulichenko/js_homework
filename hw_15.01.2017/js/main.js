; (function() {
	"use strict";

const ws = io("ws://echo.websocket.org/"/*"http://178.62.203.188:8888"*/);
let $messagesContainer = document.getElementById("messages-container");

let login;
document.getElementById('loginBtn').addEventListener('click', loginUser);

function loginUser(){
	console.log("login call")
	let loginForm = document.getElementById("prompt-form-container");
	loginForm.style.visibility = "hidden";
	login = document.getElementById("inputLogin").value;
	console.log(login);
}

ws.on("chat message", data => {
	console.log(data);
	let $p = document.createElement("p");
	$p.textContent = data.message;
	$messagesContainer.appendChild($p);
});

let $chatForm = document.getElementById('chat-form');
let $chatMessageInput = document.getElementById("chat-message");
$chatForm.addEventListener("submit", onSendMessage);

function onSendMessage(ev){
	ev.preventDefault();
	let message = $chatMessageInput.value.trim();
	if(!message) return;
	message = login + ":" + message;
	ws.emit("chat message", { message });
	$chatMessageInput.value = "";
}

})();