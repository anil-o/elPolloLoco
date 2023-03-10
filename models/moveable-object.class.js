class MoveableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    coinAmount = 0;
    width = 100;
    height = 100;
    bottle = 0;
    bottleAmount = 0;
    healthEndboss = 100;
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        };
    isAlive = true;
    reachedEndboss = false;
    endbossAlreadyHit = false;
    endbossHit = false;
   
    /**
     * character is above the ground
     */
    applyGravity() {
        setInterval(() => {
            if (this.isCharacterAboveGround()) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isCharacterAboveGround() {
        return this.isAboveGround() || this.speedY > 0;
    }

    isAboveGround() {
        if((this instanceof ThrowableObject)) {
            return true;
        } else
        return this.y < 130;
    }

    /**
     * character is colliding with object
     */
    isColliding(mo) {
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
        this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
        this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
        this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }

    /**
     * character is hit
     */
    hit() {
        this.energy -= 5;
        if(this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    /**
     * character was hit by the endboss
     */
    hittedByEndboss() {
        this.energy -= 40;
        if(this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //Difference in ms
        timepassed = timepassed / 1000; //Difference in sec
        return timepassed < 0.6;
    }

    isDead() {
        return this.energy == 0;
    }

    endbossDead() {
       return this.healthEndboss == 0;
    }

    /**
     * character has hit endboss
     */
    hitEndboss() {
        this.healthEndboss -= 25;
        if(this.healthEndboss < 0) {
            this.healthEndboss = 0;
        }
    }

    collectCoins() {
        if(this.coinAmount < 100) {
            soundtrackCoinCollecting.play();
            soundtrackCoinCollecting.volume = 1.0;
            this.coinAmount += 10;
        }
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    jump() {
        this.speedY = 30;
    }
}