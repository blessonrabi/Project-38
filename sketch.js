
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var groundd,tree,treeimg;
var boy,boyimg;
var stones;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload(){
	boyimg=loadImage("boy.png");
  }

function setup() {

  canvas = createCanvas(displayWidth - 20, displayHeight-30);

	engine = Engine.create();
	world = engine.world;

	groundd=new ground(width/2,640,width,20);
	stones=new Stone(100,460,23);
	mango1=new Mango(600,290,34);
	mango2=new Mango(855,325,35);
	mango3=new Mango(670,260,35);
	mango4=new Mango(730,200,35);
	mango5=new Mango(710,320,35);
	mango6=new Mango(780,250,35);
	mango7=new Mango(825,170,35);
	mango8=new Mango(880,260,35);
	mango9=new Mango(940,220,35);
	mango10=new Mango(980,305,35);

	throw1=new Throw(stones.body,{x:235,y:465});
	
	tree1=new Tree(800,620);

	var render = Render.create({ element: document.body, engine: engine, options: { width: 1300, height: 600, wireframes: false } });

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("grey");
  
  fill("black");
  textSize(18);
  image (boyimg,200,340,200,300);
  detectCollision(stones,mango1);
  detectCollision(stones,mango2);
  detectCollision(stones,mango3);
  detectCollision(stones,mango4);
  detectCollision(stones,mango5);
  detectCollision(stones,mango6);
  detectCollision(stones,mango7);
  detectCollision(stones,mango8);
  detectCollision(stones,mango9);
  detectCollision(stones,mango10);

  drawSprites();

  stones.display();
  tree1.display();
  groundd.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
}

function mouseDragged(){
Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
throw1.fly
}
function keyPressed(){
if(keyCode===32){
Matter.Body.setPosition(stones.body,{x:235,y:465});
throw1.attach(stones.body)
}
}
function detectCollision(stones,mango){
mangobody=mango.body.position;
stonebody=stones.body.position;
var distance=dist(stonebody.x,stonebody.y,mango.x,mangobody.y)
if(distance<=mango.r+stones.r){
Matter.Body.setStatic(mango.body,false);
}
}