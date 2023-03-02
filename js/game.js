let canvas;
let world;
let keyboard = new Keyboard();


/*
 * draw playground
 */
function init() {
    startGame();
    initLevel(); 
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function startGame() {
    let startButton = document.getElementById('startButton');
    let startIcons = document.getElementById('startIcons');
    let startScreen = document.getElementById('startScreen');
    let gameDescription = document.getElementById('gameDescription');
    let consoleDescription = document.getElementById('console');
    let canvas = document.getElementById('canvas');
    startButton.classList.add('d-none');
    startIcons.classList.add('d-none');
    startScreen.classList.remove('start-screen');
    gameDescription.classList.add('d-none');
    consoleDescription.classList.add('d-none');
    canvas.classList.remove('d-none');
}

window.addEventListener("keydown", (e) => {
    if(e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if(e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if(e.keyCode == 38) {
        keyboard.UP = true;
    }
    if(e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if(e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if(e.keyCode == 68) {
        keyboard.D = true;
    }
});

window.addEventListener("keyup", (e) => {
    if(e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if(e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if(e.keyCode == 38) {
        keyboard.UP = false;
    }
    if(e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if(e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if(e.keyCode == 68) {
        keyboard.D = false;
    }
});