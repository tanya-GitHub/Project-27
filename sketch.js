
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 100, 475, 50);
	World.add(world, ground);

	bob1 = new Bob(400, 400, 75);
	World.add(world, bob1);

	bob2 = new Bob(475, 400, 75);
	World.add(world, bob2);

	bob3 = new Bob(550, 400, 75);
	World.add(world, bob3);

	bob4 = new Bob(325, 400, 75);
	World.add(world, bob4);

	bob5 = new Bob(250, 400, 75);
	World.add(world, bob5);

	rope1 = new Rope(bob1.body, ground.body, 0, 0);
	rope2 = new Rope(bob2.body, ground.body, 75, 0);
	rope3 = new Rope(bob3.body, ground.body, 150, 0);
	rope4 = new Rope(bob4.body, ground.body, -75, 0);
	rope5 = new Rope(bob5.body, ground.body, -150, 0);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(255);

  console.log(bob3);

  ground.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  //bob3.body.position.x = mouseX;

  keyPressed();

}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(bob3.body, bob3.body.position, {x: -100, y: 0});

/*		Matter.Body.setStatic(bob1.body, false);
		Matter.Body.setStatic(bob2.body, false);
		Matter.Body.setStatic(bob3.body, false);
		Matter.Body.setStatic(bob4.body, false);
		Matter.Body.setStatic(bob5.body, false);*/

	}
}
