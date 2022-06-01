const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var fundoImg;
var torre;
var torreImg;
var canhao;


function preload() {
fundoImg = loadImage ("./assets/background.gif")
torreImg = loadImage ("./assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  options={
  isStatic:true
  }
  
  ground= Bodies.rectangle(0,height-1, width*2,1,options);
  World.add(world,ground);
  torre = Bodies.rectangle(160,350,160,310,options);
  World.add(world,torre);
  canhao = new Canhao (180,110,130,100,20)
}

function draw() {
  background(189);
  Engine.update(engine);
  
  //rect(ground.position.x, ground.position.y,width*2,1);
  image (fundoImg,0,0,1200,600)
  push()
  imageMode(CENTER)
  image(torreImg,torre.position.x,torre.position.y,160,310)
  pop()
  canhao.show()
}
