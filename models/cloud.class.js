class Cloud extends MoveableObject {
    y = 5;
    width = 500;
    height = 250;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.x = Math.random() * 500;
    }

    moveClouds() {
        setInterval(myTimer, 1);
    }
}