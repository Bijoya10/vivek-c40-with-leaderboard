class Game{
    constructor(){
    }
    getGameState(){
        db.ref("gameState").on("value",function(data){
            gameState=data.val();
        });
        }
    updateGameState(state){
        db.ref("/").update({
            gameState:state
        });
    }
    start(){
        if(gameState===0){
            player=new Player();
            player.getPlayerCount();
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hide()
        Player.getPlayerInfo();
        textSize (30);
        text("Game Started", 120,100);
        if(allPlayers !== undefined){

        }
        if(keyIsDown(UP_ARROW)&&player.index !== null){
            player.distance+=50
            player.update()
        }
    }
    
}