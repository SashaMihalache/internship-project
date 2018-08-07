import Navigator from "../services/router/Navigator";

class SoundRepository {
	constructor() {
	}

	sendData(data) {
		const xhr = new XMLHttpRequest();
		
		xhr.open("POST", "http://localhost:5000/sound", true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onreadystatechange = function() {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				Navigator.goToUrl("/sounds");
			}
		}
		data = JSON.stringify(data);
		xhr.send(data);
	}

	getSoundTypes(onSuccess) {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", "http://localhost:5000/sound", true);

		xhr.onreadystatechange = function() {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				onSuccess(JSON.parse(this.responseText));
			}
		};

		xhr.send();
	}

	getSoundById(onSuccess, id) {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", "http://localhost:5000/sound/" + id, true);

		xhr.onreadystatechange = function() {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				if (this.responseText == '') {
					return Navigator.goToUrl('/sounds');
				}
				onSuccess(JSON.parse(this.responseText));
			}
		};
		xhr.send();
	}

	editSoundById(data, id) {
		const xhr = new XMLHttpRequest();
		
		xhr.open("POST", "http://localhost:5000/sound/" + id, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.onreadystatechange = function() {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				Navigator.goToUrl("/sounds");
			}
		}
		
		
		data = JSON.stringify(data);
		xhr.send(data);
	}

	getData(pagination, onSuccess) {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", `http://localhost:5000/sounds?page=${pagination.currentPage}&perpage=${pagination.itemsPerPage}`, true);

		xhr.onreadystatechange = function() {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				//console.log(JSON.parse(this.responseText));
				onSuccess(JSON.parse(this.responseText));
			}
		};

		xhr.send();
	}

	deleteSound(soundId, onSuccess) {
		const xhr = new XMLHttpRequest();
		xhr.open("DELETE", "http://localhost:5000/sound/" + soundId, true);

		xhr.onreadystatechange = function() {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				//console.log(this.responseText);
				onSuccess(JSON.parse(this.responseText));
			}
		};

		xhr.send();
	}

}

export default new SoundRepository();