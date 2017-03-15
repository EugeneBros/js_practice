'use strict';

var button = document.querySelector('.spinner-wrap');
var audio = document.querySelector('audio');
var intervalId;

button.onclick = function() {
	var pulse = (60 / 86) * 1000;

	if (!audio.paused) {
		audio.pause();
		clearInterval(intervalId);
	} else {
		audio.play();
		intervalId = setInterval(function () {
			this.classList.toggle('pulse');
		}.bind(this), pulse);
	}

	button.classList.toggle('playing');
};