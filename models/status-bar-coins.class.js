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
        let path = this.IMAGES[this.resolveImageIndexCoins()];
        this.img = this.imageCache[path];
    }

    resolveImageIndexCoins() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage < 80 && this.percentage >= 60) {
            return 3;
        } else if (this.percentage < 60 && this.percentage >= 40) {
            return 2;
        } else if (this.percentage < 40 && this.percentage > 0) {
            return 1;
        } else if (this.percentage == 0) {
            return 0;
        }
    }
}