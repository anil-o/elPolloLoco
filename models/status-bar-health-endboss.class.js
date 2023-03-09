class StatusbarHealthEndboss extends DrawableObject {
    IMAGES = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png',
    ];
    percentage = 100;

    /**
    * the function constructor runs always automatically whenever we create a new instance of the class
    */
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentageEndboss(100);
        this.x = 560;
        this.y = 50;
        this.height = 60;
        this.width = 150;
    }

    setPercentageEndboss(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }
}