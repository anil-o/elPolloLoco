class SmallChicken extends MoveableObject {
    height = 70;
    width = 60;
    y = 360;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ];
    IMAGE_DEAD = new Image();

    /**
    * the function constructor runs always automatically whenever we create a new instance of the class
    */
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.IMAGE_DEAD.src = 'img/3_enemies_chicken/chicken_small/2_dead/dead.png';
        this.animate();
        this.x = 500 + Math.random() * 2800;
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