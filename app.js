const audioBoom = document.getElementById("audioBoom");
const audioClap = document.getElementById("audioClap");
const audioHihat = document.getElementById("audioHihat");
const audioKick = document.getElementById("audioKick");
const audioOpenhat = document.getElementById("audioOpenhat");
const audioRide = document.getElementById("audioRide");
const audioSnare = document.getElementById("audioSnare");
const audioTink = document.getElementById("audioTink");
const audioTom = document.getElementById("audioTom");

// prettier-ignore
document.addEventListener("keypress", (event) => {
	switch (event.key) {
		case "a": audioBoom.src = "sounds/boom.wav"; break;
		case "s": audioClap.src = "sounds/clap.wav"; break;
		case "d": audioHihat.src = "sounds/hihat.wav"; break;
		case "f": audioKick.src = "sounds/kick.wav"; break;
		case "g": audioOpenhat.src = "sounds/openhat.wav"; break;
		case "h": audioRide.src = "sounds/ride.wav"; break;
		case "j": audioSnare.src = "sounds/snare.wav"; break;
		case "k": audioTink.src = "sounds/tink.wav"; break;
		case "l": audioTom.src = "sounds/tom.wav"; break;
	}
});

buttonA.addEventListener("click", () => {
	audioBoom.src = "sounds/boom.wav";
});

buttonS.addEventListener("click", () => {
	audioClap.src = "sounds/clap.wav";
});

buttonD.addEventListener("click", () => {
	audioHihat.src = "sounds/hihat.wav";
});

buttonF.addEventListener("click", () => {
	audioKick.src = "sounds/kick.wav";
});

buttonG.addEventListener("click", () => {
	audioOpenhat.src = "sounds/openhat.wav";
});

buttonH.addEventListener("click", () => {
	audioRide.src = "sounds/ride.wav";
});

buttonJ.addEventListener("click", () => {
	audioSnare.src = "sounds/snare.wav";
});

buttonK.addEventListener("click", () => {
	audioTink.src = "sounds/tink.wav";
});

buttonL.addEventListener("click", () => {
	audioTom.src = "sounds/tom.wav";
});
