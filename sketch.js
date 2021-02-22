var playerCount, gameState = 0;
var db, player,form,game;
var allPlayers;
var c1, c2, c3, c4, cars=[]
var c1Img, c2Img, c3Img, c4Img, trackImg
function preload(){
    c1Img = loadImage("images/car1.png");
    c2Img = loadImage("images/car2.png");
    c3Img = loadImage("images/car3.png");
    c4Img = loadImage("images/car4.png");
    trackImg = loadImage("images/track.jpg");
}
function setup(){
    createCanvas(displayWidth-30, displayHeight-50);
    db = firebase.database()
    game = new Game();
    game.getGameState();
    game.start();
}

function draw(){
    if(playerCount===4){
        game.updateGameState(1)
    }
    if(gameState === 1){
        clear();
        game.play()
    }
    if(gameState === 2){
        clear();
        game.end()
    }
}

