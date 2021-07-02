const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;


function preload(){
  bg=loadImage("images/GamingBackground.png");
 
}



function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
    world = engine.world;
  ground=new Ground(600,580,1100,20);
  block1=new Box (700,480,100,100)
  block2=new Box(800,480,100,100)
  block3=new Box(900,480,100,100)
  block4=new Box (700,380,100,100)
  block5=new Box(800,380,100,100)
  block6=new Box(900,380,100,100)
  block7=new Box (700,280,100,100)
  block8=new Box(800,280,100,100)
  block9=new Box(900,280,100,100)
  ball=new Ball(500,300,300,150)
  slingshot=new Slingshot(ball.body,{x:500,y:100
  })
  monster=new Monster(1000,500,300,300)
}

function draw() {
  background(bg);  
  Engine.update(engine)
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  ball.display();
  slingshot.display();
  monster.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY
 })
}