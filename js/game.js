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
    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef=await db.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getPlayerCount();
            }
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
            var position = 130
            for(var plr in allPlayers){
                if(plr === "player" + player.index){
                    fill("red")
                }
                else{
                    fill("black")
                }
                position += 20
                textSize(15)
                text(allPlayers[plr].name+" : "+allPlayers[plr].distance, 120,position);
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index !== null){
            player.distance+=50
            player.update()
        }
    }
    
}