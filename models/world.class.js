class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBarHealth = new StatusbarHealth();
    statusBarCoins = new StatusbarCoins();
    statusBarBottles = new StatusbarBottles();
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
            this.checkThrowableObjects();
        }, 200);

        setInterval(() => {
            this.checkCharacterKilledChicken();
        }, 10);
    }

    collisionEnemies() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAboveGround()) {
                this.character.hit();
                this.character.isHurt();
                this.statusBarHealth.setPercentage(this.character.energy);
            }
        });
    }

    checkCharacterKilledChicken() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround()) {
                this.killEnemy(enemy, index);
                setTimeout(() => {
                    this.level.enemies.splice(index, 1);
                }, 400);
            }
        });
    }

    killEnemy(enemy) {
        if (enemy instanceof Chicken) {
            enemy.isAlive = false;
            enemy.img = enemy.IMAGE_DEAD;
        }
        if (enemy instanceof SmallChicken) {
            enemy.isAlive = false;
            enemy.img = enemy.IMAGE_DEAD;
        }
    }

    collisionCoins() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin, index)) {
                this.character.collectCoins();
                this.level.coins.splice(index, 1);
                this.statusBarCoins.setPercentageCoins(this.character.coinAmount);
            }
        });
    }

    collisionBottles() {
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.collectBottles();
                this.level.bottles.splice(index, 1);
                this.statusBarBottles.setPercentageBottles(this.character.bottle);
            }
        });
    }

    checkThrowableObjects() {
        if (this.keyboard.D) {
            if (this.character.bottleAmount > 0) {
                let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
                this.throwableObjects.push(bottle);
                this.character.bottleAmount -= 1;
                this.character.bottle -= 20;
                this.statusBarBottles.setPercentageBottles(this.character.bottle);
            }
        }
    }

    collectBottles() {
        if (this.character.bottle < 100) {
            this.character.bottle += 20;
            this.character.bottleAmount += 1;
            this.statusBarBottles.setPercentageBottles(this.character.bottle);
        }
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0);
        // --------- Space for fixed objects ---------
        this.addToMap(this.statusBarHealth);
        this.addToMap(this.statusBarCoins);
        this.addToMap(this.statusBarBottles);
        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
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