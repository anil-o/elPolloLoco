class Bottles extends MoveableObject{
    
        BOTTLES = [
            'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        ];
    
        constructor() {
            super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
            this.loadImages(this.BOTTLES);
            this.x = 200 + Math.random() * 2500;
            this.y = Math.random() * 150;
        }
    }