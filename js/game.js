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
        c1.addImage("car1", c1Img);
        c2.addImage("car2", c2Img);
        c3.addImage("car3", c3Img);
        c4.addImage("car4", c4Img);
    }
    play(){
        form.hide()
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            background("white");
            image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index = 0, x = 180, y
            for(var plr in allPlayers){
                index++;
                x = x + 250
                y=displayHeight-allPlayers[plr].distance
                fill("white");
                textSize(15);
                text(allPlayers[plr].name,x,y-50)
                cars[index-1].x=x
                cars[index-1].y=y
                if(index === player.index){
                    fill("red");
                    ellipse(x,y,70,70);
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y
                }
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index !== null){
            player.distance+=50
            player.update()
        }
        if(player.distance>4300){
            gameState = 2;
        }
        drawSprites();
    }
    end(){
        console.log("game ended")
    }  
}