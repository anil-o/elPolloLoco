class Coins extends MoveableObject {
    COINS = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ];

    /**
     * the function constructor runs always automatically whenever we create a new instance of the class
     */
    constructor() {
        super().loadImage('img/8_coin/coin_1.png');
        this.loadImages(this.COINS);
        this.x = 200 + Math.random() * 2500;
        this.y = Math.random() * 220;
    }
}