
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = Bodies.rectangle(width/2, 150, 200, 10 , {isStatic:true} );
	World.add(world,roof);
	Engine.run(engine);
	bobObject3 = new Bob(400,350,25);
	bobObject4 = new Bob(450,350,25);
	bobObject5 = new Bob(500,350,25);
	bobObject2 = new Bob(350,350,25);
	bobObject1 = new Bob(300,350,25);

	rope2 = new Rope(bobObject2.body, roof, -25*2, 0);
	rope4 = new Rope(bobObject4.body, roof, 25*2, 0);
	rope5 = new Rope(bobObject5.body, roof, 50*2, 0);
	rope1 = new Rope(bobObject1.body, roof, -50*2, 0);
	rope3 = new Rope(bobObject3.body, roof, -0*2, 0);

}


function draw() {
  rectMode(CENTER);
  background("grey");
  drawSprites();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  fill("black");
  rect(roof.position.x, roof.position.y,350,10);


}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-75,y:-50})
	}
	
}




