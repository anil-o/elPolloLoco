let canvas;
let ctx;
let world = new World();


/*
 * draw playground
 */
function init() {
    canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d');

    console.log('My Character is', world.character);
}