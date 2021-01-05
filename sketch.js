var log1,log2,log3;
var ground;
var ball,binImage,bin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	binImage= loadImage("bin.png");
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,380,1200,20);
  log1=new Dustbin(1000,370,210,20);
	log2=new Dustbin(1085,260,20,200);
  log3=new Dustbin(915,260,20,200);
	ball= new Paper(200,320);

  bin= createSprite(1000,250,20,20);
  bin.addImage(binImage);
  bin.scale=0.2;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);

  ball.display();
  
 
  drawSprites();
 
} 

function keyPressed(){
     if(keyCode===UP_ARROW){
		 Matter.Body.applyForce(ball.body,ball.body.position,{x:300,y:-320});
	 }
}

