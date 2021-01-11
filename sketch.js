var playerCount, gameState = 0;
var db, player,form,game;
var allPlayers;
function setup(){
    createCanvas(500,500);
    db = firebase.database()
    game = new Game();
    game.getGameState();
    game.start();
}

function draw(){
    if(playerCount===4){
        game.updateGameState(1)
    }

}

