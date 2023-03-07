let notInFullscreen = true;
let klickedEscape = false;

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
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
      whenEscapeIsKlicked();
    }
}  

/**
 * If ESC is klicked to adapt screen
 */
function whenEscapeIsKlicked() {
    let changeIconFullscreen = document.getElementById('fullscreen');
    let changeIconFullscreenSecond = document.getElementById('fullscreenSecond');
    let gameDescription = document.getElementById('gameDescription');
    let consoleDescription = document.getElementById('console');
    gameDescription.classList.remove('game-description');
    consoleDescription.classList.remove('console-description');
    changeIconFullscreen.src = 'img/fullscreen_exit.png';
    changeIconFullscreenSecond.src = 'img/fullscreen_exit.png';
    let canvas = document.getElementById('canvas');
    canvas.classList.remove('for-canvas-fullscreen');
    let startScreen = document.getElementById('startScreen');
    startScreen.style.height = '480px';
    startScreen.style.width = '720px';
    notInFullscreen = true;
    exitFullscreen();
    klickedEscape = false;
}

function startFullscreen(fullscreenId) {
    if (notInFullscreen) {
        whenItsNotFullscreen(fullscreenId);
    } else {
        whenItsAlreadyFulllscreen(fullscreenId);
    }
}

function whenItsNotFullscreen(fullscreenId) {
    let changeIconFullscreen = document.getElementById(fullscreenId);
    if(changeIconFullscreen.src != 'img/fullscreen_exit.png') {
        changeIconFullscreen.src = 'img/fullscreen_exit.png';
    }
    let startScreen = document.getElementById('startScreen');
    let canvas = document.getElementById('canvas');
    let gameDescription = document.getElementById('gameDescription');
    let consoleDescription = document.getElementById('console');
    canvas.classList.add('for-canvas-fullscreen');
    startScreen.style.height = '100vh';
    startScreen.style.width = '100vw';
    gameDescription.classList.add('game-description');
    consoleDescription.classList.add('console-description');
    notInFullscreen = false;
    fullscreen();
}

function whenItsAlreadyFulllscreen(fullscreenId) {
    let changeIconFullscreen = document.getElementById(fullscreenId);
    if(changeIconFullscreen.src != 'img/fullscreen.png') {
        changeIconFullscreen.src = 'img/fullscreen.png';
    }
    let canvas = document.getElementById('canvas');
    canvas.classList.remove('for-canvas-fullscreen');
    let startScreen = document.getElementById('startScreen');
    let gameDescription = document.getElementById('gameDescription');
    let consoleDescription = document.getElementById('console');
    gameDescription.classList.remove('game-description');
    consoleDescription.classList.remove('console-description');
    checkFromWhereTheFullscreenEventComesFrom(fullscreenId, startScreen);
    notInFullscreen = true;
    exitFullscreen();
}

function checkFromWhereTheFullscreenEventComesFrom(fullscreenId, startScreen) {
    if (fullscreenId == 'fullscreenSecond') {
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
    } else if (element.msRequestFullscreen) {      // for IE11 (remove June 15, 2022)
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {  // iOS Safari
        element.webkitRequestFullscreen();
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}