class ThrowableObject extends MoveableObject {
    otherDirection;
    world;
    BOTTLE_ROTATION = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];

    /**
    * the function constructor runs always automatically whenever we create a new instance of the class
    */
    constructor(x, y, otherDirection) {
        super();
        this.loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.BOTTLE_ROTATION);
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
}