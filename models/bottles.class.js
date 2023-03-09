class Bottles extends MoveableObject {
    height = 90;
    width = 90;
    BOTTLE = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
    ];

    /**
    * the function constructor runs always automatically whenever we create a new instance of the class
    */
    constructor() {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.BOTTLE);
        this.x = 200 + Math.random() * 2700;
        this.y = Math.random() * 220 + 20;
    }
}