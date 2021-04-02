//Design
class Bird extends BaseClass {
    //PROPERTIES
    constructor(x, y) {
      //transfers all the properties from the base class
      super(x, y, 50, 50);
      this.image = loadImage("images/bird.png");
      
    }
   
  };
  
  /*
 INHERITANCE - Code reusability
 Parent - Base Class (Super Class)
 Children - Sub-classes - Inherit all the properties & functions from the base class
  */