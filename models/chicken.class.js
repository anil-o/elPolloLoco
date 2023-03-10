class Chicken extends MoveableObject {
    height = 90;
    y = 340;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];
    IMAGE_DEAD = new Image();

    /**
     * the function constructor runs always automatically whenever we create a new instance of the class
     */
    constructor() {
        super();
        this.loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.IMAGE_DEAD.src = 'img/3_enemies_chicken/chicken_normal/2_dead/dead.png';
        this.animate();
        this.x = 400 + Math.random() * 2800;
        this.speed = 0.15 + Math.random() * 0.8;
    }

    /**
     * Animates the character
     */
    animate() {
        setInterval(() => {
            if (this.isAlive) {
                this.moveLeft();
            }
        }, 1000 / 60);
        setInterval(() => {
            if (this.isAlive) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 100);
    }
}