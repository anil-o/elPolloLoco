class World {
    character = new Character();
    endboss = new Endboss();
    soundtrack;
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    gameIsOverStoppSoundEnbossFight = true;
    statusBarHealth = new StatusbarHealth();
    statusBarCoins = new StatusbarCoins();
    statusBarBottles = new StatusbarBottles();
    statusBarHealthEndboss = new StatusbarHealthEndboss();
    throwableObjects = [];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();

    }

    run() {
        setInterval(() => {
            this.collisionEnemies();
            this.collisionCoins();
            this.collisionBottles();
            this.collisonThrowableBottlesWithEndboss();
            this.collisionWithEndboss();
            this.checkThrowableObjectsRight();
            this.checkThrowableObjectsLeft();
        }, 200);
        setInterval(() => {
            this.checkCharacterKilledChicken();
            this.checkIfEndbossIsReached();
            this.checkThrowableBottleKilledChicken();
            this.checkIfGameIsOver();
        }, 10);
    }

    /**
     * When character collides with the enemy
     */
    collisionEnemies() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAboveGround()) {
                if (enemy.isAlive == true) {
                    this.character.hit();
                    this.character.isHurt();
                    this.statusBarHealth.setPercentage(this.character.energy);
                    if (this.character.energy > 0) {
                        soundtrackHurt.play();
                    }
                }
            }
        });
    }

    /**
     * When character collides with the endboss
     */
    collisionWithEndboss() {
        if (this.character.isColliding(this.endboss) && this.endboss.healthEndboss > 0) {
            this.character.hittedByEndboss();
            this.character.isHurt();
            this.statusBarHealth.setPercentage(this.character.energy);
            if (this.character.energy > 0) {
                soundtrackHurt.play();
            }
        }
    }

    /**
     * Check whether character killed chicken
     */
    checkCharacterKilledChicken() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround() && enemy.isAlive == true) {
                this.killEnemy(enemy);
                setTimeout(() => {
                    if (enemy instanceof Chicken || enemy instanceof SmallChicken)
                        this.level.enemies.splice(this.level.enemies.indexOf(enemy), 1);
                }, 1000);
            }
        });
    }

    /**
     * Check whether bottle killed chicken
     */
    checkThrowableBottleKilledChicken() {
        this.level.enemies.forEach((enemy) => {
            this.throwableObjects.forEach((throwableBottle) => {
                if (throwableBottle.isColliding(enemy) && enemy.isAlive == true) {
                    this.killEnemy(enemy);
                    setTimeout(() => {
                        if (enemy instanceof Chicken || enemy instanceof SmallChicken)
                            this.level.enemies.splice(this.level.enemies.indexOf(enemy), 1);
                    }, 1000);
                }
            });
        });
    }

    killEnemy(enemy) {
        soundtrackChickenKill.play();
        soundtrackChickenKill.playbackRate = 1.5;
        if (enemy instanceof Chicken) {
            enemy.isAlive = false;
            enemy.img = enemy.IMAGE_DEAD;
        }
        if (enemy instanceof SmallChicken) {
            enemy.isAlive = false;
            enemy.img = enemy.IMAGE_DEAD;
        }
    }

    /**
    * Check whether character collected coin
    */
    collisionCoins() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin, index)) {
                this.character.collectCoins();
                this.level.coins.splice(index, 1);
                this.statusBarCoins.setPercentageCoins(this.character.coinAmount);
            }
        });
    }

    /**
    * Check whether character collected bottle
    */
    collisionBottles() {
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.collectBottles();
                this.level.bottles.splice(index, 1);
                this.statusBarBottles.setPercentageBottles(this.character.bottle);
            }
        });
    }

    /**
    * Check in which direction the bottle should thrown
    */
    checkThrowableObjectsRight() {
        if (this.keyboard.D && !this.character.otherDirection) {
            if (this.character.bottleAmount > 0) {
                let bottle = new ThrowableObject(this.character.x, this.character.y + 50, this.character.otherDirection);
                this.throwableObjects.push(bottle);
                this.character.bottleAmount -= 1;
                this.character.bottle -= 20;
                this.statusBarBottles.setPercentageBottles(this.character.bottle);
                this.endboss.endbossAlreadyHit = true;
            }
        }
    }

    /**
    * Check in which direction the bottle should thrown
    */
    checkThrowableObjectsLeft() {
        if (this.keyboard.D && this.character.otherDirection) {
            if (this.character.bottleAmount > 0) {
                let bottle = new ThrowableObject(this.character.x, this.character.y + 50, this.character.otherDirection);
                this.throwableObjects.push(bottle);
                this.character.bottleAmount -= 1;
                this.character.bottle -= 20;
                this.statusBarBottles.setPercentageBottles(this.character.bottle);
                this.endboss.endbossAlreadyHit = true;
            }
        }
    }

    /**
    * Check if the bottle has hit the endboss
    */
    collisonThrowableBottlesWithEndboss() {
        this.throwableObjects.forEach((throwableBottle) => {
            if (this.endboss.isColliding(throwableBottle) && this.endboss.endbossAlreadyHit) {
                soundtrackChickenKill.play();
                soundtrackChickenKill.playbackRate = 1.5;
                this.endboss.hitEndboss();
                this.statusBarHealthEndboss.setPercentageEndboss(this.endboss.healthEndboss);
                this.endboss.endbossAlreadyHit = false;
                this.endboss.endbossHit = true;
            }
        });
    }

    /**
    * Check whether character collected bottle
    */
    collectBottles() {
        soundtrackBottleCollecting.play();
        if (this.character.bottle < 100) {
            this.character.bottle += 20;
            this.character.bottleAmount += 1;
            this.statusBarBottles.setPercentageBottles(this.character.bottle);
        }
    }

    /**
    * Check whether character reached endboss
    */
    checkIfEndbossIsReached() {
        if (this.endbossIsReachedChangeSound()) {
            soundtrack.pause();
            soundtrack.loop = false;
            soundtrackEndboss.play();
            soundtrackEndboss.loop = true;
            this.endboss.reachedEndboss = true;
            this.gameIsOverStoppSoundEnbossFight = false;
        }
    }

    endbossIsReachedChangeSound() {
        return this.character.x >= 2900 && this.gameIsOverStoppSoundEnbossFight;
    }

    /**
    * Check if the game is over
    */
    checkIfGameIsOver() {
        if (this.endboss.healthEndboss == 0 || this.character.energy == 0) {
            let interval_id = window.setInterval(function () { }, Number.MAX_SAFE_INTEGER);
            setInterval(() => {
                for (let i = 1; i < interval_id; i++) {
                    window.clearInterval(i);
                }
            }, 800);
            this.pauseSoundsAndPlayGamerOverSound();
        }
    }

    pauseSoundsAndPlayGamerOverSound() {
        soundtrack.pause();
        soundtrackBottleCollecting.pause();
        soundtrackChickenKill.pause();
        soundtrackEndboss.pause();
        soundtrackEndboss.loop = false;
        walking_sound.pause();
        soundtrackBottleSmash.pause();
        soundtrackGameOver.play();
    }

    setWorld() {
        this.character.world = this;
    }

    /**
     * draw the game in canvas
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0);
        // --------- Space for fixed objects ---------
        this.addStatusBarsToMap();
        this.ctx.translate(this.camera_x, 0);
        this.addMovebaleObjectsToMap();
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addStatusBarsToMap() {
        this.addToMap(this.statusBarHealth);
        this.addToMap(this.statusBarCoins);
        this.addToMap(this.statusBarBottles);
        if (this.whenEndbossReached()) {
            this.addToMap(this.statusBarHealthEndboss);
        }
    }

    whenEndbossReached() {
        return this.endboss.reachedEndboss;
    }

    addMovebaleObjectsToMap() {
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.endboss);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.throwableObjects);
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}