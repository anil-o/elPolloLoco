let canvas;
let world;
let keyboard = new Keyboard();
let soundtrack = new Audio('audio/soundtrack.mp3');

/*
 * draw playground
 */
function init() {
    canvas = document.getElementById('canvas')
    world = new World(canvas, keyboard);
    //soundtrack.play();
}

window.addEventListener("keydown", (e) => {
    console.log(e);
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
});

window.addEventListener("keyup", (e) => {
    console.log(e);
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
});