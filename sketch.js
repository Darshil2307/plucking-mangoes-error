const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world
var ground,tree,treeimg
var boy,boyimg
var stones
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10

function preload()
{
  
}

function setup() 
{
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

 tree1 = new Tree(250,650,30,100);
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ground.display();
  tree.display();
  

  drawSprites();
 
}



