; (function() {
	"use strict";

	const ws = io("http://178.62.203.188:8888");
	let $messagesContainer = document.getElementById("messages-container");

	const giphyBasic = "http://api.giphy.com/v1/gifs/";
	const giphyApiKey = "?api_key=dc6zaTOxFJmzC";

	let login;
	document.getElementById('loginBtn').addEventListener('click', loginUser);

	var gifCounter = 0;

	function loginUser(){
		let loginForm = document.getElementById("prompt-form-container");
		loginForm.style.visibility = "hidden";
		login = document.getElementById("inputLogin").value;
	}

	ws.on("chat message", data => {
		console.log(data);
		let $p = document.createElement("p");
		if(data.messageType === "text") {
			$p.textContent = data.sender + ": " + data.message;
			$messagesContainer.appendChild($p);
		} else if(data.messageType === "image") {
			let image = fetch(`${giphyBasic}${data.imageId}${giphyApiKey}`).then(res => res.json());
			Promise.all([image])
			.then(res => {
				let $img = document.createElement("img");
				$img.src = res[0].data.images.fixed_height.url;
				$p.textContent = data.sender + ": ";
				$p.appendChild($img);
				$messagesContainer.appendChild($p);
			});
		}
	});

	let $chatForm = document.getElementById('chat-form');
	let $chatMessageInput = document.getElementById("chat-message");
	$chatForm.addEventListener("submit", onSendMessage);
	let $gifsContainer = document.getElementById("gifs-container");

	loadTrendGifs();

	function onSendMessage(ev){
		ev.preventDefault();
		let message = $chatMessageInput.value.trim();
		if(!message) return;
		let sender = login;
		ws.emit("chat message", { sender, messageType: "text", message });
		$chatMessageInput.value = "";
	}

	function loadTrendGifs() {
		let images = fetch(`${giphyBasic}trending${giphyApiKey}`).then(res => res.json());

		return Promise.all([images])
		.then(res => {
			let images = res[0].data;

			images.forEach(i => {
				let $spanEl = document.createElement("span");

				let $img = document.createElement("img");

				$img.src = i.images.fixed_height.url;
				$img.data = i.id;

				$img.onclick = sendImage;

				$spanEl.appendChild($img);
				$gifsContainer.appendChild($spanEl);
			});

		});
	}

	document.getElementById("next").addEventListener("click", moveLeft);
	document.getElementById("prev").addEventListener("click", moveRight);

	function sendImage() {
		let imageId = this.data,
		sender = login;
		ws.emit("chat message", { sender, imageId, messageType: "image" });
	}


	function moveLeft() {
		if(gifCounter === $gifsContainer.getElementsByTagName('span').length - 1) return;
		$gifsContainer.getElementsByTagName('span')[gifCounter++].style.display = "none";
	}

	function moveRight() {
		if(gifCounter === 0) return;
		$gifsContainer.getElementsByTagName('span')[gifCounter--].style.display = "";
	}

})();