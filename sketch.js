
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, stone, tree, treeIMG, boyIMG;
var mango1, mango2, mango3, mango3, mango4, mango5, mango6;
var ground;
var pelter;

function preload()
{
	treeIMG = loadImage("Pluckingmangoes/tree.png");
	boyIMG = loadImage("Pluckingmangoes/boy.png");
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(800,750,1600,20);

	
	
	stone = new Stone(180,80,30);
	
	

	mango1 = new Mango(700,400,30);
	
	mango2 = new Mango(800,450,30);
	mango3 = new Mango(890,400,30);
	
	mango4 = new Mango(950,300,30);

	pelter = new SlingShot(stone,{x:100,y:600});

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);


  background(255);
text(mouseX+","+mouseY,mouseX,mouseY);
  	imageMode(CENTER);
	image(treeIMG,900,500,500,500);
	imageMode(CENTER);
	image(boyIMG,200,670,300,300);
  
  //boy.display();
  stone.display();
  //tree.display();
  mango1.display();
 	mango2.display();
  mango3.display();
  mango4.display();
  ground.display();
  pelter.display();
  
 
}



