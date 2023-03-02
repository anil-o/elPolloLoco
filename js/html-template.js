function backToStartScreen() {
    let startButton = document.getElementById('startButton');
    let startIcons = document.getElementById('startIcons');
    let startScreen = document.getElementById('startScreen');
    let gameDescription = document.getElementById('gameDescription');
    let consoleDescription = document.getElementById('console');
    startButton.classList.remove('d-none');
    startIcons.classList.remove('d-none');
    startScreen.classList.add('start-screen');
    gameDescription.classList.add('d-none');
    consoleDescription.classList.add('d-none');
}

function loadDescription() {
    let startButton = document.getElementById('startButton');
    let startIcons = document.getElementById('startIcons');
    let startScreen = document.getElementById('startScreen');
    let gameDescription = document.getElementById('gameDescription');
    startButton.classList.add('d-none');
    startIcons.classList.add('d-none');
    startScreen.classList.remove('start-screen');
    gameDescription.classList.remove('d-none');
    gameDescription.innerHTML = templateLoadDescription();
}

function templateLoadDescription() {
    return `
    <div class="intro-text">
    <div onclick="backToStartScreen()" class="back-icon"><img src="img/back-arrow.png"></div>

    <div class="title">El Pollo Loco</div><br>
    Welcome to El Pollo Loco, an exciting adventure game that will test your skills and reflexes. In this game
    you take on the role of Pepe, a fearless adventurer.<br><br>

    Pepe Pelligroso has been captured and is now trying to escape. But beware, the journey ahead is not easy. The creatures
    will not surrender without a fight and will do everything in their power to stop you. Fortunately, Pepe is
    equipped with a variety of weapons and skills that will help him overcome any obstacle. <br> <br>

    Try to collect the coins as quickly as possible to gain speed. You can kill the creatures by jumping on them or throwing them with the bottle.
    But make sure you have enough bottles to defeat the final boss. You have to hit him four times. Otherwise you will be trapped forever.<br><br> 
    
    <div class="title">I wish you good luck on your journey!</div>
    </div>`;
}

function consoleDescription() {
    let startButton = document.getElementById('startButton');
    let startIcons = document.getElementById('startIcons');
    let startScreen = document.getElementById('startScreen');
    let gameDescription = document.getElementById('gameDescription');
    let consoleDescription = document.getElementById('console');
    startButton.classList.add('d-none');
    startIcons.classList.add('d-none');
    startScreen.classList.remove('start-screen');
    gameDescription.classList.add('d-none');
    consoleDescription.classList.remove('d-none');
    consoleDescription.innerHTML = templateConsoleDescritpion();
}

function templateConsoleDescritpion() {
    return `
    <div class="console-keyboard">
    <div onclick="backToStartScreen()" class="back-icon"><img src="img/back-arrow.png"></div>

    <div class="console">

    <div class="console-child">
    <div>Move Left</div>
    <div><img src="img/arrow-left.png"></div>
    </div>

    <div class="console-child">
    <div>Move Right</div>
    <div><img src="img/arrow-right.png"></div>
    </div>

    <div class="console-child">
    <div>Jump</div>
    <div><img src="img/space-bar.png"></div>
    </div>

    <div class="console-child">
    <div>Throw Bottle</div>
    <div class="throwable-keyboard">D</div>
    </div>

    </div>
    
    </div>`;
}