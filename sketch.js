
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin,paper,ground;
function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbin=new Dustbin(1200,650)
paper=new Paper(200,450,20)
ground=new Ground(width/2,670,width,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 dustbin.display()
 paper.display()
	 ground.display()
 

}
function keyPressed(){
	if (keyCode==UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.positon,{x:85,y:-85}) 
	}
	
}


