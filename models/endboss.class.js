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
    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];
    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png',
    ];
    IMAGES_HIT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];

    constructor() {
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HIT);
        this.x = 3400;
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.endbossHit && !this.endbossDead() && this.reachedEndboss) {
                this.playAnimation(this.IMAGES_HIT);
                this.endbossHit = false;
            } else if (this.reachedEndboss && !this.endbossDead() && !this.endbossHit && this.healthEndboss > 60) {
                this.playAnimation(this.IMAGES_WALKING);
            } else if (!this.reachedEndboss && !this.endbossDead()) {
                this.playAnimation(this.IMAGES_ALERT);
            } else if (this.healthEndboss <= 60 && this.healthEndboss > 0 && !this.endbossHit) {
                this.speed = 5;
                this.playAnimation(this.IMAGES_ATTACK);
            } else if (this.endbossDead()) {
                this.speed = 0;
                this.playAnimation(this.IMAGES_DEAD);
            }
        }, 400);

        setInterval(() => {
            if (this.reachedEndboss && !this.endbossDead() && !this.endbossHit) {
                this.moveLeft();
            }
        }, 1000 / 60);
    }

    moveLeft() {
        if (this.x > 0) {
            this.x -= this.speed;
        }
    }

    moveFaster() {
        this.speed = 5;
        this.playAnimation(this.IMAGES_ATTACK);
    }
}