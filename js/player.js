class Player{
    constructor(){
    }
    getPlayerCount(){
      db.ref("playerCount").on("value",function(data){
        playerCount=data.val();
      }); 
    }
    updatePlayerCount(count){
        db.ref("/").update({
            playerCount:count
        });
    }
    update(name){
        var playerIndex ="player"+ playerCount;
         db.ref(playerIndex).update({
             name:name
         })
    }
}