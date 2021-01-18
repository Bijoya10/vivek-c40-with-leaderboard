var playerCount, gameState = 0;
var db, player,form,game;
var allPlayers;
var c1, c2, c3, c4, cars=[]
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
}

