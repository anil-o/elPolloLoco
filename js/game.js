let canvas;
let world;
let keyboard = new Keyboard();
let intervalIDs = [];


/*
 * draw playground
 */
function init() {
    startGame();
    initLevel();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard, soundtrack);
    youLost();
    gameOver();
}

function startGame() {
    let startButton = document.getElementById('startButton');
    let startIcons = document.getElementById('startIcons');
    let startScreen = document.getElementById('startScreen');
    let gameDescription = document.getElementById('gameDescription');
    let consoleDescription = document.getElementById('console');
    let canvas = document.getElementById('canvas');
    let iconsDuringGame = document.getElementById('iconsDuringGame');
    let endscreenYouLost = document.getElementById('endscreen');
    let endscreenGameOver = document.getElementById('endscreen-game-over');
    startButton.classList.add('d-none');
    startIcons.classList.add('d-none');
    startScreen.classList.remove('start-screen');
    startScreen.classList.add('start-screen-properties-for-canvas');
    startScreen.style.height = 'unset !important';
    startScreen.style.width = 'unset !important';
    gameDescription.classList.add('d-none');
    consoleDescription.classList.add('d-none');
    canvas.classList.remove('d-none');
    iconsDuringGame.classList.remove('d-none');
    startScreen.style.height = 'unset';
    startScreen.style.width = 'unset';
    endscreenYouLost.classList.add('d-none');
    endscreenGameOver.classList.add('d-none');
    startSoundtrack();
    soundtrackStartscreen.pause();
}

function startSoundtrack() {
        soundtrack.play();
        soundtrack.volume = 0.03;
        soundtrack.currentTime = 6.5;
}

function soundtrackStartscreenAudio() {
    soundtrackStartscreen.play();
    soundtrackStartscreen.muted = true;
}

function youLost() {
    setInterval(() => {
        if (world.character.energy == 0) {
            let endscreen = document.getElementById('endscreen');
            endscreen.classList.remove('d-none');
            soundtrackYouLost.play();
        }
    }, 200);
}

function gameOver() {
    setInterval(() => {
        if (world.endboss.healthEndboss == 0) {
            let endscreenGameOver = document.getElementById('endscreen-game-over');
            endscreenGameOver.classList.remove('d-none');
            soundtrackYouWin.play();
        }
    }, 200);
}

window.addEventListener("keydown", (e) => {
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }
});

window.addEventListener("keyup", (e) => {
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});

function startGameAgain() {
    init();
    soundtrackYouLost.pause();
    soundtrackYouWin.pause();
}