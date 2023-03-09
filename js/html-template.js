let notInFullscreen = true;
let klickedEscape = false;
let itsAlreadyExit = true;


/**
 * Comes to the start screen back
 */
function backToStartScreen() {
    let startButton = document.getElementById('startButton');
    let startIcons = document.getElementById('startIcons');
    let startScreen = document.getElementById('startScreen');
    let gameDescription = document.getElementById('gameDescription');
    let consoleDescription = document.getElementById('console');
    startButton.classList.remove('d-none');
    startIcons.classList.remove('d-none');
    startScreen.style.display = 'flex';
    gameDescription.classList.add('d-none');
    consoleDescription.classList.add('d-none');
}

/**
 * Shows the description of the Game
 */
function loadDescription() {
    let startButton = document.getElementById('startButton');
    let startIcons = document.getElementById('startIcons');
    let startScreen = document.getElementById('startScreen');
    let gameDescription = document.getElementById('gameDescription');
    startButton.classList.add('d-none');
    startIcons.classList.add('d-none');
    startScreen.style.display = 'none';
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

    Try to collect the coins as quickly as possible. You can kill the creatures by jumping on them or throwing them with the bottle.
    But make sure you have enough bottles to defeat the final boss. You have to hit him four times. Otherwise you will be trapped forever.<br><br>
    
    <div class="title">I wish you good luck on your journey!</div>
    </div>`;
}

/**
 * Shows with which keyboard you can play
 */
function consoleDescription() {
    let startButton = document.getElementById('startButton');
    let startIcons = document.getElementById('startIcons');
    let startScreen = document.getElementById('startScreen');
    let gameDescription = document.getElementById('gameDescription');
    let consoleDescription = document.getElementById('console');
    startButton.classList.add('d-none');
    startIcons.classList.add('d-none');
    startScreen.style.display = 'none';
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

/**
 * If ESC is klicked to adapt screen
 */
document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);

function exitHandler() {
    if(itsAlreadyExit) {
        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            whenEscapeIsKlicked();
        }
    }
}

/**
 * If ESC is klicked to adapt screen
 */
function whenEscapeIsKlicked() {
    changeFullscreenIcon();
    changeScreenWhenClickedEscape();
    notInFullscreen = true;
    exitFullscreen();
    klickedEscape = false;
}

function changeScreenWhenClickedEscape() {
    let gameDescription = document.getElementById('gameDescription');
    let consoleDescription = document.getElementById('console');
    let canvas = document.getElementById('canvas');
    let startScreen = document.getElementById('startScreen');
    gameDescription.classList.remove('game-description');
    canvas.classList.remove('for-canvas-fullscreen');
    consoleDescription.classList.remove('console-description');
    startScreen.style.height = '480px';
    startScreen.style.width = '720px';
}

function changeFullscreenIcon() {
    document.getElementById('fullscreen').classList.remove('d-none');
    document.getElementById('fullscreenExit').classList.add('d-none');
    document.getElementById('fullscreenDuringTheGame').classList.remove('d-none');
    document.getElementById('fullscreenExitDuringTheGame').classList.add('d-none');
}

function startFullscreen(fullscreenId) {
    if (notInFullscreen) {
        goToFullscreen();
    } else {
        whenItsAlreadyFulllscreen(fullscreenId);
    }
}

function goToFullscreen() {
    changeFullscreenIconIfItsAlreadyInFullscreen();
    changeScreenDependOnclickIcon();
    notInFullscreen = false;
    itsAlreadyExit = true;
    fullscreen();
}

function changeScreenDependOnclickIcon() {
    let startScreen = document.getElementById('startScreen');
    let canvas = document.getElementById('canvas');
    let gameDescription = document.getElementById('gameDescription');
    let consoleDescription = document.getElementById('console');
    canvas.classList.add('for-canvas-fullscreen');
    startScreen.style.height = '100vh';
    startScreen.style.width = '100vw';
    gameDescription.classList.add('game-description');
    consoleDescription.classList.add('console-description');
}

function changeFullscreenIconIfItsAlreadyInFullscreen() {
    document.getElementById('fullscreen').classList.add('d-none');
    document.getElementById('fullscreenExit').classList.remove('d-none');
    document.getElementById('fullscreenDuringTheGame').classList.add('d-none');
    document.getElementById('fullscreenExitDuringTheGame').classList.remove('d-none');
}

function whenItsAlreadyFulllscreen(fullscreenId) {
    let startScreen = document.getElementById('startScreen');
    changeFullscreenIcon();
    changesTheScreenDependOnIcon();
    checkFromWhereTheFullscreenEventComesFrom(fullscreenId, startScreen);
    notInFullscreen = true;
    exitFullscreen();
}

function changesTheScreenDependOnIcon() {
    let canvas = document.getElementById('canvas');
    let gameDescription = document.getElementById('gameDescription');
    let consoleDescription = document.getElementById('console');
    gameDescription.classList.remove('game-description');
    consoleDescription.classList.remove('console-description');
    canvas.classList.remove('for-canvas-fullscreen');
}

function checkFromWhereTheFullscreenEventComesFrom(fullscreenId, startScreen) {
    if (fullscreenId == 'fullscreenDuringTheGame' || fullscreenId == 'fullscreenExitDuringTheGame') {
        startScreen.style.height = 'unset';
        startScreen.style.width = 'unset';
    } else {
        startScreen.style.height = '480px';
        startScreen.style.width = '720px';
    }
}

function fullscreen() {
    let fullscreenDiv = document.getElementById('fullscreenDiv');
    enterFullscreen(fullscreenDiv);
}

function enterFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen === null) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
    itsAlreadyExit = false;
}