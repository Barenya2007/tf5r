
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(840, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof= new Roof(420,90,720,20);

	bob1= new Bob(200,490,40);
	bob2= new Bob(310,490,40);
	bob3= new Bob(420,490,40);
	bob4= new Bob(530,490,40);
	bob5= new Bob(640,490,40);

	rope1= new Rope(bob1.body,roof.body,-80*2,0);
	rope2= new Rope(bob2.body,roof.body,-80*2,0);
	rope3= new Rope(bob3.body,roof.body,-80*2,0);
	rope4= new Rope(bob4.body,roof.body,-80*2,0);
	rope5= new Rope(bob5.body,roof.body,-80*2,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



