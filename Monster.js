class Monster{
    constructor(x, y, width, height) {
        var options = {
          restitution : 0.7,
          friction : 0.6,
          isStatic : false,
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("images/Monster-01.png");
        World.add(world, this.body);
      }
      display(){
        
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          imageMode(CENTER);
         image(this.image,0, 0, this.width, this.height);
          pop();
        
    
    
       
      }
}  
