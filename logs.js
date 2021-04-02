//Design
class Log extends BaseClass {
    //PROPERTIES
    constructor(x, y,height,angle) {
      super(x,y,20,height,angle);
      Matter.Body.setAngle(this.body,angle);
      
      this.image = loadImage("images/wood2.png")
    }
  };
  
  /*
  
  ball1.width
  ball1.height
  
  ball2.width
  ball2.height
  
  width
  */