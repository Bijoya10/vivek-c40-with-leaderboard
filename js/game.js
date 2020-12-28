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
}