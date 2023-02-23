class Chicken extends MoveableObject {
    height = 90;
    y = 340;
    IMAGES_WALKING_CHICKEN = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    currentImage = 0;

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');

        this.x = 200 + Math.random() * 500;
        this.animate();
    }

    animate() {
        setInterval(() => {
            
            this.x -= 1;
        }, 1000 / 60);
    }

    eat() {

    }
}