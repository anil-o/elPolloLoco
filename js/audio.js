let soundtrackStartscreen = new Audio('sound/start-screen.mp3');
let soundtrack = new Audio('sound/soundtrack.mp3');
let soundtrackYouLost = new Audio('sound/you_lost.mp3');
let soundtrackYouWin = new Audio('sound/win.mp3');
let walking_sound = new Audio('sound/walking_pepe.mp3');
let jump_sound = new Audio('sound/jump.mp3');
let soundtrackChickenKill = new Audio('sound/chicken_kill.mp3');
let soundtrackBottleCollecting = new Audio('sound/bottle_collected.mp3');
let soundtrackEndboss = new Audio('sound/endboss.mp3');
let soundtrackHurt = new Audio('sound/hurt.mp3');
let soundtrackGameOver = new Audio('sound/game_over.mp3');
let soundtrackBottleSmash = new Audio('sound/bottle_smash.mp3');
let soundtrackCoinCollecting = new Audio('sound/coin_collected.mp3');

function muteAudio() {
    soundtrack.muted = true;
    soundtrackYouLost.muted = true;
    soundtrackYouWin.muted = true;
    walking_sound.muted = true;
    jump_sound.muted = true;
    soundtrackChickenKill.muted = true;
    soundtrackBottleCollecting.muted = true;
    soundtrackEndboss.muted = true;
    soundtrackHurt.muted = true;
    soundtrackGameOver.muted = true;
    soundtrackBottleSmash.muted = true;
    soundtrackCoinCollecting.muted = true;
}

function unmuteAudio() {
    soundtrack.muted = false;
    soundtrackYouLost.muted = false;
    soundtrackYouWin.muted = false;
    walking_sound.muted = false;
    jump_sound.muted = false;
    soundtrackChickenKill.muted = false;
    soundtrackBottleCollecting.muted = false;
    soundtrackEndboss.muted = false;
    soundtrackHurt.muted = false;
    soundtrackGameOver.muted = false;
    soundtrackBottleSmash.muted = false;
    soundtrackCoinCollecting.muted = false;
}

function muteAudioStartscreen() {
    soundtrackStartscreen.muted = false;
}

function unmuteAudioStartscreen() {
    soundtrackStartscreen.muted = true;
}

function muteStartscreen() {
    document.getElementById('mute').classList.add('d-none');
    document.getElementById('unmute').classList.remove('d-none');
    muteAudioStartscreen();
}

function unmuteStartscreen() {
    document.getElementById('mute').classList.remove('d-none');
    document.getElementById('unmute').classList.add('d-none');
    unmuteAudioStartscreen();
}

function muteDuringTheGame() {
    document.getElementById('duringGameMute').classList.add('d-none');
    document.getElementById('duringGameUnmute').classList.remove('d-none');
    muteAudio();
}

function umuteDuringTheGame() {
    document.getElementById('duringGameMute').classList.remove('d-none');
    document.getElementById('duringGameUnmute').classList.add('d-none');
    unmuteAudio();
}