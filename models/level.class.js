class Level {
    enemies;
    clouds;
    backgroundObjects;
    bottles;
    coins;
    level_end_x = 3600;

    /**
     * the function constructor runs always automatically whenever we create a new instance of the class
     */
    constructor(enemies, clouds, backgroundObjects, bottles, coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottles = bottles;
        this.coins = coins;
    }
}