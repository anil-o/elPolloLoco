let canvas;
let world;
let keyboard = new Keyboard();

/*
 * draw playground
 */
function init() {
    canvas = document.getElementById('canvas')
    world = new World(canvas);
}

window.addEventListener("keypress", (e) => {
    console.log(e);
    if(e == LEFT) {
        LEFT = True;
    }
    if(e == RIGHT) {
        LEFT = True;
    }
    if(e == UP) {
        LEFT = True;
    }
    if(e == DOWN) {
        LEFT = True;
    }
    if(e == SPACE) {
        LEFT = True;
    }
});