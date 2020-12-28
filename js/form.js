class Form{
    constructor(){
    }
    display(){
      var name = createInput("name");
      var button = createButton("play");
      var title = createElement("h1");
      title.position(130,10);
      name.position(130,160);
      button.postion(130,225);
      button.mousePressed();

    }
}