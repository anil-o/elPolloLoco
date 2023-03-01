class Endboss extends MoveableObject {
    height = 400;
    width = 200;
    y = 45;
    speed = 1;
    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];
    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];

    constructor() {
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 3400;
        this.animate();
    }

    animate() {
        setInterval(() => {
            console.log('ich komme von der Klasse Endboss', this.reachedEndboss);
            if(this.reachedEndboss) {
                this.moveLeft();
            }
        }, 1000 / 60);

        setInterval(() => {
            if(this.reachedEndboss) {
                this.playAnimation(this.IMAGES_WALKING);
            } 
        }, 100)

        setInterval(() => {
            if (!this.reachedEndboss) {
                this.playAnimation(this.IMAGES_ALERT);
            }
        }, 200);
    }

    moveLeft() {
        this.x -= this.speed;
    }
}