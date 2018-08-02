class SoundRepository {
	constructor() {
	}

	sendData(onSuccess) {
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "http://localhost:5000/sound", true);

		xhr.onreadystatechange = function() {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				onSuccess(JSON.parse(this.responseText));
			}
		};

		xhr.send(requestData);
	}
}