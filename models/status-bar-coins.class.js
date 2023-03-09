class StatusbarCoins extends DrawableObject {
    IMAGES = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];

    percentage = 0;

    /**
    * the function constructor runs always automatically whenever we create a new instance of the class
    */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentageCoins(0);
        this.x -= 100;
        this.y = 55;
        this.height = 60;
        this.width = 150;
    }

    setPercentageCoins(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
}
