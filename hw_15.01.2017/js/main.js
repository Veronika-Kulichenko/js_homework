;(function() {
	"use strict";

	var giphyBasic = 'http://api.giphy.com/v1/gifs/';
	var giphyApiKey = '?api_key=dc6zaTOxFJmzC';

	var ws;
	let sender;
	
	let $messagesContainer = document.getElementById("messages-container");

	let $chatFrom = document.getElementById("chat-form"),
	$chatMessageInput = document.getElementById("chat-message"),
	$loginForm = document.getElementById("prompt-form-container"),
	$gifsContainer = document.getElementById("gifs-container");

	$chatFrom.addEventListener("submit", onSendMessage);

	$gifsContainer.addEventListener('click', onSendImage);

	function onSendMessage(event) {
		event.preventDefault();
		if(!$chatMessageInput.value) return;
		let message = $chatMessageInput.value.trim();
		if(!message) return;

		$chatMessageInput.value = "";
		ws.emit("chat message" , {name: sender, message, type: 'TEXT'});
	}

	document.getElementById("loginBtn").addEventListener("click", onLogin);

	function onLogin(event) {
		event.preventDefault();

		sender = document.getElementById("login").value;
		if(!sender || sender.length > 30) return;

		$loginForm.hidden = true;

		ws = io("http://178.62.203.188:8888");

		ws.on("chat message", data => onMessage(data));

		let sendBtn = document.getElementById("sendBtn");
		
		sendBtn.disabled = false;
		$chatMessageInput.disabled = false;
		$chatFrom.hidden = false;

		// document.querySelector('.chat-container').style = 'justify-content: space-between';
	}

	function onMessage(data) {
		console.log(data);
		let $p = document.createElement("p");
		if(data.type === 'TEXT' && data.name) {
			$p.setAttribute('data-name', data.name);
			$p.textContent = data.message; 
			$messagesContainer.appendChild($p);
		} else if(data.type === 'IMAGE') {
			
			let url = fetch(data.message)
			.then(res => res.json())
			.then(res => {
				return res.data.images.fixed_height.url;
			});

			return Promise.all([url])
			.then(url => {
				$p.setAttribute('data-name', data.name);

				let $img = document.createElement('img');

				$img.src = url;
				$p.appendChild($img);
				$messagesContainer.appendChild($p);
			})
		} 
		
	}

	fetch(`${giphyBasic}trending${giphyApiKey}`)
	.then(res => res.json())
	.then(res => {
		let result = res.data.map(image => ({
			id : image.id,
			 url: image.images.fixed_height.url
			}));

		renderImages(result);
	});

	function renderImages(images) {
		let fragment = document.createDocumentFragment();

		images.forEach(image => {
			let $img = document.createElement('img');

			$img.src = image.url;
			$img.setAttribute('data-image-id', image.id);

			// $img.addEventListener('click', onSendImage);

			fragment.appendChild($img);
		});

		$gifsContainer.appendChild(fragment);
	}

	function onSendImage(event) {
		console.log(event.target);
		if(event.target.nodeName !== 'IMG') return;

		let $imageId = event.target.dataset.imageId,
		message = `${giphyBasic}${$imageId}${giphyApiKey}`;
		console.log($imageId);
		ws.emit("chat message" , {name: sender, message, type: 'IMAGE'});
	}

})();