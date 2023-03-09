class Cloud extends MoveableObject {
    y = 5;
    width = 500;
    height = 250;

    /**
     * the function constructor runs always automatically whenever we create a new instance of the class
     */
    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500;
        this.animate();
    }

    /**
     * Animates the character
     */
    animate() {
        this.moveLeft();
    }
}