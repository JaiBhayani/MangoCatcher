
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, stone, tree
var mango1, mango2, mango3, mango3, mango4, mango5, mango6;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = new Boy(200,100,70,70);
	stone = new Stone(180,80,70,70);
	tree = new Tree(300,100,70,70);

	mango1 = new Mango(310,100,70,70);
	mango2 = new Mango(290,110,70,70);
	mango3 = new Mango(270,120,70,70);
	mango4 = new Mango(277,115,70,70);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(255);
  
  boy.display();
  stone.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  
  drawSprites();
 
}



