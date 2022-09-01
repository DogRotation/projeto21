
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var wall1, wall2;
var ball;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ballOptions = {
		isStatic: false,
		restitution: 0.3,
		friction: 0.3,
		density: 1.2
	}

	//Create the Bodies Here.
	ground = new Ground(400,480,800,30);
	wall1 = new Ground(460,450,15,30);
	wall2 = new Ground(360,450,15,30);
	ball =  Bodies.circle(150,400,12, ballOptions); 
	World.add(world,ball);

	

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
	ground.show();
	wall1.show();
	wall2.show();
	ellipse(ball.position.x,ball.position.y,12);
	
	
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball,{x: 0,y: 0}, {x: 4,y: 0});
	}
	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(ball,{x: 0,y:0}, {x: 0, y: -4});
	}
}




