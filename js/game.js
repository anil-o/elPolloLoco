let canvas;
let world;


/*
 * draw playground
 */
function init() {
    canvas = document.getElementById('canvas')
    world = new World(canvas);

    console.log('My Character is', world.character);
}