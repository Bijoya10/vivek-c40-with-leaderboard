class Form{
    constructor(){
      this.inputname = createInput("name");
      this.button = createButton("play");
      this.greeting = createElement("h2");
      this.reset = createButton("reset");
    }
    hide(){
      this.inputname.hide();
      this.button.hide();
      this.greeting.hide();
    }
    display(){
      var title = createElement("h1");
      title.html("carRacingGame")
      title.position(displayWidth/2-50,10);
      this.inputname.position(displayWidth/2-20,displayHeight/2-80);
      this.button.position(displayWidth/2-20,displayHeight/2-30);
      this.reset.position(displayWidth-100,50);
      this.reset.mousePressed(()=>{
        game.updateGameState(0);
        player.updatePlayerCount(0);
        location.reload();
      });
      this.button.mousePressed(()=>{
        this.inputname.hide();
        this.button.hide();
        player.name = this.inputname.value();
        playerCount = playerCount + 1;
        player.index = playerCount;
        player.update();
        player.updatePlayerCount(playerCount);
        this.greeting.html("hello, "+player.name);
        this.greeting.position(displayWidth/2-20,displayHeight/2-30);
      });

    }
}