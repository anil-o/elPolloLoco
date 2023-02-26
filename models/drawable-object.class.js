class DrawableObject {
    x = 120;
    y = 250;
    height = 150;
    width = 100;
    currentImage = 0;
    img;
    imageCache = {};


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    drawFrame(ctx) {
        if(this instanceof Character || this instanceof Chicken || this instanceof SmallChicken 
            || this instanceof Endboss || this instanceof Bottles || this instanceof Coins) {
                ctx.beginPath();
                ctx.lineWidth = '5';
                ctx.strokeStyle = 'blue';
                ctx.rect(this.x, this.y, this.width, this.height);
                ctx.stroke();
            }
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}