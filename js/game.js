let canvas;
let world;
let keyboard = new Keyboard();
let intervalIDs = [];
let soundtrackStartscreenIntervallId;

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
    mobileButtons();
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
    soundtrackStartscreen.pause();
    soundtrack.play();
    soundtrack.loop = true;
    soundtrack.volume = 0.03;
    soundtrack.currentTime = 6.5;
}

function soundtrackStartscreenAudio() {
    soundtrackStartscreen.play();
    soundtrackStartscreen.loop = true;
    soundtrackStartscreen.muted = true;
}

function youLost() {
    setInterval(() => {
        if (world.character.energy == 0) {
            let endscreen = document.getElementById('endscreen');
            endscreen.classList.remove('d-none');
            soundtrackYouLost.play();
            soundtrackYouLost.autoplay = true;
        }
    }, 200);
}

function gameOver() {
    setInterval(() => {
        if (world.endboss.healthEndboss == 0) {
            let endscreenGameOver = document.getElementById('endscreen-game-over');
            endscreenGameOver.classList.remove('d-none');
            soundtrackYouWin.play();
            soundtrackYouWin.autoplay = true;
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

function mobileButtons() {
    document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById('btnLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });

    document.getElementById('btnRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById('btnRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });

    document.getElementById('btnJump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById('btnJump').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });

    document.getElementById('btnThrowBottle').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.D = true;
    });

    document.getElementById('btnThrowBottle').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.D = false;
    });
}

function startGameAgain() {
    init();
    soundtrackYouLost.pause();
    soundtrackYouWin.pause();
}

