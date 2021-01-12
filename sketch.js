const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var world,engine;
var ball;
var ground;

function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;

  var ball_option={
    restitution:1.0
  }
  ball=Bodies.circle(200,20,20,ball_option);
  World.add(world,ball);
  console.log(ball.position.x);

  var ground_option={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,400,5,ground_option);
  World.add(world,ground);
}

function draw() {
  background(0);  

  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,5);
}