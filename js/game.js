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
        c1 = createSprite(100,200)
        c2 = createSprite(300,200)
        c3 = createSprite(500,200)
        c4 = createSprite(700,200)
        cars = [c1,c2,c3,c4]
    }
    play(){
        form.hide()
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            var index = 0, x = 0, y
            for(var plr in allPlayers){
                index++;
                x = x + 200
                y=displayHeight-allPlayers[plr].distance
                cars[index-1].x=x
                cars[index-1].y=y
                if(index === player.index){
                    cars[index-1].shapeColor="red"
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y
                }
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index !== null){
            player.distance+=50
            player.update()
        }
        drawSprites();
    }
    
}