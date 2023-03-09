class DrawableObject {
    x = 120;
    y = 250;
    height = 150;
    width = 100;
    currentImage = 0;
    img;
    imageCache = {};


    /**
     * Load an image
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * draws the image on the canvas
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
    * Drawing a rectangle around the object from the given instances
    */
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof SmallChicken
            || this instanceof Endboss || this instanceof Bottles || this instanceof Coins || this instanceof ThrowableObject) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'transparent';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    /**
     * Load several images
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path
            this.imageCache[path] = img;
        });
    }

    /**
     * calculates the percentage of the statusbar of the several objects
     */
    resolveImageIndex() {
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