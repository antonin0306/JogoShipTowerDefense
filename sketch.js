const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var fundoImg;
var torre;
var torreImg;
var canhao;
var bolas = []


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
  boladecanhao= new BolaDeCanhao (canhao.x,canhao.y)
}

function draw() {
  background(189);
  Engine.update(engine);
  angleMode(DEGREES)
  //rect(ground.position.x, ground.position.y,width*2,1);
  image (fundoImg,0,0,1200,600)
  push()
  imageMode(CENTER)
  image(torreImg,torre.position.x,torre.position.y,160,310)
  pop()
  canhao.show()
  for (var i = 0; i<bolas.length; i++) {
mostrarB(bolas[i])
  }
}
function keyReleased () {
if (keyCode==DOWN_ARROW) {
  bolas[bolas.length-1].throw()
}
}
function keyPressed () {
  if (keyCode==DOWN_ARROW) {
    var bola = new BolaDeCanhao (canhao.x, canhao.y)
    bolas.push (bola)
  }
}
function mostrarB (ball) {
if (ball) {
ball.display()
}
}