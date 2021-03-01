class Player{
    constructor(){
        this.name=null
        this.distance = 0
        this.index = null
        this.rank = "not completed yet"
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
    update(){
        var playerIndex ="players/player"+ this.index;
         db.ref(playerIndex).update({
             name:this.name,
             distance:this.distance,
             rank:this.rank
         })
    }
    static getPlayerInfo(){
        var playerInfoRef=db.ref("players")
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val()
        })
    }
    getCarsAtEnd(){
        db.ref("carsAtEnd").on("value", (data)=>{
            this.rank = data.val()
        })
    }
    static updateCarsAtEnd(rank){
        db.ref("/").update({
            carsAtEnd:rank
        })
    }
}