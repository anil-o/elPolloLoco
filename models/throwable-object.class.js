class ThrowableObject extends MoveableObject {
    otherDirection;
    world;
    BOTTLE_ROTATION = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];
    /*BOTTLE_SMASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png'
    ];*/
    constructor(x, y, otherDirection) {
        super();
        this.loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.BOTTLE_ROTATION);
        //this.loadImages(this.BOTTLE_SMASH);
        this.x = x;
        this.y = y;
        this.height = 90;
        this.width = 90;
        this.throw();
        this.otherDirection = otherDirection;
    }

    throw() {
        this.speedY = 30;
        this.speedX = 20;
        this.applyGravity();
        setInterval(() => {
            if(this.otherDirection) {
                this.x -= 8;
            } else {
                this.x += 8;
            }
        }, 25);
        setInterval(() => {
            this.playAnimation(this.BOTTLE_ROTATION);
        }, 150);
    }

    /*bottleSmash() {
        if(this.endboss.endbossHit) {
            this.playAnimation(this.BOTTLE_SMASH);
        }
    }*/
}