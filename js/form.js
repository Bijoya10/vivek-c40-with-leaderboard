class Form{
    constructor(){
      this.name = createInput("name");
      this.button = createButton("play");
      this.greeting = createElement("h2");
    }
    hide(){
      this.name.hide();
      this.button.hide();
      this.greeting.hide();
    }
    display(){
      var title = createElement("h1");
      title.html("carRacingGame")
      title.position(130,10);
      this.name.position(130,160);
      this.button.position(130,225);
      this.button.mousePressed(function(){
        this.name.hide();
        this.button.hide();
        player.name = this.name.value();
        playerCount = playerCount + 1;
        player.index = playerCount;
        player.update();
        player.updatePlayerCount(playerCount);
        this.greeting.html("hello, "+player.name);
        this.greeting.position(130,160);
      });

    }
}