"use strict";

var gameIsOn = false;
var strictModeIsOn = false;
var count = "00";
var simonGreenSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var simonRedSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
var simonBlueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var simonYellowSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var currentSound = undefined;
var errorSound = new Audio("http://res.cloudinary.com/bilyan5500/video/upload/v1473581395/Computer_Error_Alert-SoundBible.com-783113881_gcugm0.mp3");
var successSound = new Audio('http://res.cloudinary.com/bilyan5500/video/upload/v1473597368/success_xunayo.mp3');
var winSound = new Audio('http://res.cloudinary.com/bilyan5500/video/upload/v1473598028/win_k2jy5v.mp3');
var inputEnabled = false;
var stepInterval = 800;

var colorsArr = ["green", "red", "blue", "yellow"];
var currentSequence = [];
var playerSequence = [];

function addOneToSequence() {
	if (gameIsOn) {
		var randColor = colorsArr[Math.floor(Math.random() * colorsArr.length)];
		currentSequence.push(randColor);
		incrementCount();

		switch (count) {
			case "05":
				stepInterval = 750;
				break;
			case "09":
				stepInterval = 650;
				break;
			case "13":
				stepInterval = 550;
				break;
			case "17":
				stepInterval = 450;
				break;
		}
	}
}

function playSound(sound, duration) {
	sound.play();

	setTimeout(function stopSound() {
		sound.pause();
		sound.currentTime = 0;
	}, duration);
}

function playWinningSound() {
	playSound(winSound, 5000);
}

function areEqual(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	for (var i = 0; i < arr2.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}

	return true;
}

function playCurrentSequence() {
	inputEnabled = false;
	var i = 0;
	var sequenceInterval = setInterval(function playCurrentSound() {
		if (i < currentSequence.length) {
			switch (currentSequence[i]) {
				case "green":
					highlightButton("green");
					playSound(simonGreenSound, 450);
					break;
				case "red":
					highlightButton("red");
					playSound(simonRedSound, 450);
					break;
				case "blue":
					highlightButton("blue");
					playSound(simonBlueSound, 450);
					break;
				case "yellow":
					highlightButton("yellow");
					playSound(simonYellowSound, 450);
					break;
			}
			i++;
			inputEnabled = false;
		} else {
			clearInterval(sequenceInterval);
			inputEnabled = true;
		}
	}, stepInterval);
}

function highlightButton(button) {
	if (button == "green") {
		(function () {
			var greenBtn = document.querySelector('#green-button');

			if (greenBtn.classList) greenBtn.classList.add('green-button-highlighted');else greenBtn.className += ' ' + 'green-button-highlighted';

			setTimeout(function removeGreenBtnHighlighting() {
				if (greenBtn.classList) greenBtn.classList.remove('green-button-highlighted');else greenBtn.className = greenBtn.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}, 450);
		})();
	} else if (button == "red") {
		(function () {
			var redBtn = document.querySelector('#red-button');

			if (redBtn.classList) redBtn.classList.add('red-button-highlighted');else redBtn.className += ' ' + 'red-button-highlighted';

			setTimeout(function removeRedBtnHighlighting() {
				if (redBtn.classList) redBtn.classList.remove('red-button-highlighted');else redBtn.className = redBtn.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}, 450);
		})();
	} else if (button == "blue") {
		(function () {
			var blueBtn = document.querySelector('#blue-button');

			if (blueBtn.classList) blueBtn.classList.add('blue-button-highlighted');else blueBtn.className += ' ' + 'blue-button-highlighted';

			setTimeout(function removeBlueBtnHighlighting() {
				if (blueBtn.classList) blueBtn.classList.remove('blue-button-highlighted');else blueBtn.className = blueBtn.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}, 450);
		})();
	} else if (button == "yellow") {
		(function () {
			var yellowBtn = document.querySelector('#yellow-button');

			if (yellowBtn.classList) yellowBtn.classList.add('yellow-button-highlighted');else yellowBtn.className += ' ' + 'yellow-button-highlighted';

			setTimeout(function removeYellowBtnHighlighting() {
				if (yellowBtn.classList) yellowBtn.classList.remove('yellow-button-highlighted');else yellowBtn.className = yellowBtn.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}, 450);
		})();
	}
}

function highlightAllButtons() {
	highlightButton("green");
	highlightButton("red");
	highlightButton("blue");
	highlightButton("yellow");
}

function resetSequence() {
	currentSequence = [];
	playerSequence = [];
}

function setActiveSwitch(status) {
	var statusOn = document.querySelector('#switch-is-on');
	var statusOff = document.querySelector('#switch-is-off');

	if (status == "on") {
		if (statusOn.classList) statusOn.classList.add("active");else statusOn.className += ' ' + "active";

		if (statusOff.classList) statusOff.classList.remove("active");else statusOff.className = statusOff.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	} else if (status == "off") {
		if (statusOff.classList) statusOff.classList.add("active");else statusOff.className += ' ' + "active";

		if (statusOn.classList) statusOn.classList.remove("active");else statusOn.className = statusOn.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	}
}

function triggerStrictMode() {
	var strictBtn = document.querySelector('#strict-mode');
	if (gameIsOn) {
		if (!strictModeIsOn) {
			strictModeIsOn = true;

			if (strictBtn.classList) strictBtn.classList.add("strict-active");else strictBtn.className += ' ' + "strict-active";
		} else {
			strictModeIsOn = false;

			if (strictBtn.classList) strictBtn.classList.remove("strict-active");else strictBtn.className = strictBtn.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}
}

function turnStrictModeOff() {
	var strictBtn = document.querySelector('#strict-mode');

	if (strictBtn.classList) strictBtn.classList.remove("strict-active");else strictBtn.className = strictBtn.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	strictModeIsOn = false;
}

function lightUpCounter() {
	var counterEl = document.querySelector('#counter');

	if (counterEl.classList) counterEl.classList.add("active-counter");else counterEl.className += ' ' + "active-counter";
}

function lightDownCounter() {
	var counterEl = document.querySelector('#counter');

	if (counterEl.classList) counterEl.classList.remove("active-counter");else counterEl.className = strictBtncounterElclassName.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

function turnGameOn() {
	if (!gameIsOn) {
		inputEnabled = false;
		gameIsOn = true;
		setActiveSwitch("on");
		lightUpCounter();
		resetSequence();
	}
}

function turnGameOff() {
	if (gameIsOn) {
		inputEnabled = false;
		gameIsOn = false;
		setActiveSwitch("off");
		turnStrictModeOff();
		lightDownCounter();
		resetSequence();
		count = 0;
		document.querySelector('#counter').textContent = "--";
	}
}

function incrementCount() {
	if (gameIsOn) {
		count = Number(count) + 1;
		count.toString().length == 1 ? count = '0' + count : count;

		document.querySelector('#counter').textContent = count;
	}
}

function resetCount() {
	if (gameIsOn) {
		count = "00";
		document.querySelector('#counter').textContent = count;
	} else {
		count = "--";
	}
}

function startNewSequence() {
	if (gameIsOn) {
		inputEnabled = false;
		resetSequence();
		resetCount();
		addOneToSequence();
		playCurrentSequence();
		inputEnabled = false;
	}
}

function playerInput(color) {
	if (gameIsOn && inputEnabled) {
		playerSequence.push(color);
		var tempSequence = currentSequence.slice(0, playerSequence.length);

		if (areEqual(playerSequence, currentSequence)) {

			switch (color) {
				case "green":
					playSound(simonGreenSound, 450);
					break;
				case "red":
					playSound(simonRedSound, 450);
					break;
				case "blue":
					playSound(simonBlueSound, 450);
					break;
				case "yellow":
					playSound(simonYellowSound, 450);
					break;
			}

			if (currentSequence.length == 20) {
				inputEnabled = false;
				setTimeout(playWinningSound, 1200);
				setTimeout(highlightAllButtons, 1000);
				setTimeout(highlightAllButtons, 2000);
				setTimeout(highlightAllButtons, 3000);
				setTimeout(highlightAllButtons, 4000);
				setTimeout(highlightAllButtons, 5000);
				setTimeout(highlightAllButtons, 6000);
				setTimeout(startNewSequence, 7000);
			} else {
				setTimeout(function playSuccessSound() {
					playSound(successSound, 3000);
				}, 300);
				playerSequence = [];
				addOneToSequence();
				inputEnabled = false;
				setTimeout(playCurrentSequence, 1000);
			}
		} else if (!areEqual(playerSequence, tempSequence)) {
			errorSound.play();
			inputEnabled = false;
			playerSequence = [];

			if (strictModeIsOn) {
				setTimeout(startNewSequence, 1000);
			} else {
				setTimeout(playCurrentSequence, 1000);
			}
		} else {
			switch (color) {
				case "green":
					playSound(simonGreenSound, 450);
					break;
				case "red":
					playSound(simonRedSound, 450);
					break;
				case "blue":
					playSound(simonBlueSound, 450);
					break;
				case "yellow":
					playSound(simonYellowSound, 450);
					break;
					preventFastClicking(450);
			}
		}
	}
}

function preventFastClicking(duration) {
	inputEnabled = false;

	setTimeout(function () {
		inputEnabled = true;
	}, duration);
}

function playerInputGreen() {
	var tempSequence = currentSequence.slice(0, playerSequence.length);

	if (gameIsOn && inputEnabled) {
		playerInput("green");
		highlightButton("green");
	}
}

function playerInputRed() {
	var tempSequence = currentSequence.slice(0, playerSequence.length);

	if (gameIsOn && inputEnabled) {
		playerInput("red");
		highlightButton("red");
	}
}

function playerInputBlue() {
	var tempSequence = currentSequence.slice(0, playerSequence.length);

	if (gameIsOn && inputEnabled) {
		playerInput("blue");
		highlightButton("blue");
	}
}

function playerInputYellow() {
	var tempSequence = currentSequence.slice(0, playerSequence.length);

	if (gameIsOn && inputEnabled) {
		playerInput("yellow");
		highlightButton("yellow");
	}
}

document.addEventListener("DOMContentLoaded", function () {
	document.querySelector('#switch-is-on').addEventListener('click', turnGameOn);
	document.querySelector('#switch-is-off').addEventListener('click', turnGameOff);
	document.querySelector('#strict-mode').addEventListener('click', triggerStrictMode);
	document.querySelector('#start-reset').addEventListener('click', startNewSequence);

	document.querySelector('#green-button').addEventListener('click', playerInputGreen);
	document.querySelector('#red-button').addEventListener('click', playerInputRed);
	document.querySelector('#blue-button').addEventListener('click', playerInputBlue);
	document.querySelector('#yellow-button').addEventListener('click', playerInputYellow);
});